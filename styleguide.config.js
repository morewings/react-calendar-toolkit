const path = require('path');

module.exports = {
  pagePerSection: true,
  assetsDir: './doc-assets',
  moduleAliases: {
    'react-calendar-toolkit': path.resolve(__dirname, 'src/entryPoint.js'), // custom resolver path
  },
  sections: [
    {
      name: 'Installation',
      content: 'Installation.md',
    },
    {
      name: 'Overview',
      content: 'Overview.md',
      description: 'Basic concepts',
    },
    {
      name: 'Available components',
      components: ['src/components/DatePicker/DatePicker.js'],
      description: 'Exported components',
    },
    {
      name: 'Visual customization',
      description:
        'You can customize UI of each datepicker component by overriding default view component.',
      components: [
        'src/components/visual/Header/Header.js',
        'src/components/visual/Selector/Selector.js',
        'src/components/visual/Day/Day.js',
        'src/components/visual/WeekDay/WeekDay.js',
        'src/components/visual/Month/Month.js',
        'src/components/visual/Year/Year.js',
      ],
    },
  ],
};
