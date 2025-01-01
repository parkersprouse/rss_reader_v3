import {
  defineConfig,
  presetAttributify,
  // presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

import colors from './config/colors.ts';

// import type { IconifyJSON } from '@iconify-json/ph';
import type { Awaitable, CSSEntries, CSSEntry, VariantHandler } from 'unocss';

/* eslint-disable sort-keys -- Nuxt has a specifically desired key order */
export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    // presetIcons({
    //   collections: {
    //     ph: (): Awaitable<IconifyJSON> =>
    //       import('@iconify-json/ph/icons.json').then((i) => i.default) as Awaitable<IconifyJSON>,
    //   },
    //   prefix: 'i-',
    //   unit: 'em',
    // }),
    presetTypography(),
  ],
  // shortcuts: [
  //   // Create a shortcut that allows writing `<i-{name} />` instead of `<i-ph-{name} />`
  //   [/^i-ph(.*)$/, ([, name]): string => `i${name}`],
  // ],
  theme: {
    // Default UnoCSS breakpoints, set explicitly for visibility
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors,
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  variants: [
    // dynamically create a hoverable version a class when `hover:` is prepended to it
    (matcher): Awaitable<string | VariantHandler | VariantHandler[] | undefined> => {
      if (!matcher.startsWith('hover:')) return matcher;
      return {
        // slice off matcher and pass the rest on
        matcher: matcher.slice(6),
        selector: (s): string => `${s}:hover`,
      };
    },

    // dynamically make a class' attributes `important` when `!` is appended to it
    (matcher): Awaitable<string | VariantHandler | VariantHandler[] | undefined> => {
      if (!matcher.endsWith('!')) return matcher;
      return {
        // slice off matcher and pass the rest on
        matcher: matcher.slice(0, -1),
        body(body): CSSEntries | undefined {
          const modified: CSSEntry[] = [];
          for (const attr of body) {
            modified.push([attr[0], `${attr[1]} !important;`]);
          }
          return modified;
        },
      };
    },
  ],
});
/* eslint-enable sort-keys */
