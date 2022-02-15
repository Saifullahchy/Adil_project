const currentMapLan = 90.38493083631546;
const currentMapLen = 23.762049884900904;

// const currentLocation = 


        bkoigl.accessToken = 'Mjc4OTpSSlJZMlZVNlE3' // required
       const map = new bkoigl.Map({
            container: 'map',
            center: [ currentMapLan, currentMapLen ],
            zoom: 15
        })
// 23.762049884900904, 90.38493083631546
map.on('load', () => {
    const marker = new bkoigl.Marker({ draggable: true })
        .setLngLat([ currentMapLan,  currentMapLen ])
        .addTo(map)
})
