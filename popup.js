document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed.");

  // Configure CloudKit with your container settings.
  CloudKit.configure({
    locale: 'en-us',
    containers: [{
      containerIdentifier: 'iCloud.me.davit.janashia.authTest2', // Replace with your container identifier.
      apiTokenAuth: {
        apiToken: '70d8d209065ddd559f7369dbac26af4c909ef0ae1c1e234c67f49d6adaa31833', // Replace with your API token.
        persist: true, // This sets a cookie so that the auth persists.
        // (Optional) CloudKit can auto-render sign in/out buttons if you have corresponding elements:
        signInButton: {
          id: 'apple-sign-in-button',
          theme: 'black'
        },
        signOutButton: {
          id: 'apple-sign-out-button',
          theme: 'black'
        }
      },
      environment: 'development' // Use 'production' when you're ready.
    }]
  });
  console.log("CloudKit configured.");
  const container = CloudKit.getDefaultContainer();
  console.log("Avvio login automatico...");

  // Avvia il login interattivo automaticamente
  container.setUpAuth({ interactive: true }).then(user => {
    console.log("Login avvenuto con successo:", user);
    window.parent.postMessage({ type: "AUTH_SUCCESS", userData: user }, "*");
  }).catch(error => {
    console.error("Errore nel login:", error);
    window.parent.postMessage({ type: "AUTH_ERROR", error: error.message }, "*");
  });


});
