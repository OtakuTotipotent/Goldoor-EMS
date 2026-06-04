const employee = [
  {
    id: 1,
    email: "employee1@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        title: "Set up CI/CD Pipeline",
        description:
          "Configure GitHub Actions to automate the build and deployment process for the production environment. Ensure all environment variables are securely stored in repository secrets. Test the workflow with a dummy pull request.",
        date: "2026-06-15",
        category: "DevOps",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        title: "Migrate Bootstrap to Tailwindcss",
        description:
          "Refactor the legacy dashboard components to replace Bootstrap utility classes with Tailwind CSS equivalents. Maintain visual consistency and responsiveness across all viewports. Remove the unused Bootstrap dependencies upon completion.",
        date: "2026-06-01",
        category: "Frontend",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        title: "Database Indexing Optimization",
        description:
          "Analyze slow-running queries on the users and transactions tables to identify missing indexes. Apply appropriate indexes to improve query execution time in the staging environment. Monitor performance metrics post-implementation.",
        date: "2026-06-10",
        category: "Database",
      },
    ],
  },
  {
    id: 2,
    email: "employee2@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        title: "Implement OAuth2 Authentication",
        description:
          "Integrate Google and GitHub OAuth2 providers into the authentication gateway. Update the user schema to support federated identities smoothly. Ensure robust error handling for failed authentication attempts.",
        date: "2026-06-20",
        category: "Security",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        title: "Draft Q3 Product Roadmap",
        description:
          "Collaborate with engineering leads and product stakeholders to outline features for the upcoming quarter. Define clear deliverables, milestones, and high-level resource allocations. Format the final output into a presentation deck.",
        date: "2026-06-18",
        category: "Management",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        title: "Fix Memory Leak in WebSocket Server",
        description:
          "Investigate reporting tools indicating unusual memory growth over extended periods in the messaging server. Identify unclosed connections and patch the event listeners causing the leak. Verify stability with a 24-hour stress test.",
        date: "2026-05-28",
        category: "Backend",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        title: "Conduct Accessibility Audit",
        description:
          "Review the main customer-facing portal against WCAG 2.1 AA compliance guidelines. Identify areas lacking aria-labels, proper color contrast, or keyboard navigation support. Compile a detailed remediation report for the frontend team.",
        date: "2026-06-25",
        category: "QA/Testing",
      },
    ],
  },
  {
    id: 3,
    email: "employee3@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        title: "Design Promo Banners for Summer Sale",
        description:
          "Create high-converting visual assets for the upcoming marketing campaign across desktop and mobile formats. Adhere strictly to the updated brand color palette and typography guidelines. Deliver high-resolution assets in SVG and WebP formats.",
        date: "2026-06-08",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        title: "Set up Google Analytics 4",
        description:
          "Deploy the GA4 tracking script via Google Tag Manager across all landing pages. Define custom conversion events for registration submissions and checkout completions. Verify data flow in the analytics real-time dashboard.",
        date: "2026-06-02",
        category: "Marketing",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        title: "Optimize Image Assets",
        description:
          "Audit the media library and compress heavy images slowing down the e-commerce store home page. Implement lazy loading strategies to defer off-screen images. Confirm improvements using Lighthouse performance scores.",
        date: "2026-06-12",
        category: "Frontend",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        title: "Create Technical Onboarding Documentation",
        description:
          "Write a comprehensive step-by-step guide for local development environment configuration. Include common troubleshooting tips for Docker and environment variables. Publish the documentation to the internal engineering wiki.",
        date: "2026-06-30",
        category: "Documentation",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        title: "Update Terms of Service",
        description:
          "Review the updated data privacy clauses provided by the legal consulting team. Integrate these modifications cleanly into the public-facing terms page. Deploy the changes to production after final internal approval.",
        date: "2026-05-30",
        category: "Legal",
      },
    ],
  },
  {
    id: 4,
    email: "employee4@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        title: "Resolve Ticket #402: Payment Failure Edge Case",
        description:
          "Debug intermittent processing failures affecting international credit card transactions. Coordinate with Stripe support to identify the underlying currency conversion discrepancy. Implement a validation fallback mechanism to prevent checkout crashes.",
        date: "2026-06-07",
        category: "Support",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        title: "Refactor API Response Caching",
        description:
          "Integrate Redis caching layers for heavily requested product catalog endpoints. Define strict cache eviction rules to ensure data remains consistent when inventories change. Measure latency reductions under simulated high traffic.",
        date: "2026-06-14",
        category: "Backend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        title: "Renew SSL Certificates",
        description:
          "Automate the renewal process for all staging and production domain certificates via Let's Encrypt. Verify that the renewal cron jobs execute without manual intervention. Confirm the padlock icon displays correctly across all major web browsers.",
        date: "2026-06-03",
        category: "DevOps",
      },
    ],
  },
  {
    id: 5,
    email: "employee5@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        title: "Formulate Penetration Testing Scope",
        description:
          "Define the parameters and boundaries for the upcoming external security assessment. Identify critical API endpoints, databases, and authentication servers that must be included. Coordinate scheduling and access keys with the vendor.",
        date: "2026-06-11",
        category: "Security",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        title: "Conduct Bi-weekly Sprint Planning",
        description:
          "Review the development backlog to prioritize user stories for Sprint 14. Facilitate story point estimation sessions with engineering team members to gauge capacity accurately. Assign finalized tasks to respective team boards.",
        date: "2026-06-05",
        category: "Management",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        title: "Patch Critical Dependency Vulnerabilities",
        description:
          "Run dependency scanners to isolate high-severity vulnerabilities within Node modules. Update package versions cleanly while avoiding breaking changes or API regressions. Document the version changes within the pull request notes.",
        date: "2026-06-02",
        category: "Security",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        title: "Design Mobile Checkout Flow UX",
        description:
          "Create high-fidelity interactive wireframes focusing on minimizing mobile cart abandonment rates. Simplify input fields and add a clear multi-step progress bar. Validate prototypes through a localized user testing group.",
        date: "2026-06-22",
        category: "Design",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        title: "Optimize Email Notification Templates",
        description:
          "Revamp transactional HTML emails for transactional updates to improve user engagement. Test rendering consistency across popular clients including Gmail, Outlook, and Apple Mail. Implement dynamic variables for custom user data injection.",
        date: "2026-06-19",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        title: "Integrate Sentry Error Tracking",
        description:
          "Install the Sentry SDK across client and server repositories to capture runtime exceptions automatically. Configure alert rules to ping the engineering Slack channel when issues spike. Verify connection by triggering a test exception.",
        date: "2026-05-29",
        category: "DevOps",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        title: "Build CSV Data Export Feature",
        description:
          "Develop a backend utility allowing administrative users to export custom filtered transactional data. Format output to handle large datasets efficiently without timing out the server process. Apply standard streaming practices to manage memory limits.",
        date: "2026-06-26",
        category: "Backend",
      },
    ],
  },
];

const admins = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: "321",
  },
];
