import { useState } from "react";
import { Check, Eye, Palette } from "lucide-react";
import {
  TEMPLATES,
  TEMPLATE_CATEGORIES,
  getTemplatesByCategory,
} from "../data/templates";

const TemplateSelector = ({
  selectedTemplate,
  onTemplateSelect,
  onPreviewTemplate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("tech");
  const [previewTemplate, setPreviewTemplate] = useState(null);

  const categories = Object.keys(TEMPLATE_CATEGORIES);
  const templatesInCategory = getTemplatesByCategory(selectedCategory);

  const handleTemplateClick = (template) => {
    onTemplateSelect(template.id);
  };

  const handlePreviewClick = (template, e) => {
    e.stopPropagation();
    setPreviewTemplate(template);
    onPreviewTemplate(template);
  };

  const closePreview = () => {
    setPreviewTemplate(null);
  };

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Palette className="w-5 h-5 mr-2 text-[#46AA72]" />
          Choose a Template Style
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-[#46AA72] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <span className="mr-2">{TEMPLATE_CATEGORIES[category].icon}</span>
              {TEMPLATE_CATEGORIES[category].name}
            </button>
          ))}
        </div>
        <p className="text-sm text-gray-600">
          {TEMPLATE_CATEGORIES[selectedCategory].description}
        </p>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {templatesInCategory.map((template) => (
          <div
            key={template.id}
            className={`relative bg-white rounded-xl border-2 transition-all duration-200 cursor-pointer hover:shadow-lg ${
              selectedTemplate === template.id
                ? "border-[#46AA72] shadow-lg"
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => handleTemplateClick(template)}
          >
            {/* Template Preview */}
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-xl relative overflow-hidden">
              {/* Mock preview based on template colors */}
              <div
                className="w-full h-full relative"
                style={{
                  background: `linear-gradient(135deg, ${template.colors.primary}20, ${template.colors.secondary}20)`,
                }}
              >
                {/* Mock content */}
                <div className="p-4 h-full flex flex-col justify-between">
                  <div className="space-y-2">
                    <div
                      className="h-4 rounded"
                      style={{
                        width: "70%",
                        backgroundColor: template.colors.primary,
                      }}
                    ></div>
                    <div
                      className="h-3 rounded"
                      style={{
                        width: "90%",
                        backgroundColor: template.colors.primary + "60",
                      }}
                    ></div>
                    <div
                      className="h-3 rounded"
                      style={{
                        width: "60%",
                        backgroundColor: template.colors.primary + "60",
                      }}
                    ></div>
                  </div>

                  <div className="space-y-2">
                    <div
                      className="h-8 rounded-lg"
                      style={{
                        backgroundColor: template.colors.primary,
                      }}
                    ></div>
                    <div className="grid grid-cols-3 gap-1">
                      <div
                        className="h-6 rounded"
                        style={{
                          backgroundColor: template.colors.accent + "40",
                        }}
                      ></div>
                      <div
                        className="h-6 rounded"
                        style={{
                          backgroundColor: template.colors.accent + "40",
                        }}
                      ></div>
                      <div
                        className="h-6 rounded"
                        style={{
                          backgroundColor: template.colors.accent + "40",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Preview Button */}
              <button
                onClick={(e) => handlePreviewClick(template, e)}
                className="absolute top-2 right-2 p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm hover:bg-white transition-colors"
                title="Preview template"
              >
                <Eye className="w-4 h-4 text-gray-600" />
              </button>

              {/* Selected Indicator */}
              {selectedTemplate === template.id && (
                <div className="absolute top-2 left-2 p-2 bg-[#46AA72] rounded-lg shadow-sm">
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}
            </div>

            {/* Template Info */}
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 mb-1">
                {template.name}
              </h4>
              <p className="text-sm text-gray-600 mb-3">
                {template.description}
              </p>

              {/* Color Palette */}
              <div className="flex space-x-1 mb-3">
                <div
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: template.colors.primary }}
                  title="Primary"
                ></div>
                <div
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: template.colors.secondary }}
                  title="Secondary"
                ></div>
                <div
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{ backgroundColor: template.colors.accent }}
                  title="Accent"
                ></div>
              </div>

              {/* Features */}
              <div className="text-xs text-gray-500">
                <div className="font-medium mb-1">Features:</div>
                <ul className="space-y-1">
                  {template.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                  {template.features.length > 3 && (
                    <li className="text-gray-400">
                      +{template.features.length - 3} more
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Template Summary */}
      {selectedTemplate && (
        <div className="mt-6 p-4 bg-[#46AA72]/10 border border-[#46AA72]/20 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-[#46AA72]">
                Selected: {TEMPLATES[selectedTemplate]?.name}
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                {TEMPLATES[selectedTemplate]?.description}
              </p>
            </div>
            <button
              onClick={() => onTemplateSelect(null)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              Change
            </button>
          </div>
        </div>
      )}

      {/* Template Preview Modal */}
      {previewTemplate && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {previewTemplate.name} Template Preview
                </h3>
                <p className="text-gray-600 mt-1">
                  {previewTemplate.description}
                </p>
              </div>
              <button
                onClick={closePreview}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="aspect-[16/10] bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                <div
                  className="w-full h-full relative"
                  style={{
                    background: `linear-gradient(135deg, ${previewTemplate.colors.primary}20, ${previewTemplate.colors.secondary}20)`,
                  }}
                >
                  {/* Detailed mock preview */}
                  <div className="p-8 h-full flex flex-col justify-between">
                    {/* Header */}
                    <div className="space-y-4">
                      <div
                        className="h-8 rounded-lg"
                        style={{
                          width: "60%",
                          backgroundColor: previewTemplate.colors.primary,
                        }}
                      ></div>
                      <div
                        className="h-4 rounded"
                        style={{
                          width: "80%",
                          backgroundColor:
                            previewTemplate.colors.primary + "60",
                        }}
                      ></div>
                      <div
                        className="h-4 rounded"
                        style={{
                          width: "70%",
                          backgroundColor:
                            previewTemplate.colors.primary + "60",
                        }}
                      ></div>
                    </div>

                    {/* CTA Section */}
                    <div className="space-y-4">
                      <div
                        className="h-12 rounded-lg mx-auto"
                        style={{
                          width: "200px",
                          backgroundColor: previewTemplate.colors.primary,
                        }}
                      ></div>

                      {/* Features Grid */}
                      <div className="grid grid-cols-3 gap-4 mt-8">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="space-y-2">
                            <div
                              className="h-16 rounded-lg"
                              style={{
                                backgroundColor:
                                  previewTemplate.colors.accent + "20",
                              }}
                            ></div>
                            <div
                              className="h-3 rounded"
                              style={{
                                backgroundColor:
                                  previewTemplate.colors.secondary + "40",
                              }}
                            ></div>
                            <div
                              className="h-3 rounded"
                              style={{
                                width: "70%",
                                backgroundColor:
                                  previewTemplate.colors.secondary + "40",
                              }}
                            ></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Features Included
                  </h4>
                  <ul className="space-y-2">
                    {previewTemplate.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <Check className="w-4 h-4 text-[#46AA72] mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Color Palette
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-8 h-8 rounded-lg border border-gray-200"
                        style={{
                          backgroundColor: previewTemplate.colors.primary,
                        }}
                      ></div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          Primary
                        </div>
                        <div className="text-xs text-gray-500">
                          {previewTemplate.colors.primary}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-8 h-8 rounded-lg border border-gray-200"
                        style={{
                          backgroundColor: previewTemplate.colors.secondary,
                        }}
                      ></div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          Secondary
                        </div>
                        <div className="text-xs text-gray-500">
                          {previewTemplate.colors.secondary}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-8 h-8 rounded-lg border border-gray-200"
                        style={{
                          backgroundColor: previewTemplate.colors.accent,
                        }}
                      ></div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          Accent
                        </div>
                        <div className="text-xs text-gray-500">
                          {previewTemplate.colors.accent}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200 bg-gray-50">
              <button
                onClick={closePreview}
                className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onTemplateSelect(previewTemplate.id);
                  closePreview();
                }}
                className="px-6 py-2 bg-[#46AA72] text-white rounded-lg hover:bg-[#3d9463] transition-colors"
              >
                Select This Template
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateSelector;
