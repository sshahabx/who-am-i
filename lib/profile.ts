// Single source of truth for portfolio content.

export const profile = {
  name: "Muhammad Shahab Alam",
  shortName: "Shahab Alam",
  title: "DevOps / Platform Engineer",
  focus: "Cloud infrastructure, security, and reliability",
  location: "Islamabad, Pakistan (remote)",
  email: "idevshahab@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/sshahabx/",
    github: "https://github.com/sshahabx",
    medium: "https://medium.com/@ssshahab_",
    twitter: "https://x.com/ssshahab_",
  },
  headline: "I turn ClickOps sprawl into version-controlled, least-privilege infrastructure.",
  subheadline:
    "DevOps engineer with a cybersecurity background, building secure, governed cloud platforms on GCP and AWS.",
  bio: [
    "I'm a DevOps engineer with a BS in Cybersecurity who ships production infrastructure as code on GCP and AWS. I care about infrastructure that is reliable, auditable, and secure by default: least-privilege access, signed releases, private networking, and monitoring that catches problems before people do.",
    "I currently own platform and security work at Sapience AI. On real workloads, I've cut cloud costs by 35%, deployment time by 70%, and incident detection time by 50%.",
  ],
}

export const stats = [
  { value: "35%", label: "Cloud cost cut" },
  { value: "70%", label: "Faster deploys" },
  { value: "50%", label: "Faster incident detection" },
  { value: "90%", label: "Of GCP under IaC" },
  { value: "2M+", label: "Records migrated live" },
  { value: "20K+", label: "Daily security events monitored" },
]

export interface Highlight {
  title?: string
  body: string
}

export interface Role {
  company: string
  url?: string
  role: string
  period: string
  location: string
  summary?: string
  scope?: string
  highlights: Highlight[]
}

export const experience: Role[] = [
  {
    company: "Sapience AI",
    url: "https://sapienceai.co",
    role: "DevOps Engineer",
    period: "Jul 2026 – Present",
    location: "Remote · Seattle, WA",
    summary:
      "Sapience AI is the collective intelligence platform for professional communities. It sits above CRMs, AMS platforms, and knowledge bases to make an organization's knowledge searchable, actionable, and shared.",
    scope:
      "Owner-level administrator for the GCP organization and Google Workspace. I run the DevOps request queue, build the isolated customer-environment platform and shared AI services, own IAM and identity lifecycle, review infrastructure pull requests, and mentor a second DevOps engineer.",
    highlights: [
      {
        title: "Shared GPU embedding service",
        body: "Built a private GKE cluster on reserved NVIDIA L4 GPUs running Hugging Face TEI, fronted by a Cloud Run gateway with IAM-authenticated Cloud SQL (no stored passwords). Connected to tenant environments over Private Service Connect, with every network control in Terraform.",
      },
      {
        title: "Isolated customer environments",
        body: "Took the first single-tenant environment from release candidate to live: a signed release path (cosign plus Binary Authorization), a platform-owned artifact registry, release-tag gates, a porting playbook, and a starter template so app teams can ship on their own.",
      },
      {
        title: "Least-privilege IAM, org-wide",
        body: "Moved the GCP org to group-based RBAC with just-in-time break-glass access and no standing org owner. About 90% of previously ClickOps-managed resources now live in Terraform. Extended a VPC Service Controls dry run across service identities.",
      },
      {
        title: "Automated offboarding",
        body: "Built a toolkit that takes one email address and revokes and verifies access across Workspace, GCP, GitHub, Slack, Linear, and other SaaS tools. First run: 22 direct IAM bindings removed and project owners cut by half.",
      },
      {
        title: "Search and retrieval infrastructure",
        body: "Brought OpenSearch on GKE live for hybrid retrieval in dev and production, fixed snapshot-to-GCS failures, and designed the per-tenant deployment model.",
      },
      {
        title: "Observability and LLM tracing",
        body: "Rolled out per-tenant Langfuse tracing across all three main environments with an internal load balancer and tenant-isolation firewalling. Audited alerting and restored delivery for policies that had silently stopped notifying.",
      },
      {
        title: "Hardened CI/CD",
        body: "Rebuilt the self-managed GKE runner fleet (GitHub Actions ARC) around ephemeral, credential-free build environments, cutting exposed attack surface by about 40% and queue wait time by about 30%.",
      },
      {
        title: "Security and compliance",
        body: "Classified every GitHub repository into security tiers for scanning scope, ran IAM audits, piloted Wazuh for bastion auditing, and aligned controls with SOC 2 and GDPR alongside the security team.",
      },
      {
        title: "Platform enablement",
        body: "Centralized IPAM behind IAP and Cloud Armor (20+ subnets, ~50% faster provisioning), set up a domain-wide-delegation mailer, enabled Vertex AI, Document AI, and Vision, and secured 10+ production services behind IAP, Cloud Armor, and load balancers.",
      },
      {
        title: "Docs",
        body: "Wrote runbooks, ADRs, and onboarding guides that cut new-engineer ramp-up by about 30%.",
      },
    ],
  },
  {
    company: "Centrox AI",
    url: "https://centrox.ai/",
    role: "DevOps Engineer",
    period: "Oct 2025 – Jul 2026",
    location: "Islamabad, Pakistan",
    highlights: [
      { body: "Cut AWS costs ~35% by moving ECS to Fargate Spot (staging) and Fargate On-Demand (production)." },
      { body: "Cut deployment time ~70% by replacing Terraform-triggered full-service recreation with rolling deployments." },
      { body: "Isolated staging and production Terraform environments for a microservices app; automated DNS with Route 53." },
      { body: "Designed AWS PrivateLink to MongoDB Atlas, removing public database exposure for SOC 2 network isolation." },
      { body: "Supported a live cross-region MongoDB Atlas migration of 2M+ records: ~5 minutes of downtime, zero data loss." },
      { body: "Built an on-prem Prometheus and Grafana stack (~50% faster incident detection) and a K3s three-tier deployment." },
      { body: "Built an Apache Airflow pipeline running 5+ daily crawlers over 100,000+ documents per run." },
      { body: "Ran on-prem GitLab runners (~30% faster CI), SonarQube quality gates (~30% fewer issues), and CVAT plus Label Studio." },
      { body: "Mentored engineers on DevOps workflows, cutting routine-deploy dependency on DevOps by ~60%." },
    ],
  },
  {
    company: "iEngineering",
    role: "DevOps Intern",
    period: "Jul 2024 – Sep 2024",
    location: "Islamabad, Pakistan",
    highlights: [
      { body: "Ran a Wazuh SIEM covering 20,000+ security events daily; cut incident response time 60%." },
      { body: "Built EC2 Auto Scaling across AZs, Route 53 with ALB, and Lambda triggers with CloudWatch." },
    ],
  },
]

