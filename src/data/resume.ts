import type {
  PersonalInfo,
  Experience,
  SkillCategory,
  Education,
  NavItem,
} from "@/types";

// ============================================================
// Personal Information
// ============================================================
export const personalInfo: PersonalInfo = {
  name: "Atras Satrio Putra Yahza",
  firstName: "Atras",
  lastName: "Satrio Putra Yahza",
  title: "AI-Augmented Software Engineer",
  email: "aspyasa@gmail.com",
  phone: "081399784268",
  location: "Jakarta, Indonesia",
  motto: '"Learning new things is my daily food"',
  summary:
    "Experienced Software Engineer with 4+ years of expertise in full-stack development, specializing in enterprise-level applications and microservices architecture. Proficient in Java, Spring Boot, and modern web technologies, with a strong foundation in database management, system architecture design, and Agile methodologies. Proven track record of developing scalable banking and financial systems from scratch. Currently advancing expertise in AI-augmented development and hexagonal architecture patterns for digital wallet ecosystems.",
};

// ============================================================
// Navigation Items
// ============================================================
export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

// ============================================================
// Professional Experience
// ============================================================
export const experiences: Experience[] = [
  {
    id: "qawtt",
    role: "AI-Augmented Software Engineer",
    company: "QAWTT PROJECT MANAGEMENT CO LLC",
    location: "Dubai, UAE",
    period: "Jan 2023 – Present",
    achievements: [
      "Architected and developed a comprehensive digital wallet ecosystem from the ground up, implementing hexagonal architecture principles to ensure clean separation of concerns and maintainability",
      "Designed and implemented microservices architecture with technology-agnostic approach, selecting optimal programming languages and frameworks based on specific use case requirements",
      "Leveraged AI-powered development tools and expert systems to enhance code quality, accelerate development cycles, and implement best practices across multiple service boundaries",
      "Collaborated with cross-functional teams to deliver scalable, secure, and high-performance fintech solutions",
      "Ensured seamless integration between multiple services while maintaining system reliability and performance standards",
    ],
  },
  {
    id: "btpn",
    role: "Fullstack Developer",
    company: "PT Bank Tabungan Pensiunan Negara",
    location: "Jakarta Selatan, Indonesia",
    period: "Jan 2022 – Jan 2023",
    achievements: [
      "Developed and maintained internal backend systems for banking applications using microservices architecture built from scratch with Java Spring Boot",
      "Developed and maintained internal frontend systems for banking applications using AngularJS framework",
      "Managed database migrations and schema changes using Liquibase, ensuring version control and consistency across environments",
      "Implemented comprehensive unit testing for backend systems using JUnit, achieving high code coverage",
      "Created and maintained comprehensive API documentation using Postman for seamless frontend-backend integration",
    ],
  },
  {
    id: "prospero",
    role: "Backend Java Developer",
    company: "PT Prospero Optima Solution",
    location: "Jakarta Selatan, Indonesia",
    period: "Jan 2021 – Dec 2022",
    achievements: [
      "Developed Enterprise Risk Management System from scratch using microservices architecture with Java Spring Boot",
      "Developed authentication and Role-Based Access Control (RBAC) services for backend applications",
      "Supported microservice architecture design and created Entity Relationship Diagrams for enterprise-level applications",
      "Created comprehensive unit tests using JUnit in Spring Boot for all services, maintaining high code quality standards",
      "Collaborated with frontend teams to integrate APIs and ensure seamless end-to-end functionality",
    ],
  },
  {
    id: "dms",
    role: "Backend Developer",
    company: "PT Digital Muda Solutions",
    location: "Jakarta Selatan, Indonesia",
    period: "Jan 2020 – Dec 2020",
    achievements: [
      "Migrated monolithic architecture to microservices architecture, improving scalability and maintainability",
      "Developed finance modules in ERP system using Java Spring Boot, delivering critical business functionality",
      "Designed microservices architecture patterns and best practices for distributed systems",
      "Developed Job Portal backend using Java Spring Boot and microservices architecture",
      "Managed development timelines and designed comprehensive database diagrams for complex systems",
    ],
  },
];

