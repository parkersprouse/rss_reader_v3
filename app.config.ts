/* eslint-disable @stylistic/max-len -- Some of these class lists are gonna get long */
export default defineAppConfig({
  icon: {
    class: 'icon',
    size: '1.2em',
  },
  ui: {
    gray: 'zinc',
    primary: 'sky',

    button: {
      variant: {
        plain: 'text-gray-700 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-800',
      },
    },
  },
});
/* eslint-enable @stylistic/max-len */
