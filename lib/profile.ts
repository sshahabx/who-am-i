// Single source of truth for portfolio content.
// Keep work descriptions general: no internal names, counts, or architecture details.

export const profile = {
  name: "Muhammad Shahab Alam",
  shortName: "Shahab Alam",
  title: "DevOps Engineer",
  location: "Islamabad, Pakistan · Remote",
  email: "idevshahab@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/sshahabx/",
    github: "https://github.com/sshahabx",
    medium: "https://medium.com/@ssshahab_",
    twitter: "https://x.com/ssshahab_",
  },
  headline: "I build cloud infrastructure that stays secure and boring in production.",
  subheadline: "DevOps engineer working across Google Cloud and AWS, with a background in cybersecurity.",
  bio: [
    "I studied cybersecurity before I moved into DevOps, and it still shapes how I work. Access should be given on purpose. Releases should be traceable. Anything that doesn't need to be public shouldn't be.",
    "Day to day, that means a lot of Terraform, Kubernetes, and the less visible parts of running production: permissions, networking, alerts, and docs that people actually read.",
  ],
}

export const stats = [
  { value: "35%", label: "lower cloud costs" },
  { value: "70%", label: "faster deployments" },
  { value: "50%", label: "faster incident detection" },
  { value: "2M+", label: "records migrated with ~5 min downtime" },
]

export interface Role {
  company: string
  url?: string
  role: string
  period: string
  location: string
  summary?: string
  intro?: string
  highlights: string[]
}

export const experience: Role[] = [
  {
    company: "Sapience AI",
    url: "https://sapienceai.co",
    role: "DevOps Engineer",
    period: "Jul 2026 – Present",
    location: "Remote",
    summary: "Sapience AI is the collective intelligence platform for professional communities.",
    intro:
      "I look after our Google Cloud and Workspace setup: who can access what, how our networks fit together, the environments customers run in, and the shared services our AI features depend on. I also review infrastructure changes and help newer engineers find their footing.",
    highlights: [
      "Set up GPU-backed model serving on Kubernetes that other services reach only over private networking. All of it is defined in Terraform.",
      "Helped launch dedicated customer environments, with a release pipeline that only deploys signed, verified images.",
      "Moved cloud access to group-based roles with time-limited elevated access, and brought most hand-built resources under Terraform.",
      "Wrote an offboarding tool that removes someone's access across our cloud and SaaS tools, then checks that it's really gone.",
      "Rebuilt our self-hosted CI runners so every build starts clean and carries no long-lived credentials. Queue times dropped about 30%.",
      "Added LLM tracing with Langfuse, tidied up alerting, and wrote the runbooks and onboarding docs the team now uses.",
    ],
  },
  {
    company: "Centrox AI",
    url: "https://centrox.ai/",
    role: "DevOps Engineer",
    period: "Oct 2025 – Jul 2026",
    location: "Islamabad",
    highlights: [
      "Cut AWS costs about 35% by moving container workloads to Fargate, with Spot capacity for staging.",
      "Made deployments about 70% faster by switching from full service recreation to rolling updates.",
      "Split staging and production into separate Terraform environments and automated DNS.",
      "Set up private connectivity to a managed database using AWS PrivateLink.",
      "Helped move 2M+ records across regions with about five minutes of downtime and no data loss.",
      "Built Prometheus and Grafana monitoring that caught incidents about 50% sooner.",
      "Ran self-hosted GitLab runners and code-quality checks, and taught developers to handle routine deploys on their own.",
    ],
  },
  {
    company: "iEngineering",
    role: "DevOps Intern",
    period: "Jul – Sep 2024",
    location: "Islamabad",
    highlights: [
      "Monitored security events with a Wazuh SIEM and helped shorten incident response.",
      "Set up EC2 auto scaling, load balancing, and Lambda-based alerting on AWS.",
    ],
  },
]

export interface StackGroup {
  area: string
  tools: string[]
}

export const techStack: StackGroup[] = [
  {
    area: "Google Cloud",
    tools: ["GKE", "Cloud Run", "Cloud SQL", "VPC", "Private Service Connect", "IAP", "Cloud Armor", "Load Balancing", "Artifact Registry", "Binary Authorization", "Pub/Sub", "Cloud Storage", "BigQuery", "Cloud Monitoring", "IAM", "Vertex AI"],
  },
  {
    area: "AWS",
    tools: ["EC2", "ECS", "Fargate", "VPC", "ALB", "Auto Scaling", "Route 53", "IAM", "Lambda", "S3", "CloudWatch", "PrivateLink"],
  },
  { area: "Infrastructure and CI/CD", tools: ["Terraform", "GitHub Actions", "GitLab CI/CD", "Helm", "Docker"] },
  { area: "Kubernetes", tools: ["GKE", "K3s", "GPU node pools"] },
  { area: "Security", tools: ["IAM and RBAC", "cosign", "Trivy", "SonarQube", "Wazuh", "SOC 2", "GDPR"] },
  { area: "Observability", tools: ["Prometheus", "Grafana", "Cloud Monitoring", "Langfuse"] },
  { area: "Data", tools: ["OpenSearch", "MongoDB Atlas", "Redis", "Apache Airflow"] },
  { area: "Languages", tools: ["Python", "Bash", "Linux", "Git", "Nginx"] },
]

export interface EngineeringProject {
  title: string
  description: string
  outcome: string
  tags: string[]
  context: "Personal" | "Work"
}

export const engineeringProjects: EngineeringProject[] = [
  {
    title: "GPU model serving on Kubernetes",
    description:
      "A shared service for running embedding models on GPUs. It isn't exposed to the internet, other services reach it privately, and the whole setup lives in Terraform.",
    outcome: "Private by default, reproducible from code",
    tags: ["Kubernetes", "GPUs", "Terraform", "Private networking"],
    context: "Work",
  },
  {
    title: "Offboarding automation",
    description:
      "Give it one email address and it removes that person's access from every connected tool, then checks each one to confirm nothing was missed.",
    outcome: "One command instead of a checklist",
    tags: ["Automation", "IAM", "Google Workspace", "GitHub"],
    context: "Work",
  },
  {
    title: "Infrastructure and delivery pipeline",
    description:
      "A Django and React app in Docker behind Nginx. Terraform provisions the AWS network and servers, and GitLab CI promotes builds from staging to production.",
    outcome: "About 90% less manual setup",
    tags: ["Terraform", "AWS", "Docker", "GitLab CI"],
    context: "Personal",
  },
  {
    title: "Monitoring and status page",
    description:
      "Prometheus and Grafana across several on-prem environments, with alerts for the team and a public status page for people who just want to know if things are up.",
    outcome: "Incidents spotted about 50% sooner",
    tags: ["Prometheus", "Grafana", "K3s"],
    context: "Personal",
  },
]

export const writing = [
  "Building an MPI cluster on EC2 (parts 1 and 2)",
  "Role-based access control in S3",
  "Staging vs. production environments",
  "Setting up a domain with Route 53",
  "SSH keys: private and public",
  "Running AWS ECS with Terraform",
]

export const certifications = [
  { name: "Certified in Cybersecurity (CC)", issuer: "ISC2", year: "2024" },
  { name: "Azure Fundamentals (AZ-900)", issuer: "Microsoft" },
]

export const education = {
  degree: "BS Cybersecurity",
  school: "FAST School of Computing, Islamabad",
  period: "2021–2025",
}
