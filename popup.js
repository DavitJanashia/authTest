document.addEventListener("DOMContentLoaded", function() {
  // Verifica se esiste l'elemento con id "apple-sign-in-button"
  if (!document.getElementById("apple-sign-in-button")) {
    // Crea il div e lo aggiunge nel body o in un contenitore specifico
    var signInDiv = document.createElement("div");
    signInDiv.id = "apple-sign-in-button";
    document.body.appendChild(signInDiv);
  }
  
  if (!document.getElementById("apple-sign-out-button")) {
    var signOutDiv = document.createElement("div");
    signOutDiv.id = "apple-sign-out-button";
    document.body.appendChild(signOutDiv);
  }
  
  // Ora puoi chiamare CloudKit.configure e, se necessario, forzare il rendering dei bottoni
  CloudKit.configure({
    locale: 'en-us',
    containers: [{
      containerIdentifier: 'iCloud.me.davit.janashia.authTest2',
      apiTokenAuth: {
        apiToken: '70d8d209065ddd559f7369dbac26af4c909ef0ae1c1e234c67f49d6adaa31833',
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
  
  // Se necessario, forza il rendering manuale
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
});
