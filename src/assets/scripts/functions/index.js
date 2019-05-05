import { get } from './getjson.js';

export function getDiseases() {
  get('https://dssapi.nodescave.com/diseases').then(function(response) {
  var ListofDiseases = JSON.parse(response);
    console.log("Success!", ListofDiseases);
  }, function(error) {
    console.error("Failed!", error);
  });
}

export function numberofpatients(days){
  get('https://dssapi.nodescave.com/numberofpatients/?param='+days).then(function(response) {
    var NumberOfPatientsInTime = JSON.parse(response);
      console.log("Success!", NumberOfPatientsInTime);
     // obj.innerHTML("hello");
      //return  NumberOfPatientsInTime.length;
    }, function(error) {
      console.error("Failed!", error);
    });
  }

  numberofpatients(30);