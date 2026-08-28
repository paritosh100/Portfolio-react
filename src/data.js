// Edit this file to personalize the entire site.

// Basic identity
export const identity = {
    name: "Paritosh Gandre", // Replace with your name
    title: "Senior Machine Learning Engineer", // Your headline/title
    email: "paritoshkrcg@gmail.com", // For footer/contact
    phone: "+1 330-554-8445",
    location: "Mountain View, CA", // Optional
    resumeUrl: "/PARITOSH-GANDRE.pdf", // Keep path; replace file in /public
    profileImage: "/LINKEDIN-PROFILE-PIC.png", // Replace file in /public
    portfolioUrl: "https://paritosh-gandre.vercel.app",
    shortIntro: `Senior Machine Learning Engineer with 3+ years building production real-time voice AI systems. Architecting sub-1000ms latency inference pipelines (ASR to neural machine translation to TTS) serving tens of thousands of concurrent users at 99.9% SLA. Expertise in LLM-as-judge evaluation, inference optimization, and multi-tenant production infrastructure.`,
};

// About + skills
export const about = {
    bio: `I'm a Machine Learning Engineer with 3+ years of production experience building real-time voice AI and LLM systems at scale. My work spans architecting end-to-end inference pipelines (speech-to-text, neural machine translation, speech synthesis) with sub-1000ms latency, building LLM-as-judge evaluation harnesses to standardize model selection and release gating, and hardening multi-tenant production infrastructure with row-level security, RBAC, and GDPR-compliant audit trails. I hold an M.S. in Data Science from Kent State University, where my research applied CNN and transformer architectures to genomic sequence classification. My focus is on bridging ML research into reliable, observable production systems.`,
    skills: [

    ]
};

export const skills = {
    "ML & Voice AI": [
        "PyTorch", "TensorFlow", "CUDA", "LLM-as-judge evaluation",
        "Multi-model evaluation harnesses", "Neural machine translation",
        "Text-to-speech", "Speech recognition", "Inference optimization",
        "Model quantization", "RAG", "FAISS", "Multi-agent orchestration"
    ],
    "Backend & Infrastructure": [
        "Python", "TypeScript", "FastAPI", "PostgreSQL", "Row-Level Security",
        "SQL", "Docker", "Terraform", "LiveKit WebRTC", "CTranslate2"
    ],
    "Cloud & Observability": [
        "AWS (EC2, RDS, IAM)", "Google Cloud (BigQuery, Cloud Functions)",
        "GitHub Actions CI/CD", "Datadog observability", "Apache Airflow"
    ],
    "Reliability & Compliance": [
        "GDPR-compliant audit design", "RBAC", "TOTP-based MFA",
        "Automated testing (unit/integration/e2e)"
    ]
};


