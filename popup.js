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
  console.log("Default container retrieved:", container);

  // Check initial authentication status.
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
  });
  document.getElementById("signInButton").addEventListener("click", function() {
    console.log("Sign in button clicked.");
    container.setUpAuth({ interactive: true }).then(function(user) {
      console.log("Interactive sign in result:", user);
      if (user) {
        document.getElementById("status").textContent = "Signed in: " + user.userRecordName;
      } else {
        document.getElementById("status").textContent = "Sign in cancelled or no user returned.";
      }
    }).catch(function(error) {
      console.error("Error during interactive sign in:", error);
      document.getElementById("status").textContent = "Sign in error: " + error;
    });
  });

});
