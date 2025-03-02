document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed.");

  // Configure CloudKit with your container settings.
  CloudKit.configure({
    locale: 'en-us',
    containers: [{
      containerIdentifier: 'iCloud.me.davit.janashia.authTest2', // Replace with your container identifier.
      apiTokenAuth: {
        apiToken: '01880ccd50a504f48fe8a67feae7d8b1f136aa97e2da4db33c89d66931defb9c', // Replace with your API token.
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
var userIdentity = CloudKit.UserIdentity
container.setUpAuth().then(function(userIdentity) {
    if (userIdentity) {
        // The user is authenticated
        console.log("User record name:", userIdentity.userRecordName);
    } else {
        // No user is signed in; the sign-in button will be displayed
        console.log("User is not signed in");
    }
}).catch(function(error) {
    console.error("Authentication error:", error);
});


});