// Experience (add as many as you like)
export const experiences = [{
        company: "OViiE AI (STELLA™)",
        role: "Senior Machine Learning Engineer",
        start: "Nov 2025",
        end: "Present",
        bullets: [
            "Shipped 6 production systems end-to-end (database, backend, frontend) within a real-time AI voice translation platform, integrating cloud speech-to-text, custom translation model deployment, and real-time speech synthesis over WebRTC at sub-1000ms end-to-end latency",
            "Diagnosed a production translation service running under 3% GPU utilization and resolved it via concurrent request handling, dynamic batching, and model quantization, driving 8x throughput and roughly 38% lower infrastructure costs; separately cut P95 inference latency ~30% and raised peak GPU utilization from under 5% to over 60% through model export optimization and batching tuning",
            "Built an AI-graded multi-model evaluation harness (LLM-as-judge) across multiple language pairs, running A/B tests comparing commercial and self-hosted translation model options and identifying/resolving failure modes (hallucination, sentence-drop) to inform migration to a higher-performing production model",
            "Reduced TTS synthesis costs 80% (4x fewer redundant synthesis calls) via provider-change-immune LRU caching achieving 95%+ cache hit rates, delivering multi-five-figure annual infrastructure savings",
            "Hardened multi-tenant security with PostgreSQL Row-Level Security, RBAC, GDPR-compliant audit trails, and TOTP-based MFA across a platform serving dozens of hospitality properties, achieving zero cross-org incidents",
            "Achieved 90%+ test coverage (2,000+ automated tests) across database, API, and frontend layers, maintaining zero customer-facing billing or production errors in a live multi-tenant environment"
        ]
    },
    {
        company: "Kent State University",
        role: "Research Assistant",
        start: "Jul 2025",
        end: "Dec 2025",
        bullets: [
            "Built a real-time mobile application for exercise form correction using React Native, TensorFlow Lite, and VisionCamera, enabling on-device pose analysis and feedback",
            "Optimized on-device inference pipelines to achieve sub-50 ms latency, supporting smooth visual and audio guidance during live exercise sessions",
            "Designed modular, type-safe TypeScript components to support scalable addition of new exercises, pose rules, and feedback logic"
        ]
    },
    {
        company: "Kent State University",
        role: "Research Assistant – Deep Learning for Genomic Data Analysis",
        start: "Feb 2025",
        end: "May 2025",
        bullets: [
            "Engineered CNN-based DNA classifier, improving accuracy by 7% over baseline models",
            "Reduced training time by 15% through optimized data balancing and GPU batching",
            "Automated Dockerized ETL pipelines, reducing preprocessing effort by 80%"
        ]
    },
    {
        company: "Kent State University",
        role: "Data Analyst – Supply Chain",
        start: "Jan 2025",
        end: "May 2025",
        bullets: [
            "Forecasted ingredient demand using ARIMA, reducing over-purchasing by 15% (~$10K savings)",
            "Automated SQL-to-Power BI pipeline with AWS S3, reducing reporting latency by 30%",
            "Conducted A/B testing for procurement strategies, improving forecast reliability"
        ]
    },
    {
        company: "Inke (SafeSpace)",
        role: "Data Scientist – AI Engineering",
        start: "May 2024",
        end: "Dec 2024",
        bullets: [
            "Designed recommendation algorithms with collaborative filtering, boosting CTR by 10%",
            "Deployed Airflow-based retraining pipelines on AWS EC2, improving reliability by 30%",
            "Optimized Django REST APIs using Docker, reducing response latency by 30%"
        ]
    },
    {
        company: "Kent State University",
        role: "Operations Data Analyst (Catering Analytics Associate)",
        start: "Apr 2024",
        end: "Dec 2024",
        bullets: [
            "Analyzed 15K+ POS records to optimize procurement, reducing food costs by 12% (~$4.8K savings)",
            "Developed Power BI/Tableau dashboards for KPI visualization, accelerating decision-making by 30%",
            "Automated Excel/VBA reporting processes, cutting manual time by 25%"
        ]
    },
    {
        company: "S L Kulkarni Cyril Graphics Pvt. Ltd.",
        role: "Data Scientist",
        start: "Jan 2022",
        end: "Jun 2023",
        bullets: [
            "Developed predictive maintenance models using sensor data, reducing downtime by 20%",
            "Built real-time dashboard using Python, Flask, and SQL for machine health monitoring",
            "Engineered ETL pipelines integrating heterogeneous datasets, improving efficiency by 30%"
        ]
    }
];

