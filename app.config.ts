/* eslint-disable @stylistic/max-len -- n/a */
export default defineAppConfig({
  icon: {
    class: 'icon',
    size: '1.2em',
  },
  ui: {
    gray: 'zinc',
    primary: 'blue', // 'black',

    notification: {
      default: {
        closeButton: {
          // color: 'gray',
          icon: 'ph:x-light',
          padded: true,
          size: 'xs',
          square: true,
          // variant: 'ghost',
        },
        timeout: 3000,
      },
    },
    notifications: {
      // Show toasts at the top right of the screen
      position: 'top-0 bottom-[unset]',
    },
  },
});
/* eslint-enable @stylistic/max-len */
