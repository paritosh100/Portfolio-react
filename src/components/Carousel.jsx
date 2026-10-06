import { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Matches the site's --ease-out cubic-bezier(0.23, 1, 0.32, 1) closely enough for a scroll tween.
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function smoothScrollTo(el, target, duration = 450) {
  const start = el.scrollLeft;
  const distance = target - start;
  const startTime = performance.now();

  function step(now) {
    const elapsed = Math.min((now - startTime) / duration, 1);
    el.scrollLeft = start + distance * easeOutCubic(elapsed);
    if (elapsed < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

export default function Carousel({ children }) {
  const trackRef = useRef(null);
  const itemRefs = useRef([]);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [perView, setPerView] = useState(1);
  const total = children.length;

  // Which item is currently leftmost in view, found via each item's real offset
  // (not an average-width guess) — keeps the counter honest at any viewport size.
  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    const firstItem = itemRefs.current[0];
    if (!el) return;
    const isEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(isEnd);
    if (firstItem) {
      setPerView(Math.max(1, Math.round(el.clientWidth / firstItem.offsetWidth)));
    }

    if (isEnd) {
      setActiveIndex(total - 1);
      return;
    }
    let closest = 0;
    let closestDiff = Infinity;
    itemRefs.current.forEach((node, i) => {
      if (!node) return;
      const diff = Math.abs(node.offsetLeft - el.scrollLeft);
      if (diff < closestDiff) {
        closestDiff = diff;
        closest = i;
      }
    });
    setActiveIndex(closest);
  }, [total]);

  useEffect(() => {
    updateEdges();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateEdges, { passive: true });
    window.addEventListener('resize', updateEdges);
    return () => {
      el.removeEventListener('scroll', updateEdges);
      window.removeEventListener('resize', updateEdges);
    };
  }, [children, updateEdges]);

  const scrollByPage = (dir) => {
    const el = trackRef.current;
    if (!el) return;

    const targetIndex = Math.min(Math.max(activeIndex + dir * perView, 0), total - 1);
    const targetNode = itemRefs.current[targetIndex];
    if (!targetNode) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    smoothScrollTo(el, Math.min(targetNode.offsetLeft, maxScroll));
  };

  return (
    <div className="carousel">
      <motion.button
        type="button"
        className="carousel-nav prev"
        onClick={() => scrollByPage(-1)}
        disabled={atStart}
        aria-label="Previous"
        whileHover={atStart ? undefined : { scale: 1.08 }}
        whileTap={atStart ? undefined : { scale: 0.92 }}
        transition={{ duration: 0.15 }}
      >
        <ChevronLeft size={22} />
      </motion.button>

      <div className="carousel-track" ref={trackRef}>
        {children.map((child, i) => (
          <div
            className="carousel-item"
            key={i}
            ref={(node) => { itemRefs.current[i] = node; }}
          >
            {child}
          </div>
        ))}
      </div>

      <motion.button
        type="button"
        className="carousel-nav next"
        onClick={() => scrollByPage(1)}
        disabled={atEnd}
        aria-label="Next"
        whileHover={atEnd ? undefined : { scale: 1.08 }}
        whileTap={atEnd ? undefined : { scale: 0.92 }}
        transition={{ duration: 0.15 }}
      >
        <ChevronRight size={22} />
      </motion.button>

      <span className="carousel-counter">
        {Math.floor(activeIndex / perView) + 1} / {Math.ceil(total / perView)}
      </span>
    </div>
  );
}
