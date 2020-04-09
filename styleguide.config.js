const path = require('path');
const fs = require('fs');

module.exports = {
  pagePerSection: true,
  assetsDir: './doc-assets',
  moduleAliases: {
    'react-calendar-toolkit': path.resolve(__dirname, 'src/entryPoint.js'), // custom resolver path
  },
  ribbon: {
    url: 'https://github.com/morewings/react-calendar-toolkit/',
    text: 'Fork me on GitHub',
  },
  sections: [
    {
      name: 'Quickstart',
      content: 'Quickstart.md',
    },
    {
      name: 'IE11 support',
      content: 'IE11.md',
    },
    {
      name: 'Overview',
      content: 'Overview.md',
      description: 'How it works?',
    },
    {
      name: 'Available components',
      components: [
        'src/components/DatePicker/DatePicker.js',
        'src/components/DatePickerInput/DatePickerInput.js',
      ],
      description: 'Exported components',
      sectionDepth: 1,
    },
    {
      name: 'Utilities',
      content: 'Utilities.md',
      description: 'Useful React hooks for your custom UI',
    },
    {
      name: 'Customize default UI',
      content: 'Theming.md',
      description: 'Apply custom theme on default UI',
    },
    {
      name: 'Datepicker custom UI',
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
      sectionDepth: 1,
    },
    {
      name: 'Input custom UI',
      description:
        'You can customize UI of each Datepicker Input component by overriding default view component.',
      components: [
        'src/components/visual/Input/Input.js',
        'src/components/visual/Modal/ModalWrapper.js',
        'src/components/visual/Popover/PopoverWrapper.js',
      ],
      sectionDepth: 1,
    },
  ],
  updateExample(props, exampleFilePath) {
    // props.settings are passed by any fenced code block, in this case
    const {settings, lang} = props;
    // "../mySourceCode.js"
    if (settings && typeof settings.file === 'string') {
      // "absolute path to mySourceCode.js"
      const filepath = path.resolve(exampleFilePath, settings.file);
      // displays the block as static code
      settings.static = true;
      // no longer needed
      delete settings.file;
      return {
        content: fs.readFileSync(filepath, 'utf8'),
        settings,
        lang,
      };
    }
    return props;
  },
};
