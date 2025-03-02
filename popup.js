document.cookie = "name=value; Secure; SameSite=None; path=/";

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

function demoSetUpAuth() {

  // Get the container.
  var container = CloudKit.getDefaultContainer();

  function gotoAuthenticatedState(userIdentity) {
    var name = userIdentity.nameComponents;
    if(name) {
      displayUserName(name.givenName + ' ' + name.familyName);
    } else {
      displayUserName('User record name: ' + userIdentity.userRecordName);
    }
    container
      .whenUserSignsOut()
      .then(gotoUnauthenticatedState);
  }
  function gotoUnauthenticatedState(error) {

    if(error && error.ckErrorCode === 'AUTH_PERSIST_ERROR') {
      showDialogForPersistError();
    }

    displayUserName('Unauthenticated User');
    container
      .whenUserSignsIn()
      .then(gotoAuthenticatedState)
      .catch(gotoUnauthenticatedState);
  }

  // Check a user is signed in and render the appropriate button.
  return container.setUpAuth()
    .then(function(userIdentity) {

      // Either a sign-in or a sign-out button was added to the DOM.

      // userIdentity is the signed-in user or null.
      if(userIdentity) {
        gotoAuthenticatedState(userIdentity);
      } else {
        gotoUnauthenticatedState();
      }
    });
}



demoSetUpAuth() 
  
});
