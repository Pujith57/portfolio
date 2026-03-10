export const personalInfo = {
  name: 'Pujith Kotha',
  title: 'Full Stack Software Developer',
  location: 'San Jose, CA',
  email: 'pujithkotha09@gmail.com',
  phone: '+1 (424) 257-0886',
  linkedin: 'https://www.linkedin.com/in/kotha-pujith-a109471b6',
  github: 'https://github.com/Pujith57',
  summary: 'Full Stack Software Developer with 5+ years of progressive experience in Java-based application development, Spring and Spring Boot microservices, and REST API design across financial services and healthcare domains. Proven expertise in full stack development with React front-ends, Kubernetes container orchestration, and Jenkins CI/CD pipeline automation.',
};

export const experience = [
  {
    company: 'Onbe',
    role: 'Full Stack Java Developer',
    location: 'Remote',
    period: 'Sep 2024 - Present',
    highlights: [
      'Owned production reliability of 7+ microservices on Kubernetes/OpenShift processing 100K+ daily financial transactions',
      'Built end-to-end observability stacks using Prometheus, Grafana, and ELK Stack, reducing MTTR by 25%',
      'Led incident response and postmortem processes, driving repeat-incident rate down by 30%',
      'Built shared CI/CD pipeline templates with GitHub Actions and Terraform, cutting release cycle time by 40%',
      'Integrated AWS Lambda, Step Functions, and SQS/SNS to improve API response latency by 25%',
    ],
  },
  {
    company: 'United Health Group',
    role: 'Software Engineer – Cloud & Data Platform',
    location: 'Remote',
    period: 'Jan 2024 - Aug 2024',
    highlights: [
      'Automated AWS infrastructure provisioning using Terraform and CloudFormation, reducing unplanned downtime by 20%',
      'Built real-time anomaly detection pipelines using AWS Lambda + S3-triggered event processing',
      'Delivered 95% automated test coverage via TDD with JUnit and Mockito',
      'Operated PostgreSQL (AWS RDS) under concurrent peak load, cutting database-related downtime by 20%',
    ],
  },
  {
    company: 'Tata Consultancy Services (TCS)',
    role: 'Software Engineer – Data & Cloud Platform',
    location: 'India',
    period: 'Jun 2021 - Jun 2023',
    highlights: [
      'Deployed Spring Boot microservices on Kubernetes using Jenkins CI/CD pipelines',
      'Engineered event-driven data pipelines with Apache Kafka for high-throughput BFSI workloads',
      'Built KSQL stream processors in Confluent Cloud for real-time fraud detection analytics',
      'Earned "Best Innovative Project of 2023" award for building modular recommendation engines',
    ],
  },
  {
    company: 'Neel Blue',
    role: 'Java Full-Stack Developer',
    location: 'India',
    period: 'Mar 2020 - May 2021',
    highlights: [
      'Deployed containerized services on Kubernetes (AKS) achieving 99.9% uptime',
      'Implemented ELK Stack log aggregation pipelines, reducing MTTR by 20%',
      'Built DevSecOps CI/CD pipelines with Jenkins and GitHub Actions',
      'Designed AWS S3 + Lambda-triggered processing workflows improving efficiency by 30%',
    ],
  },
];

export const projects = [
  {
    title: 'LLM RAG Pipeline',
    technologies: ['LangChain', 'OpenSearch', 'AWS Bedrock', 'OpenAI', 'Anthropic', 'Gemini'],
    description: [
      'Built end-to-end retrieval-augmented generation pipeline with sub-2s latency using LangChain + OpenSearch + AWS Bedrock',
      'Implemented multi-provider AI abstraction across OpenAI, Anthropic, and Gemini for seamless provider switching',
      'Developed evaluation harnesses for quality regression testing, measuring agent accuracy and latency',
    ],
  },
  {
    title: 'EEG-Based Biometric Classification',
    technologies: ['Python', 'Random Forest', 'SHAP', 'Feature Engineering'],
    description: [
      'Implemented feature engineering pipeline extracting alpha-band power and cross-channel coherence metrics',
      'Trained Random Forest classifier achieving 92.3% eye-state prediction accuracy',
      'Conducted SHAP value analysis to identify parietal electrodes as most significant predictors',
    ],
  },
  {
    title: 'Cancer Demographic Analysis',
    technologies: ['Python', 'Pandas', 'Statistical Analysis', 'CDC Data (1999–2021)'],
    description: [
      'Investigated demographic correlations with cancer incidence using 22 years of CDC data',
      'Engineered data preprocessing pipeline reducing dataset volume by 15%',
      'Identified 23% higher incidence in Midwestern states among the 55–70 age cohort',
    ],
  },
];

export const skills = {
  'Languages & Frameworks': ['Java', 'Spring Boot', 'Python', 'TypeScript', 'JavaScript', 'React', 'SQL', 'Scala'],
  'Cloud & Infrastructure': ['AWS', 'Azure', 'Kubernetes', 'Docker', 'Terraform', 'CloudFormation'],
  'CI/CD & DevOps': ['Jenkins', 'GitHub Actions', 'GitLab CI/CD', 'Maven', 'Gradle'],
  'Data & Messaging': ['Apache Kafka', 'PostgreSQL', 'Oracle', 'DynamoDB', 'MongoDB', 'Redis'],
  'Observability': ['Prometheus', 'Grafana', 'ELK Stack', 'Splunk', 'CloudWatch'],
  'Security & Compliance': ['OAuth 2.0', 'DevSecOps', 'HIPAA', 'SOX', 'PCI DSS'],
};

export const education = [
  {
    degree: 'Master of Science, Computer Science',
    school: 'University of Wisconsin – Milwaukee',
    location: 'Milwaukee, WI',
    period: 'Sep 2023 - May 2025',
    coursework: ['Machine Learning', 'Data Structures & Algorithms', 'OOP', 'Operating Systems', 'Scientific Data Visualization'],
  },
  {
    degree: 'Bachelor of Technology, Electronics & Communication Engineering',
    school: 'SRM Institute of Science and Technology',
    location: 'India',
    period: 'Jun 2017 - May 2021',
  },
];

export const certifications = [
  'IBM Certification: Generative AI for Software Developers',
  'IntelliJ Certified Professional: Java SE Developer',
  'Confluent Developer Skills for Building Apache Kafka',
];
