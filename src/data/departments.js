import {
  FaDatabase,
  FaSpider,
  FaCogs,
  FaChartLine,
  FaUserTie,
  FaServer,
} from 'react-icons/fa'

export const departments = [
  {
    slug: 'data-entry',
    title: 'Data Entry',
    shortDesc: 'Fast, accurate, and confidential data entry services for any volume of work.',
    icon: FaDatabase,
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
    overview:
      'Our Data Entry department delivers high-speed, error-free data entry solutions for businesses of every size. From digitizing paper records to managing large-scale databases, our trained operators ensure your information is accurate, organized, and ready to use.',
    subDepartments: [
      {
        name: 'Online & Offline Data Entry',
        description: 'Manual entry of data from physical documents, PDFs, images, and online forms into spreadsheets, databases, or CRMs.',
      },
      {
        name: 'Form & Survey Data Entry',
        description: 'Accurate processing of survey responses, application forms, and feedback forms into structured digital formats.',
      },
      {
        name: 'Catalog & Product Data Entry',
        description: 'E-commerce product listing, catalog management, pricing updates, and inventory data entry for online stores.',
      },
      {
        name: 'Document Digitization',
        description: 'Converting handwritten or printed documents, invoices, and receipts into editable digital formats.',
      },
      {
        name: 'Excel & Database Management',
        description: 'Creating, updating, cleaning, and maintaining Excel sheets, Access databases, and cloud spreadsheets.',
      },
    ],
    benefits: [
      'Up to 99.9% accuracy with multi-level quality checks',
      'Quick turnaround time even for bulk projects',
      'Strict data confidentiality and secure handling',
      'Flexible pricing - per hour, per task, or per project',
      'Dedicated team for long-term ongoing projects',
    ],
    process: [
      'Requirement analysis and sample task review',
      'Pilot batch processing for quality approval',
      'Full-scale data entry with daily progress updates',
      'Multi-level quality assurance checks',
      'Final delivery in your preferred format',
    ],
  },
  {
    slug: 'web-scraping',
    title: 'Web Scraping',
    shortDesc: 'Automated web data extraction to power your research, pricing, and lead generation.',
    icon: FaSpider,
    heroImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80',
    overview:
      'Our Web Scraping department builds custom data extraction tools and bots that collect publicly available web data at scale - accurately, ethically, and on schedule. We help businesses gather market intelligence, monitor competitors, and build datasets for analytics.',
    subDepartments: [
      {
        name: 'E-commerce Price & Product Scraping',
        description: 'Track competitor pricing, product details, reviews, and stock availability across marketplaces.',
      },
      {
        name: 'Lead Generation Scraping',
        description: 'Extract business contact information, emails, and social profiles from directories and websites.',
      },
      {
        name: 'Real Estate Data Scraping',
        description: 'Collect property listings, prices, agent details, and location data from real estate portals.',
      },
      {
        name: 'Social Media & Review Scraping',
        description: 'Gather public posts, ratings, and reviews for sentiment analysis and brand monitoring.',
      },
      {
        name: 'Custom Bot Development',
        description: 'Build tailored scraping scripts and automation pipelines integrated with your existing systems.',
      },
    ],
    benefits: [
      'Custom scraping scripts tailored to your exact needs',
      'Scheduled / automated data refresh cycles',
      'Clean, structured output (CSV, Excel, JSON, database)',
      'Scalable infrastructure for large datasets',
      'Compliance-aware extraction practices',
    ],
    process: [
      'Understanding target websites and data points required',
      'Building and testing the scraping script',
      'Setting up automation and scheduling',
      'Data cleaning and structuring',
      'Delivery via file, API, or direct database integration',
    ],
  },
  {
    slug: 'data-processing',
    title: 'Data Processing',
    shortDesc: 'Transform raw, unstructured data into clean, organized, and actionable information.',
    icon: FaCogs,
    heroImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80',
    overview:
      'Our Data Processing team converts raw and unstructured information into clean, validated, and well-organized datasets. We handle everything from data cleansing and formatting to validation and conversion, ensuring your data is ready for analysis or operational use.',
    subDepartments: [
      {
        name: 'Data Cleaning & Deduplication',
        description: 'Removing duplicate, inconsistent, or incomplete records to improve data quality.',
      },
      {
        name: 'Data Conversion',
        description: 'Converting files between formats - PDF to Excel, Word to Excel, CSV to database, and more.',
      },
      {
        name: 'Data Validation & Verification',
        description: 'Cross-checking data against trusted sources to ensure accuracy and consistency.',
      },
      {
        name: 'Data Mining',
        description: 'Extracting meaningful patterns and useful information from large datasets.',
      },
      {
        name: 'Image & Document Processing',
        description: 'OCR-based text extraction, tagging, and indexing of scanned documents and images.',
      },
    ],
    benefits: [
      'Significant reduction in manual processing time',
      'Standardized and consistent data formats',
      'Improved data accuracy for decision-making',
      'Bulk processing capability with quick turnaround',
      'Secure handling of sensitive business data',
    ],
    process: [
      'Initial data assessment and format analysis',
      'Defining cleaning and processing rules',
      'Processing data using tools and quality scripts',
      'Manual review and validation',
      'Delivering processed data in required format',
    ],
  },
  {
    slug: 'data-analytics',
    title: 'Data Analytics',
    shortDesc: 'Turn your data into insights with dashboards, reports, and trend analysis.',
    icon: FaChartLine,
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
    overview:
      'Our Data Analytics department helps you make sense of your numbers. We build interactive dashboards, perform trend and statistical analysis, and provide reports that help you make confident, data-driven business decisions.',
    subDepartments: [
      {
        name: 'Business Intelligence Dashboards',
        description: 'Interactive dashboards built in Excel, Power BI, or Google Data Studio for real-time insights.',
      },
      {
        name: 'Statistical & Trend Analysis',
        description: 'In-depth analysis of historical data to identify patterns, trends, and forecasts.',
      },
      {
        name: 'Sales & Marketing Analytics',
        description: 'Performance reports on campaigns, sales funnels, customer behavior, and ROI.',
      },
      {
        name: 'Financial Data Analysis',
        description: 'Budgeting, forecasting, and financial reporting support based on your data.',
      },
      {
        name: 'Custom Reporting',
        description: 'Tailored periodic reports designed around your specific KPIs and goals.',
      },
    ],
    benefits: [
      'Clear visual dashboards for faster decisions',
      'Identify growth opportunities and risk areas',
      'Custom KPIs aligned with your business goals',
      'Regular and automated reporting cycles',
      'Experienced analysts across multiple industries',
    ],
    process: [
      'Understanding business goals and KPIs',
      'Data collection and consolidation',
      'Analysis using statistical and BI tools',
      'Dashboard / report creation',
      'Ongoing updates and insight reviews',
    ],
  },
  {
    slug: 'administrative-assistant',
    title: 'Administrative Assistant',
    shortDesc: 'Reliable virtual assistance to manage your day-to-day administrative tasks.',
    icon: FaUserTie,
    heroImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80',
    overview:
      'Our Administrative Assistant department provides skilled virtual assistants to manage your scheduling, communication, documentation, and back-office operations - so you can focus on growing your business.',
    subDepartments: [
      {
        name: 'Email & Calendar Management',
        description: 'Organizing inboxes, scheduling meetings, and managing calendars across time zones.',
      },
      {
        name: 'Document & File Management',
        description: 'Organizing, formatting, and maintaining business documents and cloud storage.',
      },
      {
        name: 'Customer Support Assistance',
        description: 'Handling customer queries via email, chat, or helpdesk tools.',
      },
      {
        name: 'Travel & Booking Coordination',
        description: 'Arranging travel plans, accommodations, and itineraries.',
      },
      {
        name: 'Bookkeeping Support',
        description: 'Basic invoicing, expense tracking, and financial record assistance.',
      },
    ],
    benefits: [
      'Save time on repetitive administrative tasks',
      'Flexible hours - part-time, full-time, or project-based',
      'Skilled assistants familiar with popular business tools',
      'Improved organization and faster response times',
      'Cost-effective alternative to in-house hiring',
    ],
    process: [
      'Understanding your daily workflow and tools used',
      'Assigning a dedicated virtual assistant',
      'Onboarding and access setup',
      'Daily/weekly task execution and reporting',
      'Continuous performance review and improvement',
    ],
  },
  {
    slug: 'data-services',
    title: 'Data Services',
    shortDesc: 'End-to-end data management solutions including storage, security, and migration.',
    icon: FaServer,
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
    overview:
      'Our Data Services department offers comprehensive data management solutions, including database creation, migration, backup, and security - ensuring your business data is safe, accessible, and well-structured.',
    subDepartments: [
      {
        name: 'Database Design & Management',
        description: 'Building and maintaining structured databases tailored to your business needs.',
      },
      {
        name: 'Data Migration',
        description: 'Seamless migration of data between platforms, software, or cloud systems.',
      },
      {
        name: 'Data Backup & Security',
        description: 'Setting up secure backup systems and access-control protocols for sensitive data.',
      },
      {
        name: 'CRM & ERP Data Management',
        description: 'Maintaining and updating customer and resource data within CRM/ERP systems.',
      },
      {
        name: 'Data Annotation & Labeling',
        description: 'Labeling text, image, and video data for AI/ML model training.',
      },
    ],
    benefits: [
      'Centralized and secure data management',
      'Smooth, error-free migration between systems',
      'Regular automated backups',
      'Compliance with data protection best practices',
      'Support for AI/ML data labeling projects',
    ],
    process: [
      'Auditing current data infrastructure',
      'Planning the data service strategy',
      'Implementation - migration, setup, or labeling',
      'Testing and quality verification',
      'Ongoing support and maintenance',
    ],
  },
]

export const getDepartmentBySlug = (slug) =>
  departments.find((d) => d.slug === slug)
