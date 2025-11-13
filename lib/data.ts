export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  date: string
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  readingTime: number
}

export interface Review {
  slug: string
  title: string
  type: "book" | "movie"
  rating: number
  emoji: string
  description: string
  coverUrl?: string
  date: string
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Multi-Cloud Infrastructure Automation",
    description: "Built a unified Terraform framework for deploying infrastructure across AWS, Azure, and GCP. Reduced deployment time by 70% and eliminated configuration drift.",
    techStack: ["Terraform", "AWS", "Azure", "GCP", "Python", "GitLab CI"],
    githubUrl: "https://github.com",
    date: "2024-09"
  },
  {
    id: "2",
    title: "Kubernetes Cluster Autoscaling System",
    description: "Designed and implemented a custom autoscaling solution for microservices workloads, optimizing resource utilization and cutting cloud costs by 40%.",
    techStack: ["Kubernetes", "Go", "Prometheus", "Grafana", "AWS EKS"],
    githubUrl: "https://github.com",
    date: "2024-06"
  },
  {
    id: "3",
    title: "CI/CD Pipeline Orchestrator",
    description: "Created a self-service CI/CD platform with dynamic pipeline generation, supporting 50+ microservices across multiple environments.",
    techStack: ["GitLab CI", "Docker", "Kubernetes", "ArgoCD", "Vault"],
    githubUrl: "https://github.com",
    date: "2024-03"
  },
  {
    id: "4",
    title: "Security Compliance Automation",
    description: "Automated security scanning and compliance checks in deployment pipelines, achieving SOC2 compliance with zero manual audit processes.",
    techStack: ["Trivy", "Falco", "OPA", "Python", "AWS Lambda"],
    githubUrl: "https://github.com",
    date: "2023-12"
  },
  {
    id: "5",
    title: "Observability Stack Implementation",
    description: "Deployed comprehensive monitoring and logging infrastructure handling 1M+ events per second with custom alerting and dashboards.",
    techStack: ["Prometheus", "Loki", "Grafana", "OpenTelemetry", "Kafka"],
    githubUrl: "https://github.com",
    date: "2023-09"
  }
]

export const blogPosts: BlogPost[] = [
  {
    slug: "terraform-modules-that-dont-suck",
    title: "Writing Terraform Modules That Don't Suck",
    description: "Lessons learned from building reusable infrastructure modules across three cloud providers. Spoiler: it's all about the abstractions.",
    date: "2025-10-15",
    tags: ["Terraform", "IaC", "DevOps"],
    readingTime: 8
  },
  {
    slug: "kubernetes-networking-deep-dive",
    title: "Kubernetes Networking: A Deep Dive",
    description: "From CNI plugins to service meshes — understanding how packets actually flow in your cluster.",
    date: "2025-09-28",
    tags: ["Kubernetes", "Networking", "Cloud Native"],
    readingTime: 12
  },
  {
    slug: "why-your-cicd-is-slow",
    title: "Why Your CI/CD Pipeline Is Slow (And How to Fix It)",
    description: "Build times got you down? Let's optimize caching, parallelization, and resource allocation.",
    date: "2025-09-10",
    tags: ["CI/CD", "Performance", "DevOps"],
    readingTime: 6
  },
  {
    slug: "observability-vs-monitoring",
    title: "Observability vs Monitoring: More Than Semantics",
    description: "Why observability isn't just fancy monitoring, and how it changes the way you debug production systems.",
    date: "2025-08-22",
    tags: ["Observability", "SRE", "Monitoring"],
    readingTime: 7
  },
  {
    slug: "gitops-is-not-just-git",
    title: "GitOps Is Not Just Git + Ops",
    description: "The principles behind GitOps and why it's more about declarative infrastructure than version control.",
    date: "2025-08-05",
    tags: ["GitOps", "ArgoCD", "Kubernetes"],
    readingTime: 9
  }
]

export const reviews: Review[] = [
  {
    slug: "site-reliability-engineering",
    title: "Site Reliability Engineering",
    type: "book",
    rating: 5,
    emoji: "📘",
    description: "The Google SRE book is a masterclass in running production systems at scale. If you work in DevOps or infrastructure, this is required reading.",
    date: "2025-09-15"
  },
  {
    slug: "the-phoenix-project",
    title: "The Phoenix Project",
    type: "book",
    rating: 4,
    emoji: "📙",
    description: "A novel about IT and DevOps transformation. It's cheesy at times, but the lessons are solid and the story makes them memorable.",
    date: "2025-08-20"
  },
  {
    slug: "blade-runner-2049",
    title: "Blade Runner 2049",
    type: "movie",
    rating: 5,
    emoji: "🎬",
    description: "Visually stunning cyberpunk masterpiece. The aesthetic alone makes it worth watching. Also, the soundtrack is incredible.",
    date: "2025-07-30"
  },
  {
    slug: "designing-data-intensive-applications",
    title: "Designing Data-Intensive Applications",
    type: "book",
    rating: 5,
    emoji: "📕",
    description: "The best book on distributed systems and data architecture. Dense but incredibly valuable for understanding how modern systems work.",
    date: "2025-07-10"
  },
  {
    slug: "interstellar",
    title: "Interstellar",
    type: "movie",
    rating: 5,
    emoji: "🎥",
    description: "Science fiction at its finest. The black hole scene alone is worth the watch. Plus, it makes you think about time, space, and humanity.",
    date: "2025-06-18"
  },
  {
    slug: "accelerate",
    title: "Accelerate",
    type: "book",
    rating: 4,
    emoji: "📗",
    description: "Data-driven insights on what makes high-performing tech organizations. Great for understanding DevOps metrics and culture.",
    date: "2025-05-25"
  }
]

export const techStack = [
  "AWS",
  "Docker",
  "Terraform",
  "Kubernetes",
  "Linux",
  "GitLab CI/CD",
  "Next.js",
  "Node.js",
  "Cloud Security",
  "Prometheus",
  "Grafana",
  "ArgoCD",
  "Python",
  "Go",
  "Ansible",
  "Vault",
  "PostgreSQL",
  "Redis",
  "Kafka"
]

export const nowData = {
  learning: "Exploring eBPF for advanced observability and security",
  building: "A self-healing infrastructure framework using custom Kubernetes operators",
  reading: "\"The Staff Engineer's Path\" by Tanya Reilly"
}








