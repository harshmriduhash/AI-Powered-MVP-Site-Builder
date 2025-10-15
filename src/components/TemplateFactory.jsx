import { TEMPLATES } from "../data/templates";
import StartupTemplate from "./templates/StartupTemplate";
import EcommerceTemplate from "./templates/EcommerceTemplate";

// Import other templates as they are created
// import ServiceTemplate from './templates/ServiceTemplate';
// import MobileTemplate from './templates/MobileTemplate';
// import NonprofitTemplate from './templates/NonprofitTemplate';
// import EducationTemplate from './templates/EducationTemplate';

const TemplateFactory = ({ templateId, ...props }) => {
  const template = TEMPLATES[templateId] || TEMPLATES.startup;

  switch (templateId) {
    case "startup":
      return <StartupTemplate {...props} />;

    case "ecommerce":
      return <EcommerceTemplate {...props} />;

    // Add other templates as they are created
    // case 'service':
    //   return <ServiceTemplate {...props} />;

    // case 'mobile':
    //   return <MobileTemplate {...props} />;

    // case 'nonprofit':
    //   return <NonprofitTemplate {...props} />;

    // case 'education':
    //   return <EducationTemplate {...props} />;

    default:
      // Fallback to startup template
      return <StartupTemplate {...props} />;
  }
};

export default TemplateFactory;
