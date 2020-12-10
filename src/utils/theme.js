export function isCurrentDarkTheme() {
  if (typeof window !== `undefined`) {
    return (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  }
}

export function setNewTheme(theme) {
  if (typeof window !== `undefined`) {
    if (theme === 'dark') {
      localStorage.setItem('theme', theme);
      document.querySelector('html').classList.add('dark');
      document.querySelector('html').style.background = 'black';
    } else {
      document.querySelector('html').classList.remove('dark');
      localStorage.theme = 'light';
    }
  }
}

export function initialLoadTheme() {
  if (typeof window !== `undefined`) {
    setNewTheme(
      localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
        ? 'dark'
        : 'light'
    );
  }
}
