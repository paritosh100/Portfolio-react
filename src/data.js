// Edit this file to personalize the entire site.

// Basic identity
export const identity = {
  name: "Paritosh Gandre",                 // Replace with your name
  title: "Data Scientist",          // Your headline/title
  email: "paritoshkrcg@gmail.com",    // For footer/contact
  location: "Kent, OH",    // Optional
  resumeUrl: "../public/PARITOSH_GANDRE.pdf",         // Keep path; replace file in /public
  profileImage: "../public/profile.png",     // Replace file in /public
  shortIntro:
`I’m a data scientist with a strong foundation in statistics, machine learning, and biomedical data analysis. My work spans genomic research, healthcare analytics, and AI-driven decision systems from building CNN and HMM models for DNA sequence classification to developing end-to-end dashboards for clinical and operational monitoring. I enjoy designing interpretable models, validating them with real-world evidence, and deploying scalable pipelines using Python, SQL, and cloud tools. My focus is on translating complex biological and clinical datasets into insights that support data-driven research and better patient outcomes`,
  };

// About + skills
export const about = {
  bio: `I’m a data scientist with a strong foundation in statistics, machine learning, and biomedical data analysis. My work spans genomic research, healthcare analytics, and AI-driven decision systems from building CNN and HMM models for DNA sequence classification to developing end-to-end dashboards for clinical and operational monitoring. I enjoy designing interpretable models, validating them with real-world evidence, and deploying scalable pipelines using Python, SQL, and cloud tools. My focus is on translating complex biological and clinical datasets into insights that support data-driven research and better patient outcomes`,
  skills: [

  ]
};

export const skills = {
  "Core Technical": [
    "Python", "R", "SQL", "Pandas", "NumPy", "Scikit-learn", 
    "TensorFlow", "PyTorch", "Keras", "Statistics", "Data Visualization"
  ],
  "ML & Analytics": [
    "Machine Learning", "Deep Learning", "Predictive Modeling", 
    "Feature Engineering", "Model Interpretability (SHAP, LIME)", 
    "A/B Testing", "Applied Statistics", "Healthcare Analytics", 
    "Bioinformatics", "Genomics Data Analysis"
  ],
  "Cloud & Tools": [
    "AWS (S3, Lambda, SageMaker, Redshift)", "Prefect", "Airflow", 
    "Docker", "Power BI", "Tableau", "Streamlit", "Git/GitHub"
  ]
};


// Experience (add as many as you like)
export const experiences = [
  {
    company: "Kent State University",
    role: "Research Assistant",
    start: "July 2025",
    end: "Present",
    bullets: [
      "Built risk-stratification models (AUC 0.86) to prioritize outreach and reduce readmissions",
      "Shipped feature pipelines on AWS + Airflow; cut model training time by 40%",
      "Partnered with clinicians to align metrics with actual patient outcomes"
    ]
  },
  {
    company: "Kent State University",
    role: "Research Assistant – Deep Learning for Genomic Data Analysis",
    start: "Feb 2025",
    end: "May 2025",
    bullets: [
      "Engineered a CNN-based DNA classifier, improving accuracy by 7% over Hidden Markov Model baselines",
      "Reduced model training time by 15% through optimized data balancing and GPU batching",
      "Automated Dockerized ETL pipelines with Python, pandas, NumPy, and TensorFlow/Keras, reducing preprocessing effort by 80%"
    ]
  },
  {
    company: "Kent State University",
    role: "Data Analyst – Supply Chain",
    start: "Jan 2025",
    end: "May 2025",
    bullets: [
      "Forecasted ingredient demand using ARIMA, cutting over-purchasing by 15% (~$10K savings)",
      "Automated SQL-to-Power BI pipeline with AWS S3 integration, reducing reporting latency by 30%",
      "Conducted A/B testing for procurement strategies, improving cost-forecast reliability"
    ]
  },
  {
    company: "Inke (SafeSpace)",
    role: "Data Scientist – AI Engineering",
    start: "May 2024",
    end: "Dec 2024",
    bullets: [
      "Designed recommendation algorithms with collaborative filtering, boosting click-through rates by 10% within the first quarter",
      "Deployed Airflow-based retraining pipelines on AWS EC2, improving deployment reliability by 30%",
      "Optimized Django REST APIs using Docker, reducing response latency by 30%"
    ]
  },
  {
    company: "Kent State University",
    role: "Operations Data Analyst (Catering Analytics Associate)",
    start: "Apr 2024",
    end: "Dec 2024",
    bullets: [
      "Analyzed 15K+ POS and inventory records using pandas and Hadoop to optimize procurement, reducing food costs by 12% (~$4.8K savings)",
      "Developed Power BI/Tableau dashboards for KPI visualization, accelerating decision-making by 30%",
      "Automated Excel/VBA reporting processes, cutting manual reporting time by 25%"
    ]
  }
];

