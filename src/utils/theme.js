export function isLocalStorageDarkTheme(params) {
  return localStorage.getItem('theme') === 'dark';
}

export function setLocalStorageTheme(theme) {
  localStorage.setItem('theme', theme);
}

export function initialLoadTheme() {
  console.log(localStorage.theme);
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.querySelector('html').classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.querySelector('html').classList.remove('dark');
    localStorage.theme = 'light';
    // localStorage.removeItem('theme');
  }
}
