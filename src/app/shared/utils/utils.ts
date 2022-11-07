export function isMobileDevice() {
  let isMobile =
    typeof window.orientation !== 'undefined' ||
    navigator.userAgent.indexOf('IEMobile') !== -1 ||
    navigator.userAgent.indexOf('Android') !== -1 ||
    navigator.userAgent.toLowerCase().match(/mobile/i);
  return isMobile !== null;
}

// Currently we only support English / Spanish / France
export function getLanguage() {
  const langage = window.navigator.language;

  return ['fr-FR', 'en-US', 'es-ES'].find((supportedLanguage) =>
    supportedLanguage === langage ? langage : 'en-US'
  );
}
