

export function registerServiceWorker () {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then(registration => {
        // tslint:disable-next-line
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        // tslint:disable-next-line
        console.log('SW registration failed: ', registrationError);
      });
    });
  }
}