// Projects (3–6 recommended)
export const projects = [
  {
    title: "iPSC Differentiation Outcome Predictor",
    description:
      "Gene-expression based ML models predicting stem-cell differentiation outcomes with SHAP explainability and PCA visualization. Deployed as a Streamlit web app.",
    tech: ["Python", "XGBoost", "RandomForest", "SHAP", "Streamlit"],
    repo: "https://github.com/paritosh100/ipsc-differentiation-predictor",
    live: "https://ipsc-differentiation-predictor.streamlit.app/"
  },
  {
    title: "Revenue Risk Radar – Customer Churn Prediction & Monitoring",
    description:
      "Automated MLOps pipeline predicting customer churn using LightGBM with Prefect, Evidently, and Streamlit for drift monitoring and retraining automation.",
    tech: ["Python", "LightGBM", "Prefect", "Evidently", "Streamlit"],
    repo: "https://github.com/paritosh100/Revenue-Risk-Radar",
    live: ""
  },
  {
    title: "Healthcare Monitoring System",
    description:
      "FastAPI + Dash system for heart and diabetes risk prediction using ensemble ML models with real-time dashboards and model performance tracking.",
    tech: ["FastAPI", "Dash", "XGBoost", "SQLite"],
    repo: "https://github.com/paritosh100/Healthcare-Monitoring-System-with-Comprehensive-Dashboard",
    live: ""
  },
  {
    title: "Genomic Sequence Classification (CNN–HMM Hybrid)",
    description:
      "Compared deep CNNs with probabilistic HMMs for DNA sequence classification. Achieved 97% accuracy on motif-based synthetic data and analyzed interpretability tradeoffs.",
    tech: ["Python", "TensorFlow", "PyTorch", "HMM", "scikit-learn"],
    repo: "https://github.com/paritosh100/genomic-sequence-classification",
    live: ""
  },
  {
    title: "Pose Corrector App (React Native + MediaPipe)",
    description:
      "Cross-platform mobile app detecting exercise form and posture using on-device MediaPipe and TensorFlow Lite models. Achieved sub-50ms inference latency.",
    tech: ["React Native", "MediaPipe", "TensorFlow Lite"],
    repo: "https://github.com/paritosh100/Pose-Corrector-Expo-App",
    live: ""
  },
  {
    title: "AWS 3-Tier Architecture Project",
    description:
      "End-to-end cloud data pipeline using AWS S3, Lambda, RDS, and EC2 simulating scalable ETL, analytics, and API architecture with Terraform and CI/CD deployment.",
    tech: ["AWS", "Lambda", "RDS", "S3", "Terraform", "CI/CD"],
    repo: "https://github.com/paritosh100/AWS-3-Tier-Architecture-Project",
    live: ""
  },
  {
    title: "Water Quality Analysis using Sentinel-2 Satellite Imagery",
    description:
      "Applied remote sensing and ML to evaluate chlorophyll, turbidity, and salinity indices across Indian water bodies. Random Forest achieved 94% accuracy in classifying water quality.",
    tech: ["Python", "Sentinel-2", "RandomForest", "GDAL", "scikit-learn"],
    repo: "https://github.com/paritosh100/Water-Quality-Analysis",
    live: ""
  }
];
export const certificates = [
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
export const publications = [
  {
    title: "Water Quality Analysis from Satellite Images",
    venue: "IEEE - 2023 International Conference on Data Science and Network Security (ICDSNS)",
    year: "2023",
    link: "https://ieeexplore.ieee.org/document/10245131",
    summary: `This study applies remote sensing and machine learning to assess water quality in four saline water bodies like the Arabian Sea, Bay of Bengal, Lonar Lake, and the southern coastal Arabian Sea. Using Sentinel-2 satellite imagery, spectral indices for chlorophyll-a, turbidity, and salinity were computed, and five classifiers (Random Forest, KNN, SVM, Decision Tree, and Naive Bayes) were compared. Random Forest achieved the highest accuracy (94%) in classifying water quality as good or poor. Results show the Bay of Bengal is less contaminated and saline, whereas the Arabian Sea and Lonar Lake exhibit higher salinity and chlorophyll-a concentrations (25–30 mg m⁻³). The findings highlight the potential of integrating satellite imagery with ML for scalable water-quality monitoring.`

  }
];

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
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  {id: 'certifications',label:'Certifications'},
  { id: "publications", label: "Publications" },
//   { id: "footer", label: "Contact" }
];

// Education (simple example)
export const education = [
  {
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
    school: "Ramrao Adik Institute of Technology - University of Mumbai",
    degree: "B.E. in Computer Science",
    dates: "Jan 2021 – Jun 2023",
    details: `GPA: 8.99
Activities: Social Wing Committee
Projects: Web app development; insurance cost prediction (ML); data-driven blog platform
Skills Applied: Python, Java, C++, SQL, HTML/CSS, JavaScript; Excel, Power BI, Tableau; Responsive Design, Problem Solving, Teamwork`
  }
];

