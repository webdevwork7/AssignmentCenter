export const siteConfig = {
  name: "AssignmentHelper",
  description: "Professional assignment help and academic writing services",
  email: "support@assignmenthelper.site",
  phone: "+1 (555) 123-4567",
  address: "123 Academic Street, Education City, EC 12345",

  // Social links
  social: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  },

  // Navigation items
  navigation: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],

  // Footer links
  footerLinks: {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Contact Us", href: "/contact" },
      { name: "FAQ", href: "/faq" },
    ],
    services: [
      { name: "Essay Writing", href: "/services" },
      { name: "Research Papers", href: "/services" },
      { name: "Thesis Writing", href: "/services" },
      { name: "Assignment Help", href: "/services" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms & Conditions", href: "/terms-conditions" },
      { name: "Refund Policy", href: "/refund-policy" },
      { name: "Disclaimer", href: "/disclaimer" },
      { name: "Returns Policy", href: "/returns-policy" },
      { name: "Shipping Policy", href: "/shipping-policy" },
    ],
  },

  // Features
  features: [
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your academic needs",
      icon: "clock",
    },
    {
      title: "Expert Writers",
      description: "PhD qualified writers with years of experience",
      icon: "users",
    },
    {
      title: "Plagiarism Free",
      description: "100% original content with plagiarism reports",
      icon: "shield",
    },
    {
      title: "On-Time Delivery",
      description: "Never miss a deadline with our timely delivery",
      icon: "calendar",
    },
  ],

  // Services
  services: [
    {
      title: "Essay Writing",
      description:
        "Professional essay writing services for all academic levels",
      price: "Starting from $15/page",
      features: ["Original Content", "Free Revisions", "24/7 Support"],
    },
    {
      title: "Research Papers",
      description:
        "In-depth research papers with proper citations and references",
      price: "Starting from $20/page",
      features: ["Detailed Research", "Multiple Sources", "APA/MLA Format"],
    },
    {
      title: "Thesis Writing",
      description:
        "Complete thesis writing assistance from proposal to defense",
      price: "Starting from $25/page",
      features: [
        "Chapter-wise Delivery",
        "Data Analysis",
        "Defense Preparation",
      ],
    },
  ],

  // Assignment types for pricing
  assignmentTypes: [
    { name: "Essay", basePrice: 15 },
    { name: "Research Paper", basePrice: 20 },
    { name: "Thesis", basePrice: 25 },
    { name: "Dissertation", basePrice: 30 },
    { name: "Case Study", basePrice: 18 },
    { name: "Book Review", basePrice: 12 },
    { name: "Lab Report", basePrice: 16 },
    { name: "Presentation", basePrice: 14 },
  ],

  // Academic levels
  academicLevels: [
    { name: "High School", multiplier: 0.8 },
    { name: "Undergraduate", multiplier: 1.0 },
    { name: "Masters", multiplier: 1.3 },
    { name: "PhD", multiplier: 1.6 },
  ],

  // Deadlines
  deadlines: [
    { name: "14+ Days", multiplier: 1.0 },
    { name: "7-13 Days", multiplier: 1.2 },
    { name: "3-6 Days", multiplier: 1.5 },
    { name: "24-48 Hours", multiplier: 2.0 },
    { name: "12-23 Hours", multiplier: 2.5 },
    { name: "6-11 Hours", multiplier: 3.0 },
  ],

  // Countries data for world map section
  countries: [
    "United States",
    "United Kingdom",
    "Australia",
    "Canada",
    "Germany",
    "France",
    "Netherlands",
    "Sweden",
    "Norway",
    "Denmark",
    "Belgium",
    "Switzerland",
    "Austria",
    "Italy",
    "Spain",
    "Ireland",
    "New Zealand",
    "Singapore",
    "Malaysia",
    "UAE",
    "South Africa",
  ],

  // Service to Subject mapping for dynamic subject dropdown
  serviceSubjects: {
    "Essay Writing": [
      "English",
      "History",
      "Psychology",
      "Sociology",
      "Philosophy",
      "Political Science",
      "Literature",
      "Economics",
      "Education",
      "Law",
    ],
    "Research Paper": [
      "Biology",
      "Chemistry",
      "Physics",
      "Mathematics",
      "Computer Science",
      "Engineering",
      "Medicine",
      "Business",
      "Finance",
      "Environmental Science",
    ],
    "Thesis & Dissertation": [
      "Management",
      "Nursing",
      "Education",
      "Law",
      "Engineering",
      "Computer Science",
      "Economics",
      "Psychology",
      "Sociology",
      "Political Science",
    ],
    "Assignment Help": [
      "Accounting",
      "Anthropology",
      "Architecture",
      "Art",
      "Biology",
      "Business",
      "Chemistry",
      "Communication",
      "Computer Science",
      "Criminal Justice",
      "Data Science",
      "Economics",
      "Education",
      "Engineering",
      "English",
      "Environmental Science",
      "Finance",
      "Geography",
      "Geology",
      "History",
      "Human Resource",
      "Information Technology",
      "Law",
      "Linguistics",
      "Management",
      "Marketing",
      "Mathematics",
      "Medicine",
      "Nursing",
      "Philosophy",
      "Physics",
      "Political Science",
      "Project Management",
      "Psychology",
      "Public Health",
      "Science",
      "Social Science",
      "Sociology",
      "Statistics",
      "Theology",
      "Zoology",
      "Other",
    ],
    "Math & Statistics": [
      "Algebra",
      "Calculus",
      "Statistics",
      "Probability",
      "Data Analysis",
      "Regression Analysis",
      "Hypothesis Testing",
      "ANOVA",
      "Time Series Analysis",
    ],
    "Online Course Help": ["All Subjects"],
  },
};
