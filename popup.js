document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed.");

  // Configure CloudKit
  CloudKit.configure({
    locale: 'en-us',
    containers: [{
      containerIdentifier: 'iCloud.me.davit.janashia.authTest2', // Assicurati che sia corretto
      apiTokenAuth: {
        apiToken: '70d8d209065ddd559f7369dbac26af4c909ef0ae1c1e234c67f49d6adaa31833', // Assicurati che sia il token giusto
        persist: true,
        signInButton: {
          id: 'apple-sign-in-button',
          theme: 'black'
        },
        signOutButton: {
          id: 'apple-sign-out-button',
          theme: 'black'
        }
      },
      environment: 'development'
    }]
  });
  console.log("CloudKit configured.");

  const container = CloudKit.getDefaultContainer();
  console.log("Default container retrieved:", container);

  // Se l'auto-render non avviene, forza il rendering del bottone:
  if (CloudKit.UI && typeof CloudKit.UI.renderSignInButton === 'function') {
    CloudKit.UI.renderSignInButton({
      id: 'apple-sign-in-button',
      theme: 'black'
    });
    CloudKit.UI.renderSignOutButton({
      id: 'apple-sign-out-button',
      theme: 'black'
    });
  }

  // Puoi aggiungere ulteriori controlli per la visualizzazione dello stato o per il login.
});