export interface StackGroup {
  area: string
  tools: string[]
}

export const techStack: StackGroup[] = [
  {
    area: "Cloud — GCP",
    tools: ["GKE", "Cloud Run", "Cloud SQL", "Private Service Connect", "VPC", "VPC Service Controls", "IAP", "Cloud Armor", "IPAM", "Load Balancing", "Binary Authorization", "Artifact Registry", "Pub/Sub", "GCS", "BigQuery", "Cloud Logging and Monitoring", "IAM/PAM", "Workload Identity Federation", "Vertex AI", "Document AI"],
  },
  {
    area: "Cloud — AWS",
    tools: ["EC2", "ECS", "Fargate", "VPC", "ALB", "Auto Scaling", "Route 53", "IAM", "Lambda", "S3", "CloudWatch", "PrivateLink"],
  },
  {
    area: "IaC and CI/CD",
    tools: ["Terraform", "GitHub Actions (ARC)", "GitLab CI/CD", "Helm", "Docker", "Docker Compose"],
  },
  { area: "Containers", tools: ["Kubernetes (GKE, K3s)", "NVIDIA GPU node pools"] },
  { area: "Supply-chain security", tools: ["cosign", "Binary Authorization", "Trivy", "SonarQube"] },
  {
    area: "Security and identity",
    tools: ["IAM/RBAC", "Google Workspace admin (DWD)", "Bitwarden", "Wazuh SIEM", "SOC 2", "GDPR"],
  },
  { area: "Observability", tools: ["Prometheus", "Grafana", "Cloud Monitoring", "Langfuse"] },
  {
    area: "Data and AI infra",
    tools: ["OpenSearch", "Hugging Face TEI", "MongoDB Atlas", "Redis", "Apache Airflow", "DigitalOcean Spaces"],
  },
  { area: "Languages and tools", tools: ["Python", "Bash", "Linux", "Git", "Nginx"] },
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
    title: "GPU Embedding Service on GKE",
    description:
      "A shared embedding service on a private GKE cluster with L4 GPU node pools, serving models through Hugging Face TEI. Tenants reach it over Private Service Connect, and every network control lives in Terraform.",
    outcome: "Private, IAM-gated, fully codified",
    tags: ["GKE", "NVIDIA L4", "TEI", "PSC", "Terraform"],
    context: "Work",
  },
  {
    title: "Identity Offboarding Automation",
    description:
      "One input, one run: an email address goes in, and access is revoked and then verified across identity, cloud, source control, chat, and project-tracking systems.",
    outcome: "Access revoked and verified across 6+ systems",
    tags: ["Google Workspace", "GCP IAM", "GitHub", "Slack", "Linear"],
    context: "Work",
  },
  {
    title: "Automated Cloud Infrastructure and Delivery Pipeline",
    description:
      "A Django and React app containerized with Docker and Nginx, with AWS VPC and EC2 provisioned in Terraform and GitLab CI/CD promoting builds across staging and production.",
    outcome: "~90% less manual setup",
    tags: ["Terraform", "AWS", "Docker", "Nginx", "GitLab CI/CD"],
    context: "Personal",
  },
  {
    title: "Centralized Observability Platform",
    description:
      "Prometheus and Grafana across multi-environment on-prem infrastructure, with K3s metrics, alerting, and a public status page so non-technical stakeholders can see system health.",
    outcome: "~50% faster incident detection",
    tags: ["Prometheus", "Grafana", "K3s", "Alerting"],
    context: "Personal",
  },
]

export const writing = [
  "MPI Cluster on EC2 (Parts 1–2)",
  "RBAC in S3",
  "Staging vs Production Environments",
  "Domain and Route 53 Configuration",
  "SSH Keys: Private and Public",
  "AWS ECS using Terraform",
]

export const certifications = [
  { name: "Certified in Cybersecurity (CC)", issuer: "ISC2", year: "2024" },
  { name: "Microsoft Certified: Azure Fundamentals (AZ-900)", issuer: "Microsoft" },
  { name: "AWS Certified Solutions Architect – Associate", issuer: "AWS", inProgress: true },
]

export const education = {
  degree: "BS Cybersecurity",
  school: "FAST School of Computing, Islamabad",
  period: "2021–2025",
}
