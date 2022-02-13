
        bkoigl.accessToken = 'Mjc4OTpSSlJZMlZVNlE3' // required
        new bkoigl.Map({
            container: 'map',
            center: [ 90.38493083631546, 23.762049884900904 ],
            zoom: 15
        })
// 23.762049884900904, 90.38493083631546
        map.on('load', () => {
            const marker = new bkoigl.Marker({ draggable: true })
                .setLngLat([ 90.3938010872331, 23.821600277500405 ])
                .addTo(map)
        })
