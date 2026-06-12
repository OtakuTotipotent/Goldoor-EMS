const employees = [
  {
    id: 1,
    firstName: "Ali",
    username: "ali_dev",
    email: "employee1@gmail.com",
    password: "123",
    taskCounts: { active: 2, newTask: 1, completed: 4, failed: 1, accepted: 3 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Set up CI/CD pipeline",
        description:
          "Configure GitHub Actions to automate the testing and deployment workflow. Ensure that code coverage metrics are generated and attached to pull requests.",
        date: "2026-06-15",
        category: "DevOps",
        priority: "High",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Fix Memory Leaks",
        description:
          "Investigate reporting dashboards causing memory usage spikes in production. Optimize data parsing algorithms and clean up unused event listeners.",
        date: "2026-06-12",
        category: "Backend",
        priority: "Low",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update API Documentation",
        description:
          "Document the newly introduced authentication endpoints in Postman and Swagger. Ensure request and response schemas accurately reflect current production versions.",
        date: "2026-06-05",
        category: "Documentation",
        priority: "Medium",
      },
    ],
  },
  {
    id: 2,
    firstName: "Ayesha",
    username: "ayesha_design",
    email: "employee2@gmail.com",
    password: "123",
    taskCounts: { active: 2, newTask: 1, completed: 1, failed: 1, accepted: 1 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Change Bootstrap to Tailwind for x-project",
        description:
          "Migrate the legacy user profile layouts from Bootstrap components to Tailwind utility classes. Ensure full responsiveness across standard mobile and desktop viewports.",
        date: "2026-06-20",
        category: "Frontend",
        priority: "High",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Design Onboarding Wireframes",
        description:
          "Create high-fidelity wireframes for the user onboarding flow based on recent UX research. Iterate on user feedback regarding navigation layout complexity.",
        date: "2026-06-18",
        category: "UI/UX",
        priority: "Low",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Export Asset Library",
        description:
          "Batch export updated marketing SVG iconography and user avatars for frontend integration. Organize assets within the shared Google Drive folder structure.",
        date: "2026-06-03",
        category: "Design",
        priority: "Medium",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "A/B Testing Landing Page",
        description:
          "Launch variant B of the landing page to evaluate conversion metrics over a one-week testing window. This was paused early due to telemetry tracker misconfigurations.",
        date: "2026-06-01",
        category: "Analytics",
      },
    ],
  },
  {
    id: 3,
    firstName: "Zain",
    username: "zain_qa",
    email: "employee3@gmail.com",
    password: "123",
    taskCounts: { active: 3, newTask: 2, completed: 2, failed: 0, accepted: 2 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Write E2E Tests",
        description:
          "Develop automated end-to-end regression test scripts utilizing Playwright for the checkout funnel. Run tests against staging environments to identify latency bottlenecks.",
        date: "2026-06-14",
        category: "QA Automation",
        priority: "High",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Conduct Security Audit",
        description:
          "Perform vulnerability scans on external dependency packages using npm audit and Snyk tools. Document potential entry vectors and suggest dependency upgrades.",
        date: "2026-06-25",
        category: "Security",
        priority: "Low",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Cross-Browser Testing",
        description:
          "Execute compatibility validations for the main dashboard across Safari, Edge, and mobile Chrome browsers. Document UI misalignment errors into Jira.",
        date: "2026-06-11",
        category: "QA Manual",
        priority: "High",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Verify Bug Fix #402",
        description:
          "Manually retest user password reset requests to ensure tokens expire properly after fifteen minutes. Close corresponding task tickets upon successful outcome tracking.",
        date: "2026-06-04",
        category: "QA Manual",
        priority: "Medium",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Setup Jenkins Pipeline",
        description:
          "Configure automated night build test suites to execute at midnight. Ensure Slack status updates alert engineering squads regarding build failures.",
        date: "2026-06-02",
        category: "DevOps",
        priority: "Low",
      },
    ],
  },
  {
    id: 4,
    firstName: "Fatima",
    username: "fatima_data",
    email: "employee4@gmail.com",
    password: "123",
    taskCounts: { active: 1, newTask: 1, completed: 2, failed: 0, accepted: 2 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Optimize SQL Queries",
        description:
          "Refactor nested analytical join queries inside historical sales database procedures. Implement index structures to significantly decrease overall application response latencies.",
        date: "2026-06-19",
        category: "Database",
        priority: "High",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Migrate Schema to Production",
        description:
          "Coordinate with backend engineers to run the database structural update migrations during low-traffic windows. Back up active tables prior to execution.",
        date: "2026-06-05",
        category: "Database",
        priority: "High",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Generate Q2 Financial Report",
        description:
          "Compile and analyze transactional data sets to formulate comprehensive quarterly revenue presentations. Distribute clean visual charts to department leads.",
        date: "2026-06-03",
        category: "Data Analysis",
        priority: "Low",
      },
    ],
  },
  {
    id: 5,
    firstName: "Bilal",
    username: "bilal_sys",
    email: "employee5@gmail.com",
    password: "123",
    taskCounts: { active: 2, newTask: 1, completed: 1, failed: 0, accepted: 1 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Cloud Infrastructure Setup",
        description:
          "Provision AWS staging server containers utilizing Terraform architecture components. Ensure VPC networking permissions strictures conform to standard company practices.",
        date: "2026-06-22",
        category: "Cloud Infrastructure",
        priority: "Medium",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Configure SSL Certificates",
        description:
          "Renew expiring production wildcard secure layer certificates utilizing Let's Encrypt tooling mechanisms. Test connections across endpoint configurations to prevent downtime.",
        date: "2026-06-10",
        category: "SysOps",
        priority: "Low",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Hardware Inventory Log",
        description:
          "Audit physical office asset allocations including distributed development laptops and secondary monitors. Log serialized asset values in the global inventory repository.",
        date: "2026-06-04",
        category: "IT Support",
        priority: "Low",
      },
    ],
  },
];

const admins = [
  {
    id: 1,
    firstName: "Hamza",
    username: "hamza_admin",
    email: "admin1@gmail.com",
    password: "321",
    role: "Super Admin",
    permissions: ["all_access", "manage_users", "manage_tasks"],
  },
  {
    id: 2,
    firstName: "Sana",
    username: "sana_hr",
    email: "admin2@gmail.com",
    password: "321",
    role: "HR Admin",
    permissions: ["manage_users", "view_tasks"],
  },
  {
    id: 3,
    firstName: "Usman",
    username: "usman_pm",
    email: "admin3@gmail.com",
    password: "321",
    role: "Project Admin",
    permissions: ["manage_tasks", "view_reports"],
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admins", JSON.stringify(admins));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admins = JSON.parse(localStorage.getItem("admins"));
  return { employees, admins };
};
