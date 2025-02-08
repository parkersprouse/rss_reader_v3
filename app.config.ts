export default defineAppConfig({
  icon: {
    class: 'icon',
    size: '1.2em',
  },
  ui: {
    gray: 'zinc',
    primary: 'blue', // 'black',

    accordion: {
      default: {
        openIcon: 'ph:caret-down',
      },
    },
    breadcrumb: {
      default: {
        divider: 'ph:caret-right',
      },
    },
    button: {
      default: {
        loadingIcon: 'ph:arrows-clockwise',
      },
    },
    commandPalette: {
      default: {
        emptyState: {
          icon: 'ph:magnifying-glass',
        },
        icon: 'ph:magnifying-glass',
        loadingIcon: 'ph:arrows-clockwise',
        selectedIcon: 'ph:check',
      },
    },
    input: {
      default: {
        loadingIcon: 'ph:arrows-clockwise',
      },
    },
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
    pagination: {
      default: {
        firstButton: {
          icon: 'ph:caret-double-left',
        },
        lastButton: {
          icon: 'ph:caret-double-right',
        },
        nextButton: {
          icon: 'ph:caret-right',
        },
        prevButton: {
          icon: 'ph:caret-left',
        },
      },
    },
    select: {
      default: {
        loadingIcon: 'ph:arrows-clockwise',
        trailingIcon: 'ph:caret-down',
      },
    },
    selectMenu: {
      default: {
        selectedIcon: 'ph:check',
      },
    },
    table: {
      default: {
        emptyState: {
          icon: 'ph:empty',
        },
        loadingState: {
          icon: 'ph:arrows-clockwise',
        },
        sortAscIcon: 'ph:sort-descending',
        sortButton: {
          icon: 'ph:arrows-left-right',
        },
        sortDescIcon: 'ph:sort-ascending',
      },
    },
  },
});
