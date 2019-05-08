import { get } from './getjson.js';

export async function getDiseases() {
  return await get('https://dssapi.nodescave.com/diseases').then(function(response) {
  var ListofDiseases = JSON.parse(response);
    console.log("Success!", ListofDiseases);
    return ListofDiseases;
  }, function(error) {
    console.error("Failed!", error);
  });
}

export async function numberofpatients(days){
  return await get('https://dssapi.nodescave.com/numberofpatients/?param='+days).then(
  function(response) {
    var NumberOfPatientsInTime = JSON.parse(response);
     return NumberOfPatientsInTime;
    },
    function(error) {
      console.error("Failed!", error);
    });
  }
 



