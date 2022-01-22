const SOURCE_LONGITUDE = 90.39534587;
const SOURCE_LATITUDE = 23.86448886;
const TARGET_LONGITUDE = 90.3673;
const TARGET_LATITUDE = 23.8340;
const API_KEY = 'Mjc4OTpSSlJZMlZVNlE3';
const distance =  fetch(`https://barikoi.xyz/v1/api/distance/${API_KEY}/${SOURCE_LONGITUDE},${SOURCE_LATITUDE}/${TARGET_LONGITUDE},${TARGET_LATITUDE}`)
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))

// document.getElementById('distance').innerHTML = distance.Distance;

// function appendData(data) {
//   var mainContainer = document.getElementById("distance");
//   for (var i = 0; i < data.length; i++) {
//     var h4 = document.createElement("h4");
//     h4.innerHTML = 'Distance: ' + data[i].Distance;
//     mainContainer.appendChild(div);
//   }
// }

const Start = fetch(`https://barikoi.xyz/v1/api/search/reverse/geocode/server/${API_KEY}/place?longitude=${SOURCE_LONGITUDE}&latitude=${SOURCE_LATITUDE}&district=true&post_code=true&country=true&sub_district=true&union=true&pauroshova=true&location_type=true&division=true&address=true&area=true`)
.then(response => response.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response))

const END = fetch(`https://barikoi.xyz/v1/api/search/reverse/geocode/server/${API_KEY}/place?longitude=${TARGET_LONGITUDE}&latitude=${TARGET_LATITUDE}&district=true&post_code=true&country=true&sub_district=true&union=true&pauroshova=true&location_type=true&division=true&address=true&area=true`)
.then(response => response.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response))

// let data = {
//     "api_key": API_KEY,
//     "source": "23.746086,90.37368",
//     "destination": "23.746214,90.371654",
//     "profile": "car",
//     "geo_points": [
//         {"id": 1, "point": "23.746086,90.37368"},
//         {"id": 2, "point": "23.74577,90.373389"},
//         {"id": 3, "point": "23.74442,90.372909"},
//         {"id": 4, "point": "23.743961,90.37214"}
//       ]
//    };
//       fetch("http://barikoi.xyz/v2/api/route/optimized",
//     {
//        headers: {
//         'Content-Type': 'application/json'
//        },
//         method: "POST",
//         body: JSON.stringify(data)
//     })
//     .then(response => response.json())
//     .catch(error => console.error('Error:', error))
