const path = require('path');

module.exports = {
  pagePerSection: true,
  assetsDir: './doc-assets',
  moduleAliases: {
    'react-calendar-toolkit': path.resolve(__dirname, 'src/entryPoint.js'), // custom resolver path
  },
  sections: [
    {
      name: 'React Calendar Toolkit',
      content: 'Overview.md',
    },
    {
      name: 'Installation',
      content: 'Installation.md',
      description: 'The description for the installation section',
    },
    {
      name: 'Available components',
      components: ['src/components/DatePicker/DatePicker.js'],
      description: 'Exported components',
    },
    {
      name: 'Visual customization',
      description: 'Exported components',
      content: 'Visual_customization.md',
    },
    {
      pagePerSection: true,
      name: 'Visual Components',
      content: 'Visual_Components.md',
      components: 'src/components/visual/**/[A-Z]*.js',
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
    },
  ],
};
