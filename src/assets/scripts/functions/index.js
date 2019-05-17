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
 
  export async function getLocations(){
    return await get('https://dssapi.nodescave.com/locations').then(
    function(response) {
      let v = JSON.parse(response);
       return v;
      },
      function(error) {
        console.error("Failed!", error);
      });
    }

    export async function compareyears(one, two){
      return await get('https://dssapi.nodescave.com/compareyears/?param='+one+'&param2='+two).then(
      function(response) {
        let v = JSON.parse(response);
       // console.log(v);
         return v;
        },
        function(error) {
          console.error("Failed!", error);
        });
      }




