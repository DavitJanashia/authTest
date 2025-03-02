document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed.");

  // Configure CloudKit
  
  CloudKit.configure({
  containers: [{
    containerIdentifier: 'iCloud.me.davit.janashia.authTest2',
    apiTokenAuth: {
      apiToken: '70d8d209065ddd559f7369dbac26af4c909ef0ae1c1e234c67f49d6adaa31833',
      persist: true,
      signInButton: {
        id: 'apple-sign-in-button',
        theme: 'black'
      },
    },
    environment: 'development'
  }]
});
  console.log("CloudKit configured.");

  const container = CloudKit.getDefaultContainer();
  console.log("Default container retrieved:", container);




  // Puoi aggiungere ulteriori controlli per la visualizzazione dello stato o per il login.
});