// Projects (3–6 recommended)
export const projects = [{
        title: "InsightBridge – Multi-Agent LLM Orchestration Platform",
        description: "Multi-agent LLM orchestration platform with a 6-agent async pipeline (analysis, synthesis, refinement, validation) built on FastAPI and Next.js with Pydantic-validated contracts. Optimized LLM response latency 4x via feature-flagged backend routing (OpenAI single-call vs. multi-agent Gemini) with content-safety guardrails across dual LLM backends. Deployed as a two-service production app (Vercel frontend, Docker/Cloud Run backend).",
        tech: ["Python", "FastAPI", "Next.js", "TypeScript", "OpenAI", "Gemini", "Pydantic", "Docker", "Google Cloud Run"],
        repo: "https://github.com/paritosh100/InsightBridge",
        live: "",
        image: "../imgs/insightbridge.png" // TODO: replace with an InsightBridge screenshot
    },
    {
        title: "Marathi TTS Text Normalization",
        description: "Text normalization pipeline for low-resource-language TTS, fine-tuning Llama-3.1-8B via QLoRA to convert raw multi-script Marathi into speech-ready Devanagari. Built a two-metric evaluation pipeline (normalizer WER + round-trip WER) that decoupled model quality from synthesis noise and caught a 47% WER regression in code review before production. Diagnosed a silent reproducibility regression in a third-party TTS library degrading 75% of real inputs, isolating the root cause via version-by-version checkpoint comparison and shipping a full fix. Instrumented all experiment runs in MLflow for a queryable audit trail across model and config changes.",
        tech: ["Python", "Llama-3.1-8B", "QLoRA", "MLflow", "TTS", "NLP", "Evaluation"],
        repo: "https://github.com/paritosh100/marathi-tts-text-normalization",
        live: "https://marathi-tts-text-normalization.vercel.app/",
        image: "../imgs/marathi-tts.png" // TODO: replace with a Marathi TTS screenshot
    },
    {
        title: "ReShape City AI – Multimodal Urban Design Intelligence",
        description: "AI-powered urban planning tool that analyzes street and satellite images using Gemini 3 Pro. Extracts spatial metrics, generates walkability and safety indices, creates before-and-after redesign visuals, and provides an interactive urban planner chatbot. Built with multimodal AI, computer vision, generative modeling, and a React-based dashboard.",
        tech: [
            "Multimodal AI",
            "Computer Vision",
            "Generative AI",
            "Urban Analytics",
            "React & TypeScript",
            "Google AI Studio",
            "Data Modeling",
            "Geospatial Reasoning"
        ],
        repo: "https://github.com/paritosh100/ReShape-City-AI",
        live: "https://aistudio.google.com/apps/drive/1sWtrK84i3JC6sYjL2Qbznz0-XtfA3WSv?fullscreenApplet=true&showPreview=true&showAssistant=true",
        image: "../imgs/reshape.png"
    },
    {
        title: "Clinical Trial Statistical Analysis Project (ACTG + Simulated Data)",
        description: "End to end clinical data analysis workflow including data cleaning, variable derivation, TFL style baseline tables, logistic regression, and CD4 trajectory visualizations. Built using R with a structure similar to Statistical Programmer workflows in clinical research.",
        tech: ["R Programming", "Clinical Trial Analysis", "Statistical Data Analysis", "CDISC Standard", "BioStatistics"],
        repo: "https://github.com/paritosh100/Clinical-trial-statistical-Analysis/tree/master",
        live: "",
        image: "../imgs/km_plot_ggplot.png"
    },
    {
        title: "MediGuard AI - Healthcare Fraud Detection",
        description: "Multi-agent AI healthcare fraud detection system using Google ADK & Gemini 2.5. Built Agent 1 (Identity & Claims Fraud Detection), Next.js frontend with real-time workflow visualization, FastAPI backend, and custom ADK FunctionTools. Detects identity misuse, billing fraud, and discharge blockers with sequential agent workflow.",
        tech: ["Google ADK", "Gemini 2.5", "Next.js", "FastAPI", "Python", "TypeScript", "Tailwind CSS", "Pandas"],
        repo: "https://github.com/paritosh100/MediGuard-AI/tree/v1",
        live: "https://youtu.be/szNQj8By6nU",
        image: "../imgs/mediguard.png"
    },
    {
        title: "EchoHealth: Safe Healthcare Voice Agent",
        description: "Voice-first medical information assistant powered by LiveKit WebRTC and OpenAI Realtime API. Provides evidence-based health information exclusively from MEDLINE sources with safety-first design, always recommending professional healthcare consultation. Features RAG system with FAISS vector search and inline citations.",
        tech: ["Python", "LiveKit", "OpenAI Realtime", "React", "FAISS", "RAG", "Flask", "WebRTC"],
        repo: "https://github.com/paritosh100/EchoHealth--A-safe-healthcare-voice-agent",
        live: "https://www.linkedin.com/posts/paritosh-gandre_datascience-machinelearning-llm-activity-7388967848271945728-yRUk?utm_source=share&utm_medium=member_desktop&rcm=ACoAACriTFwBZHJ4g7EmpFvS38xqbrk7WxokjqE",
        image: "../imgs/echohealth.png"
    },
    {
        title: "Multi-AI Agent Project Planner",
        description: "Collaborative AI system where multiple specialized agents (Planner, Estimator, Allocator) work together to create intelligent project plans. Uses CrewAI framework to transform plain-text requirements into context-aware task breakdowns with realistic time estimates and smart resource allocation.",
        tech: ["Python", "CrewAI", "OpenAI GPT-4", "Streamlit", "Multi-Agent Systems"],
        repo: "https://github.com/paritosh100/Product-Planning-Multi-Agent",
        live: "https://www.linkedin.com/posts/paritosh-gandre_datascience-aiengineering-agenticai-activity-7387133312571449345-rSBs?utm_source=share&utm_medium=member_desktop&rcm=ACoAACriTFwBZHJ4g7EmpFvS38xqbrk7WxokjqE",
        image: "../imgs/project_planner.png"
    },
    {
        title: "Real-Time Voice RAG Assistant",
        description: "Full-stack voice-first AI assistant using LiveKit WebRTC for real-time communication and OpenAI Realtime API for multimodal voice responses. Features RAG over indexed documents with FAISS vector search, ensuring answers are strictly grounded in provided knowledge base. Built with React frontend and Python backend.",
        tech: ["Python", "LiveKit", "OpenAI Realtime", "React", "FAISS", "RAG", "Flask"],
        repo: "https://github.com/paritosh100/livekit-voice-agent",
        live: "",
        image: "../imgs/livekit.png"
    },
    {
        title: "iPSC Differentiation Outcome Predictor",
        description: "Gene-expression based ML models predicting stem-cell differentiation outcomes with SHAP explainability and PCA visualization. Deployed as a Streamlit web app.",
        tech: ["Python", "XGBoost", "RandomForest", "SHAP", "Streamlit"],
        repo: "https://github.com/paritosh100/ipsc-differentiation-predictor",
        live: "https://ipsc-differentiation-predictor.streamlit.app/",
        image: "../imgs/ipsc.png"
    },
    {
        title: "Revenue Risk Radar – Customer Churn Prediction & Monitoring",
        description: "Automated MLOps pipeline predicting customer churn using LightGBM with Prefect, Evidently, and Streamlit for drift monitoring and retraining automation.",
        tech: ["Python", "LightGBM", "Prefect", "Evidently", "Streamlit"],
        repo: "https://github.com/paritosh100/Revenue-Risk-Radar",
        live: "",
        image: "../imgs/revenue_risk.png"
    },
    {
        title: "Healthcare Monitoring System",
        description: "FastAPI + Dash system for heart and diabetes risk prediction using ensemble ML models with real-time dashboards and model performance tracking.",
        tech: ["FastAPI", "Dash", "XGBoost", "SQLite"],
        repo: "https://github.com/paritosh100/Healthcare-Monitoring-System-with-Comprehensive-Dashboard",
        live: "",
        image: "../imgs/health_dash.png"
    },
    {
        title: "Genomic Sequence Classification (CNN–HMM Hybrid)",
        description: "Compared deep CNNs with probabilistic HMMs for DNA sequence classification. Achieved 97% accuracy on motif-based synthetic data and analyzed interpretability tradeoffs.",
        tech: ["Python", "TensorFlow", "PyTorch", "HMM", "scikit-learn"],
        repo: "https://github.com/paritosh100/genomic-sequence-classification",
        live: "",
        image: "../imgs/genome.png"
    },
    {
        title: "Pose Corrector App (React Native + MediaPipe)",
        description: "Cross-platform mobile app detecting exercise form and posture using on-device MediaPipe and TensorFlow Lite models. Achieved sub-50ms inference latency.",
        tech: ["React Native", "MediaPipe", "TensorFlow Lite"],
        repo: "https://github.com/paritosh100/Pose-Corrector-Expo-App",
        live: "",
        image: "../imgs/pose.png"
    },
    {
        title: "AWS 3-Tier Architecture Project",
        description: "End-to-end cloud data pipeline using AWS S3, Lambda, RDS, and EC2 simulating scalable ETL, analytics, and API architecture with Terraform and CI/CD deployment.",
        tech: ["AWS", "Lambda", "RDS", "S3", "Terraform", "CI/CD"],
        repo: "https://github.com/paritosh100/AWS-3-Tier-Architecture-Project",
        live: "",
        image: "../imgs/aws.png"
    },
    {
        title: "Water Quality Analysis using Sentinel-2 Satellite Imagery",
        description: "Applied remote sensing and ML to evaluate chlorophyll, turbidity, and salinity indices across Indian water bodies. Random Forest achieved 94% accuracy in classifying water quality.",
        tech: ["Python", "Sentinel-2", "RandomForest", "GDAL", "scikit-learn"],
        repo: "https://github.com/paritosh100/Water-Quality-analysis-using-Satellite-Images",
        live: "",
        image: "../imgs/water_quality.png"
    },

];
export const certificates = [{
        title: "Fundamentals of Accelerated Computing with CUDA Python",
        issuer: "NVIDIA",
        issued: "Mar 2026",
        credentialId: "0cOz8eCeS2SY1qJlPyYxJQ",
        link: "https://www.linkedin.com/in/paritosh-gandre/overlay/Certifications/973035469/treasury/?profileId=ACoAACriTFwBZHJ4g7EmpFvS38xqbrk7WxokjqE",
        skills: ["CUDA", "Python", "Accelerated Computing", "GPU Programming"]
    },
    {
        title: "5-Day AI Agents Intensive Course",
        issuer: "Google x Kaggle",
        issued: "Dec 2025",
        credentialId: "",
        link: "https://www.kaggle.com/certification/badges/paritoshgandre/105",
        skills: [
            "AI Agents",
            "Multi-Agent Systems",
            "LLM Orchestration",
            "Prompt Engineering",
            "Agent Design Patterns",
            "Tool Calling",
            "Applied Generative AI"
        ],
        relatedRepo: "https://github.com/paritosh100/5-days-ai-agent-intensive-course"
    },
    {
        title: "Python for Data Science, AI & Development",
        issuer: "IBM",
        issued: "Dec 2025",
        // credentialId: "DKM8H1I7EA9X",
        link: "https://www.coursera.org/account/accomplishments/verify/DKM8H1I7EA9X",
        skills: [
            "Python",
            "Data Science",

            "Data Analysis",
            "Data Visualization",
            "APIs",
            "AI Foundations"
        ],
        // relatedRepo: "https://github.com/paritosh100"
    },
    {
        title: "AWS Cloud Technical Essentials",
        issuer: "Amazon Web Services (AWS)",
        issued: "Oct 2025",
        credentialId: "",
        link: "https://www.coursera.org/account/accomplishments/verify/8F03GLXTK4NS", // add Credly/URL if you have it
        skills: ["AWS", "EC2", "S3", "RDS", "VPC", "CloudWatch", "Auto Scaling"],
        relatedRepo: "https://github.com/paritosh100/AWS-3-Tier-Architecture-Project"
    },
    {
        title: "AWS Educate: Introduction to Generative AI",
        issuer: "Amazon Web Services (AWS)",
        issued: "Aug 2025",
        credentialId: "",
        link: "https://www.credly.com/badges/8f7218d6-a436-4fd5-adff-1eb01796ddf2/linked_in_profile",
        skills: ["Generative AI", "AWS", "Redshift"]
    },
    {
        title: "Biology Meets Programming: Bioinformatics for Beginners",
        issuer: "UC San Diego",
        issued: "Aug 2025",
        credentialId: "",
        link: "https://www.coursera.org/account/accomplishments/verify/XZRFEZ8ZEDMV", // add certificate URL if available
        skills: ["Molecular Biology", "Bioinformatics", "Python", "Genomics", "Data Structures"]
    },
    {
        title: "Building Computer Vision Applications with Python",
        issuer: "LinkedIn Learning",
        issued: "Jul 2025",
        credentialId: "",
        link: "https://www.linkedin.com/learning/certificates/693598670cfe9c715af210c87b59a03e9dd66416f7fce775d509763a836e0ddb?trk=share_certificate", // add LinkedIn/Cert URL if available
        skills: ["Python", "OpenCV"]
    },
    {
        title: "Generative AI with Diffusion Models",
        issuer: "NVIDIA",
        issued: "Nov 2024",
        credentialId: "",
        link: "https://www.linkedin.com/in/paritosh-gandre/details/certifications/1731709384372/single-media-viewer/?profileId=ACoAACriTFwBZHJ4g7EmpFvS38xqbrk7WxokjqE", // add NVIDIA/Cert URL if available
        skills: ["Generative AI", "Diffusion Models"]
    },
    {
        title: "Data Analysis with R Programming",
        issuer: "Google",
        issued: "Oct 2024",
        credentialId: "",
        link: "https://www.coursera.org/account/accomplishments/verify/UU47EMIV791H", // add Coursera/Google URL if available
        skills: ["R", "Data Analysis", "Statistical Analysis"]
    },
    {
        title: "AWS Academy Graduate – Cloud Foundations",
        issuer: "Amazon Web Services (AWS)",
        issued: "May 2023",
        credentialId: "",
        link: "https://www.credly.com/badges/2acb7a77-af52-4627-9e11-992b1fed6a24/linked_in_profile",
        skills: ["AWS", "Cloud Computing", "Data Analytics"]
    },
    {
        title: "AWS Academy Graduate – Data Analytics",
        issuer: "Amazon Web Services (AWS)",
        issued: "May 2023",
        credentialId: "",
        link: "https://www.credly.com/badges/7f5edf39-7003-40f0-8d2a-09ef103865ff/linked_in_profile",
        skills: ["AWS", "Data Analytics", "Cloud Computing"]
    }
];


