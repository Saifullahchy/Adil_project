const api_KEY = 'Mjc4OTpSSlJZMlZVNlE3';

// 23.76244773181037, 90.38476808411826
const currentMapLon =  90.38476808411826;
const currentMapLat = 23.76244773181037;

//23.77368000882191, 90.42446233993964 mohakhali
// 23.762155442445902, 90.384927483916 accigone office
// 23.762120056279528, 90.38494288035577

const startTripLon = 90.38494288035577;
const startTripLat = 23.762120056279528;
const endTripLon = 90.42446233993964;
const endTripLat = 23.77368000882191;
// 23.777824599341365, 90.40571256931142

const currentMapLoc = document.getElementById('currentLocation');
const currentVehicleLocation = document.getElementById('current_vehicle_location');

const endLocation = document.getElementById('End-Location');

const reverseGeoApiUrl = `https://barikoi.xyz/v1/api/search/reverse/${api_KEY}/geocode?longitude=${currentMapLon}&latitude=${currentMapLat}&district=true&post_code=true&country=true&sub_district=true&union=true&pauroshova=true&location_type=true&division=true&address=true&area=true`;
const startGeoApiUrl = `https://barikoi.xyz/v1/api/search/reverse/${api_KEY}/geocode?longitude=${startTripLon}&latitude=${startTripLat}&district=true&post_code=true&country=true&sub_district=true&union=true&pauroshova=true&location_type=true&division=true&address=true&area=true`;
const reverseGeoApiUrlEndPosition = `https://barikoi.xyz/v1/api/search/reverse/${api_KEY}/geocode?longitude=${endTripLon}&latitude=${endTripLat}&district=true&post_code=true&country=true&sub_district=true&union=true&pauroshova=true&location_type=true&division=true&address=true&area=true`


const makeApiRequest = async (url) =>{
    const res = await fetch(url);
    if(!res.ok){
        const message = `Error : ${res.status}`;
        throw new Error(message);
    }
    const data = await res.json();
    return data;
};

const getAddress = () => {
    
    makeApiRequest(reverseGeoApiUrl).then((res) => {
        console.log(res);
        let address = res;
       
       currentVehicleLocation.innerHTML = address.place.address;

    });
};

const startLocation  = () => {
    makeApiRequest(reverseGeoApiUrl).then((res) => {
        let startLoc = res;
        currentMapLoc.innerHTML = startLoc.place.address;
    })
}

const endAddress = () => {
    makeApiRequest(reverseGeoApiUrlEndPosition).then((res) => {
        let endPosition = res;
        endLocation.innerHTML = endPosition.place.address;

    }) 
}

getAddress();
startLocation();
endAddress();



let currentPos = document.getElementById('currentLocation');


        bkoigl.accessToken = api_KEY  // required
       const map = new bkoigl.Map({
            container: 'map',
            center: [ currentMapLon, currentMapLat ],
            zoom: 15
        })
// 23.762049884900904, 90.38493083631546
map.on('load', () => {
    const marker = new bkoigl.Marker({ draggable: true })
        .setLngLat([ currentMapLon,  currentMapLat ])
        .addTo(map)
})
