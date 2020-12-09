export function isCurrentDarkTheme() {
  return (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
}

export function setNewTheme(theme) {
  console.log(localStorage.theme, theme);
  if (theme === 'dark') {
    localStorage.setItem('theme', theme);
    document.querySelector('html').classList.add('dark');
  } else {
    document.querySelector('html').classList.remove('dark');
    localStorage.theme = 'light';
  }
}

export function initialLoadTheme() {
  console.log('localstorage', localStorage.theme);
  setNewTheme(
    localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? 'dark'
      : 'light'
  );
}
