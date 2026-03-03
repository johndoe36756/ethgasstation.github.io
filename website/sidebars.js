// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'AI Connect (MCP)',
      items: ['ai-connect/overview'],
    },
    {
      type: 'category',
      label: 'API',
      items: ['api/overview'],
    },
    'faq',
  ],
};

export default sidebars;
