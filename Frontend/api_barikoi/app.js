const SOURCE_LONGITUDE = 90.39534587;
const SOURCE_LATITUDE = 23.86448886;
const TARGET_LONGITUDE = 90.3673;
const TARGET_LATITUDE = 23.8340;
const API_KEY = 'Mjc4OTpSSlJZMlZVNlE3';
const distance =  fetch(`https://barikoi.xyz/v1/api/distance/${API_KEY}/${SOURCE_LONGITUDE},${SOURCE_LATITUDE}/${TARGET_LONGITUDE},${TARGET_LATITUDE}`)
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))

console.log(distance);

const Start = fetch(`https://barikoi.xyz/v1/api/search/reverse/geocode/server/${API_KEY}/place?longitude=${SOURCE_LONGITUDE}&latitude=${SOURCE_LATITUDE}&district=true&post_code=true&country=true&sub_district=true&union=true&pauroshova=true&location_type=true&division=true&address=true&area=true`)
.then(response => response.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response))

const END = fetch(`https://barikoi.xyz/v1/api/search/reverse/geocode/server/${API_KEY}/place?longitude=${TARGET_LONGITUDE}&latitude=${TARGET_LATITUDE}&district=true&post_code=true&country=true&sub_district=true&union=true&pauroshova=true&location_type=true&division=true&address=true&area=true`)
.then(response => response.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response))