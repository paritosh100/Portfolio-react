// Edit this file to personalize the entire site.

// Basic identity
export const identity = {
    name: "Paritosh Gandre", // Replace with your name
    title: "Data Scientist", // Your headline/title
    email: "paritoshkrcg@gmail.com", // For footer/contact
    location: "Kent, OH", // Optional
    resumeUrl: "/PARITOSH_GANDRE.pdf", // Keep path; replace file in /public
    profileImage: "/LINKEDIN-PROFILE-PIC.png", // Replace file in /public
    shortIntro: `I’m a data scientist with a strong foundation in statistics, machine learning, and biomedical data analysis. My work spans genomic research, healthcare analytics, and AI-driven decision systems from building CNN and HMM models for DNA sequence classification to developing end-to-end dashboards for clinical and operational monitoring. I enjoy designing interpretable models, validating them with real-world evidence, and deploying scalable pipelines using Python, SQL, and cloud tools. My focus is on translating complex biological and clinical datasets into insights that support data-driven research and better patient outcomes`,
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
export const experiences = [{
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
export const projects = [
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
        image: "../imgs/project_planner.png"},
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
    summary: `This study applies remote sensing and machine learning to assess water quality in four saline water bodies like the Arabian Sea, Bay of Bengal, Lonar Lake, and the southern coastal Arabian Sea. Using Sentinel-2 satellite imagery, spectral indices for chlorophyll-a, turbidity, and salinity were computed, and five classifiers (Random Forest, KNN, SVM, Decision Tree, and Naive Bayes) were compared. Random Forest achieved the highest accuracy (94%) in classifying water quality as good or poor. Results show the Bay of Bengal is less contaminated and saline, whereas the Arabian Sea and Lonar Lake exhibit higher salinity and chlorophyll-a concentrations (25–30 mg m⁻³). The findings highlight the potential of integrating satellite imagery with ML for scalable water-quality monitoring.`

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