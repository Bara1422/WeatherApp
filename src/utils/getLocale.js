export function getLocale() {
  const [languageCode] = navigator.language.split('-')
  return languageCode
}