// ============================================================
// Technical Skills
// ============================================================
export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "Java", description: "Enterprise Development, Spring Ecosystem" },
      {
        name: "JavaScript",
        description: "ES6+, Modern Web Development",
      },
      {
        name: "TypeScript",
        description: "Type-Safe Development",
      },
      {
        name: "Node.js",
        description: "Server-Side & API Development",
      },
    ],
  },
  {
    id: "frameworks",
    name: "Frameworks & Libraries",
    icon: "🛠️",
    skills: [
      {
        name: "Spring Boot",
        description: "Microservices, RESTful APIs, Enterprise",
      },
      {
        name: "AngularJS",
        description: "Frontend, Single Page Applications",
      },
      {
        name: "Spring Framework",
        description: "DI, AOP, Transaction Management",
      },
    ],
  },
  {
    id: "databases",
    name: "Databases & Data",
    icon: "🗄️",
    skills: [
      {
        name: "PostgreSQL",
        description: "Relational DB, Query Optimization",
      },
      { name: "MySQL", description: "DB Administration, Performance Tuning" },
      { name: "MongoDB", description: "NoSQL, Document Storage" },
      {
        name: "MS SQL Server",
        description: "Enterprise Database Solutions",
      },
      {
        name: "Liquibase",
        description: "DB Version Control, Migrations",
      },
    ],
  },
  {
    id: "architecture",
    name: "Architecture & Design",
    icon: "🏗️",
    skills: [
      {
        name: "Microservices",
        description: "Distributed Systems, SOA",
      },
      {
        name: "Hexagonal Architecture",
        description: "Ports & Adapters, Clean Architecture",
      },
      {
        name: "Domain-Driven Design",
        description: "DDD, Domain Modeling",
      },
      {
        name: "Event-Driven",
        description: "Async Processing, Event Sourcing",
      },
      {
        name: "RESTful API Design",
        description: "API Development, Integration",
      },
    ],
  },
  {
    id: "devops",
    name: "DevOps & Infrastructure",
    icon: "⚙️",
    skills: [
      {
        name: "Docker",
        description: "Containerization, Orchestration",
      },
      {
        name: "Git / GitHub / GitLab",
        description: "Version Control, CI/CD",
      },
      {
        name: "CI/CD Pipelines",
        description: "Continuous Integration & Deployment",
      },
    ],
  },
  {
    id: "messaging",
    name: "Messaging & Streaming",
    icon: "📡",
    skills: [
      {
        name: "Apache Kafka",
        description: "Event Streaming, Real-Time Data",
      },
      {
        name: "RabbitMQ",
        description: "Message Queue, Async Communication",
      },
    ],
  },
  {
    id: "monitoring",
    name: "Monitoring & Observability",
    icon: "📊",
    skills: [
      {
        name: "ELK Stack",
        description: "Elasticsearch, Kibana, Logstash",
      },
      {
        name: "Eureka",
        description: "Service Discovery & Registry",
      },
      {
        name: "Zipkin",
        description: "Distributed Tracing, Performance",
      },
    ],
  },
  {
    id: "ai",
    name: "AI & Modern Tech",
    icon: "🤖",
    skills: [
      {
        name: "AI-Augmented Development",
        description: "AI-Powered Coding, Expert Systems",
      },
      {
        name: "Technology Evaluation",
        description: "Use Case-Based Stack Selection",
      },
    ],
  },
];

// ============================================================
// Education
// ============================================================
export const education: Education[] = [
  { institution: "Universitas Siber Asia" },
  { institution: "SMK Negeri 8 Jakarta" },
];

// ============================================================
// Stats for About Section
// ============================================================
export const stats = [
  { label: "Years Experience", value: "4+" },
  { label: "Companies Worked", value: "4" },
  { label: "Architecture Patterns", value: "5+" },
  { label: "Technologies Mastered", value: "20+" },
] as const;
