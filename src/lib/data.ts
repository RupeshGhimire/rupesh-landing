export const PERSON = {
  name: "Rupesh Ghimire",
  firstName: "Rupesh",
  lastName: "Ghimire",
  handle: "RupeshGhimire",
  email: "rupacegh@gmail.com",
  github: "https://github.com/RupeshGhimire",
  linkedin: "https://www.linkedin.com/in/rupesh-ghimire-121586163/",
  photo: new URL("../../profile_headshot.jpg", import.meta.url).href,
  resume: new URL("../../Rupesh-Resume-2026.pdf", import.meta.url).href,
  since: 2018,
};

export const CONTACT_SOCIALS = [
  { label: "LinkedIn", href: PERSON.linkedin, kind: "linkedin" as const },
  { label: "Email", href: `mailto:${PERSON.email}`, kind: "email" as const },
];

export const SOCIALS = [
  ...CONTACT_SOCIALS,
  { label: "GitHub", href: PERSON.github, kind: "github" as const },
];

export const TOOLKIT = [
  ["Code", "Python, SQL, PySpark, Shell"],
  ["Data platforms", "Databricks, Delta Lake, Unity Catalog, Snowflake"],
  ["Cloud & orchestration", "AWS, Azure, Airflow, Control-M"],
];

export const EXPERIENCE = [
  {
    company: "Northwestern Mutual",
    title: "Senior Software Engineer",
    dates: "Sep 2023 – Present",
    description: "Building Databricks pipelines for insurance and wealth data, with reusable ingestion frameworks, Unity Catalog governance, and automated data quality checks.",
    highlight: "Reduced cost per run by up to 70% and runtime by up to 30% for specific Databricks workloads. I also lead technical evaluations and mentor engineers.",
    tools: "Databricks · Python · PySpark · Delta Lake · Unity Catalog",
  },
  {
    company: "Verisk Analytics",
    title: "Senior Software Engineer",
    dates: "Feb 2021 – Feb 2023",
    description: "Developed AWS data pipelines processing terabytes per day and built Snowflake datasets for analytics and reporting.",
    highlight: "Automated data loading, partition creation, and file conversion with Python, Lambda, and AWS Batch, reducing manual effort by approximately 70%.",
    tools: "AWS · Python · PySpark · SQL · Snowflake",
  },
  {
    company: "Logic Information System Inc",
    title: "Software Engineer",
    dates: "Sep 2018 – Feb 2021",
    description: "Built ETL pipelines and data warehouses for ERP reporting, bringing together order management, invoicing, and service contract data.",
    highlight: "Worked on Azure and Snowflake integrations, Oracle ETL workflows, data reconciliation, and Power BI reporting.",
    tools: "Python · Airflow · Azure · Snowflake · Oracle",
  },
];
