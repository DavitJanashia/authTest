document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded");

  // Verifica se l'elemento per il bottone di sign-in esiste, altrimenti crealo.
  if (!document.getElementById("apple-sign-in-button")) {
    console.log("Creating sign-in button element");
    var signInDiv = document.createElement("div");
    signInDiv.id = "apple-sign-in-button";
    document.body.appendChild(signInDiv);
  } else {
    console.log("Sign-in button element already exists");
  }

  // Verifica se l'elemento per il bottone di sign-out esiste, altrimenti crealo.
  if (!document.getElementById("apple-sign-out-button")) {
    console.log("Creating sign-out button element");
    var signOutDiv = document.createElement("div");
    signOutDiv.id = "apple-sign-out-button";
    document.body.appendChild(signOutDiv);
  } else {
    console.log("Sign-out button element already exists");
  }

  console.log("Before CloudKit.configure()");
  CloudKit.configure({
    locale: 'en-us',
    containers: [{
      containerIdentifier: 'iCloud.me.davit.janashia.authTest2', // Verifica questo dato
      apiTokenAuth: {
        apiToken: '70d8d209065ddd559f7369dbac26af4c909ef0ae1c1e234c67f49d6adaa31833', // Verifica questo token
        persist: true, // Imposta un cookie per mantenere la sessione
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
  console.log("CloudKit configured");

});
