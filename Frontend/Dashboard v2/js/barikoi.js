const api_KEY = 'Mjc4OTpSSlJZMlZVNlE3';


const currentMapLon = 90.40581243181647;
const currentMapLat = 23.778169136666268;

// 23.778169136666268, 90.40581243181647 mohakhali
// 23.762155442445902, 90.384927483916 accigone office
// 23.762120056279528, 90.38494288035577

const startTripLon = "";
const startTripLat = "";
const endTripLon = 90.38494288035577;
const endTripLat = 23.762120056279528;
// 23.777824599341365, 90.40571256931142

const currentMapLoc = document.getElementById('currentLocation');
const currentVehicleLocation = document.getElementById('current_vehicle_location');

const endLocation = document.getElementById('End-Location');

const reverseGeoApiUrl = `https://barikoi.xyz/v1/api/search/reverse/${api_KEY}/geocode?longitude=${currentMapLon}&latitude=${currentMapLat}&district=true&post_code=true&country=true&sub_district=true&union=true&pauroshova=true&location_type=true&division=true&address=true&area=true`;

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
       currentMapLoc.innerHTML = address.place.address;
       currentVehicleLocation.innerHTML = address.place.address;

    });
};

const endAddress = () => {
    makeApiRequest(reverseGeoApiUrlEndPosition).then((res) => {
        let endPosition = res;
        endLocation.innerHTML = endPosition.place.address;

    }) 
}

getAddress();
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
