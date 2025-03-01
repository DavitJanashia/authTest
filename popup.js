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

    container.setUpAuth().then(function(user) {
    console.log("Initial setUpAuth result:", user);
    if (user) {
      document.getElementById("status").textContent = "Signed in: " + user.userRecordName;
    } else {
      document.getElementById("status").textContent = "Not signed in";
    }
  }).catch(function(error) {
    console.error("Error during setUpAuth:", error);
    document.getElementById("status").textContent = "Auth error: " + error;

  document.addEventListener("DOMContentLoaded", () => {
    // Se esiste un bottone per il login, simuliamo il click
    const loginButton = document.getElementById("apple-sign-in-button");
    if (loginButton) {
    console.log("Simulazione del click sul bottone di login");
    loginButton.click();
    }
  });

});
