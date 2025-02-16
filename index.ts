import 'franken-ui/js/core.iife.js';
import 'franken-ui/js/icon.iife.js';

console.log('Hello via Bun!');

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;

  const settings = localStorage.getItem('__UI__');
  const __UI__ = settings ? JSON.parse(settings) : {};

  if (__UI__.mode === 'dark' || (!__UI__.mode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }

  root.classList.add(__UI__.theme || 'uk-theme-emerald');
  root.classList.add(__UI__.radii || 'uk-radii-md');
  root.classList.add(__UI__.shadows || 'uk-shadows-sm');
  root.classList.add(__UI__.font || 'uk-font-sm');
});
