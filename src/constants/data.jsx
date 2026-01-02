import { Code2, Database, Layout, Server, Boxes, LineChart } from 'lucide-react';

export const skillsData = [
    {
        icon: Layout,
        title: "Frontend Core",
        skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS"],
        description: "Building pixel-perfect, responsive interfaces with modern frameworks."
    },
    {
        icon: LineChart,
        title: "Data Analytics",
        skills: ["Excel", "PowerBI", "SQL", "Python"],
        description: "Transforming raw data into actionable business insights and dashboards."
    },
    {
        icon: Server,
        title: "Backend Engine",
        skills: ["Node.js", "Express", "Supabase", "API Design"],
        description: "Robust server-side logic and scalable APIs."
    },
    {
        icon: Database,
        title: "Data Architecture",
        skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
        description: "Optimized database schemas for speed and reliability."
    },
    {
        icon: Boxes,
        title: "Tools & DevOps",
        skills: ["Git", "Docker", "AWS", "Vercel"],
        description: "Streamlined CI/CD pipelines and containerization."
    },
    {
        icon: Code2,
        title: "AI Integration",
        skills: ["OpenAI API", "HuggingFace", "LangChain"],
        description: "Leveraging LLMs to build smart, adaptive applications."
    }
];

export const projectsData = [
    {
        name: "Service Booking App",
        type: "Management System",
        description: "A centralized two-role web application for managing service requests. Replaces manual tracking with a structured booking system allowing users to request services and admins to approve/reject them.",
        tech: ["React", "Tailwind", "Supabase", "RLS"],
        repo: "https://github.com/MizanShaikh19/Service-Booking-Management-Web-App.git",
        demo: "https://service-booking-management-web-app.vercel.app/"
    },
    {
        name: "Internal Analytics Dashboard",
        type: "Internal Tool",
        description: "A single-user dashboard converting raw business records into clear KPIs and actionable insights. Designed for owners to filter data and view key metrics at a glance.",
        tech: ["React", "ChartJS", "Supabase", "Vite"],
        repo: "https://github.com/MizanShaikh19/InternalAnalyticsBusinessInsightsDashboard.git",
        demo: "https://internal-analytics-business-insight.vercel.app/"
    },
    {
        name: "Mini CRM",
        type: "Client Ops",
        description: "A lead management system for freelancers to track client status and details. Solves the problem of lost leads by centralizing contact info and interaction notes.",
        tech: ["React", "Supabase", "CRUD", "Tailwind"],
        repo: "https://github.com/MizanShaikh19/MiniCRM.git",
        demo: "https://mini-crm-miz.vercel.app/"
    }
];