// Publications (optional). If empty [], the section is hidden.
export const publications = [{
    title: "Water Quality Analysis from Satellite Images",
    venue: "IEEE - 2023 International Conference on Data Science and Network Security (ICDSNS)",
    year: "2023",
    link: "https://ieeexplore.ieee.org/document/10245131",
    summary: `This study applies remote sensing and machine learning to assess water quality in four saline water bodies like the Arabian Sea, Bay of Bengal, Lonar Lake, and the southern coastal Arabian Sea. Using Sentinel-2 satellite imagery, spectral indices for chlorophyll-a, turbidity, and salinity were computed, and five classifiers (Random Forest, KNN, SVM, Decision Tree, and Naive Bayes) were compared. Random Forest achieved the highest accuracy (94%) in classifying water quality as good or poor. Results show the Bay of Bengal is less contaminated and saline, whereas the Arabian Sea and Lonar Lake exhibit higher salinity and chlorophyll-a concentrations (25–30 mg m⁻³). The findings highlight the potential of integrating satellite imagery with ML for scalable water-quality monitoring.`,
    image: "../imgs/water_quality_paper.png"
}];

// Social links
export const social = {
    github: "https://github.com/paritosh100",
    linkedin: "https://www.linkedin.com/in/paritosh-gandre",
    email: "mailto:paritoshkrcg@gmail.com"
};

