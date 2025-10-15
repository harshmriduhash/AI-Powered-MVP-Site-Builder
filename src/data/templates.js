// Template configuration for different landing page styles
export const TEMPLATES = {
  startup: {
    id: "startup",
    name: "Startup Launch",
    description: "Perfect for SaaS, apps, and tech startups",
    category: "tech",
    preview: "/templates/startup-preview.png",
    colors: {
      primary: "#3B82F6",
      secondary: "#1E40AF",
      accent: "#10B981",
      background: "#F8FAFC",
    },
    features: [
      "Hero with gradient background",
      "Feature grid layout",
      "Social proof section",
      "Pricing tiers",
      "FAQ section",
    ],
    aiPrompt: `Generate content for a modern tech startup landing page. Focus on innovation, efficiency, and cutting-edge solutions. Use tech-forward language and emphasize scalability and performance.`,
  },

  ecommerce: {
    id: "ecommerce",
    name: "E-commerce Store",
    description: "Ideal for online stores and product launches",
    category: "retail",
    preview: "/templates/ecommerce-preview.png",
    colors: {
      primary: "#EF4444",
      secondary: "#DC2626",
      accent: "#F59E0B",
      background: "#FFFBEB",
    },
    features: [
      "Product showcase hero",
      "Benefits grid",
      "Customer testimonials",
      "Limited time offers",
      "Trust badges",
    ],
    aiPrompt: `Generate content for an e-commerce product launch. Focus on value, quality, and customer satisfaction. Use persuasive language that drives purchases and emphasizes product benefits.`,
  },

  service: {
    id: "service",
    name: "Professional Services",
    description: "Great for consulting, agencies, and service businesses",
    category: "professional",
    preview: "/templates/service-preview.png",
    colors: {
      primary: "#7C3AED",
      secondary: "#5B21B6",
      accent: "#059669",
      background: "#F3F4F6",
    },
    features: [
      "Professional hero section",
      "Service highlights",
      "Case studies",
      "Team credibility",
      "Contact forms",
    ],
    aiPrompt: `Generate content for a professional services business. Focus on expertise, reliability, and proven results. Use authoritative language that builds trust and demonstrates competence.`,
  },

  mobile: {
    id: "mobile",
    name: "Mobile App",
    description: "Optimized for mobile app launches and downloads",
    category: "mobile",
    preview: "/templates/mobile-preview.png",
    colors: {
      primary: "#8B5CF6",
      secondary: "#7C3AED",
      accent: "#06B6D4",
      background: "#F0F9FF",
    },
    features: [
      "App mockup hero",
      "Feature highlights",
      "Download buttons",
      "App store badges",
      "User reviews",
    ],
    aiPrompt: `Generate content for a mobile app launch. Focus on user experience, convenience, and mobile-first benefits. Use engaging language that encourages app downloads and usage.`,
  },

  nonprofit: {
    id: "nonprofit",
    name: "Non-Profit",
    description: "Designed for charities, causes, and community initiatives",
    category: "social",
    preview: "/templates/nonprofit-preview.png",
    colors: {
      primary: "#059669",
      secondary: "#047857",
      accent: "#DC2626",
      background: "#ECFDF5",
    },
    features: [
      "Mission-focused hero",
      "Impact stories",
      "Donation calls-to-action",
      "Volunteer opportunities",
      "Transparency section",
    ],
    aiPrompt: `Generate content for a non-profit organization or social cause. Focus on impact, community, and making a difference. Use emotional and inspiring language that motivates action and support.`,
  },

  education: {
    id: "education",
    name: "Educational",
    description: "Perfect for courses, workshops, and educational content",
    category: "education",
    preview: "/templates/education-preview.png",
    colors: {
      primary: "#2563EB",
      secondary: "#1D4ED8",
      accent: "#F59E0B",
      background: "#EFF6FF",
    },
    features: [
      "Learning-focused hero",
      "Course highlights",
      "Instructor credentials",
      "Student success stories",
      "Enrollment process",
    ],
    aiPrompt: `Generate content for an educational platform or course. Focus on learning outcomes, expertise, and student success. Use encouraging language that emphasizes growth and knowledge acquisition.`,
  },
};

export const TEMPLATE_CATEGORIES = {
  tech: {
    name: "Technology",
    icon: "💻",
    description: "For tech startups, SaaS, and digital products",
  },
  retail: {
    name: "Retail & E-commerce",
    icon: "🛒",
    description: "For online stores and product launches",
  },
  professional: {
    name: "Professional Services",
    icon: "💼",
    description: "For consulting, agencies, and services",
  },
  mobile: {
    name: "Mobile Apps",
    icon: "📱",
    description: "For mobile applications and downloads",
  },
  social: {
    name: "Social Impact",
    icon: "🤝",
    description: "For non-profits and community initiatives",
  },
  education: {
    name: "Education",
    icon: "🎓",
    description: "For courses, workshops, and learning platforms",
  },
};

// Template-specific content generators
export const getTemplatePrompt = (templateId, productName, description) => {
  const template = TEMPLATES[templateId];
  if (!template) return null;

  const basePrompt = `You are required to extract structured data from the provided product information for a ${template.name} landing page. Do not include any explanations, comments, or extra words. Your output must be strictly and only the following in **valid JSON format**:

{
 "heading": "(Describe what the product actually is, not just the name, 5 to 6 words only, unique, optimized for ${template.category} category)",
 "subheading": "(Provide a bit more detail explaining the heading, at least 15 words, using ${template.name} language)",
 "why_use": {
   "line": "(A one-line summary of the main benefit, at least 15 words, tailored for ${template.category})",
   "points": [
     "(First reason, at least 20 words, ${template.name} focused)",
     "(Second reason, at least 20 words, ${template.name} focused)",
     "(Third reason, at least 20 words, ${template.name} focused)",
     "(Fourth reason, at least 20 words, ${template.name} focused)"
   ]
 },
 "features_and_benefits": [
   "(Feature 1, short and clear, ${template.name} relevant)",
   "(Feature 2, short and clear, ${template.name} relevant)",
   "(Feature 3, short and clear, ${template.name} relevant)"
 ],
 "features_explanation": [
   "(Explanation for feature 1, at least 20 words, ${template.name} style)",
   "(Explanation for feature 2, at least 20 words, ${template.name} style)",
   "(Explanation for feature 3, at least 20 words, ${template.name} style)"
 ]
}

Use the product name and description below to generate the required content:
PRODUCT NAME: ${productName}
PRODUCT DESCRIPTION: ${description}

${template.aiPrompt}`;

  return basePrompt;
};

// Get templates by category
export const getTemplatesByCategory = (category) => {
  return Object.values(TEMPLATES).filter(
    (template) => template.category === category
  );
};

// Get all categories
export const getAllCategories = () => {
  return Object.keys(TEMPLATE_CATEGORIES);
};

// Get template by ID
export const getTemplateById = (id) => {
  return TEMPLATES[id] || null;
};
