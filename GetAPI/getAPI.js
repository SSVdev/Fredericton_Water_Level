
function Get_API_Water() {
    let meter0, temp0, time0 = 0;
    let meter1, temp1, time1 = 0;
    let meter2, temp2, time2 = 0;
    let meter3, temp3, time3 = 0;
    const request = new XMLHttpRequest();
    request.open('GET', 'https://services2.arcgis.com/iLWAxhpxafhOza2U/arcgis/rest/services/IoT_Sensors_to_Sensus/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json',false);
    request.onreadystatechange = function() {
      if (this.readyState === 4) {
         //console.log('Status:', this.status);
         //console.log('Headers:', this.getAllResponseHeaders());
         //console.log('Body:', this.responseText);
         const body = this.responseText;
         const data = JSON.parse(body);
         meter0 = data.features[0].attributes.MeterReading;
         if (meter0 === null) meter0 = 'null';
         temp0 = data.features[0].attributes.Temperature;
         let date = new Date(data.features[0].attributes.Timestamp);
         time0 = date.getDate()+
                 "/"+(date.getMonth()+1)+
                 "/"+date.getFullYear()+
                 " "+date.getHours()+
                 ":"+date.getMinutes();

         meter1 = data.features[1].attributes.MeterReading;
         if (meter1 === null) meter1 = 'null';
         temp1 = data.features[1].attributes.Temperature;
         let date1 = new Date(data.features[1].attributes.Timestamp);
         time1 = date1.getDate()+
                 "/"+(date1.getMonth()+1)+
                 "/"+date1.getFullYear()+
                 " "+date1.getHours()+
                 ":"+date1.getMinutes();

         meter2 = data.features[2].attributes.MeterReading;
         if (meter2 === null) meter2 = 'null';
         temp2 = data.features[2].attributes.Temperature;
         let date2 = new Date(data.features[2].attributes.Timestamp);
         time2 = date2.getDate()+
                 "/"+(date2.getMonth()+1)+
                 "/"+date2.getFullYear()+
                 " "+date2.getHours()+
                 ":"+date2.getMinutes();

         meter3 = data.features[3].attributes.MeterReading;
         if (meter3 === null) meter3 = 'null';
         temp3 = data.features[3].attributes.Temperature;
         if (temp3 === null) temp3 = 'null';
         let date3 = new Date(data.features[3].attributes.Timestamp);
         time3 = date3.getDate()+
                 "/"+(date3.getMonth()+1)+
                 "/"+date3.getFullYear()+
                 " "+date3.getHours()+
                 ":"+date3.getMinutes();                       

         console.log('data:', data);      
       }
    };
    request.send();
    return {
      meter0,
      temp0,
      time0,
      meter1,
      temp1,
      time1,
      meter2,
      temp2,
      time2,
      meter3,
      temp3,
      time3                  
    };
};

function GetAPI() {
        let data = {};
        const request = new XMLHttpRequest();
        request.open('GET', 'https://services2.arcgis.com/iLWAxhpxafhOza2U/arcgis/rest/services/IoT_Sensors_to_Sensus/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json',false);
        request.onreadystatechange = function() {
          if (this.readyState === 4) {
             const body = this.responseText;
             data = JSON.parse(body);
             console.log('data:', data.features);      
           }
        };
        request.send();
        return data.features;
        // let data = Get_API_Water();
        // console.log('in data', data);
    };
    