// Navigation labels (edit if you want custom wording)
export const nav = [
    { id: "home", label: "Home" },
    //   { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },


    { id: 'certifications', label: 'Certifications' },
    { id: "publications", label: "Publications" },
    //   { id: "footer", label: "Contact" }
];

// Education (simple example)
export const education = [{
        school: "Kent State University",
        degree: "M.S. in Data Science",
        dates: "Aug 2023 – May 2025",
        details: `GPA: 3.4
Coursework: Machine Learning, Deep Learning, Applied Statistics, Big Data Analytics, Cloud Computing, Information Visualization
Research: Genomic sequence classification (CNNs & HMMs); healthcare monitoring dashboards; infection-spread simulations
Tools & Platforms: Python, R, SQL, TensorFlow, PyTorch, Power BI, Tableau, AWS, GCP
Skills: Statistics, Model Interpretation, Machine Learning, Organization`
    },
    {
        school: "University of Mumbai",
        degree: "B.E. in Computer Science",
        dates: "Jan 2021 – Jun 2023",
        details: `GPA: 8.99
Activities: Social Wing Committee
Projects: Web app development; insurance cost prediction (ML); data-driven blog platform
Skills Applied: Python, Java, C++, SQL, HTML/CSS, JavaScript; Excel, Power BI, Tableau; Responsive Design, Problem Solving, Teamwork`
    }
];