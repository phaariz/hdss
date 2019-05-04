function getDiseases() {
get('https://dssapi.nodescave.com/diseases').then(function(response) {
  var ListofDiseases = JSON.parse(response);
    console.log("Success!", ListofDiseases);
  }, function(error) {
    console.error("Failed!", error);
  });
}

function getNumberOfPatients(days) {
  get('https://dssapi.nodescave.com/numberofpatients/?param='+days).then(function(response) {
    var NumberOfPatientsInTime = JSON.parse(response);
      console.log("Success!", NumberOfPatientsInTime);
    }, function(error) {
      console.error("Failed!", error);
    });
  }