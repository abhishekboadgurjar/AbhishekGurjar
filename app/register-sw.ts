// This file handles the service worker registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(
      (registration) => {
        console.log('Service Worker registered with scope: ', registration.scope);
      },
      (err) => {
        console.error('Service Worker registration failed: ', err);
      }
    );
  });
}
