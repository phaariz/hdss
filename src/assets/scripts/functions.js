function getDiseases() {
get('https://dssapi.nodescave.com/diseases').then(function(response) {
  var ListofDiseases = JSON.parse(response);
    console.log("Success!", ListofDiseases);
  }, function(error) {
    console.error("Failed!", error);
  });
}