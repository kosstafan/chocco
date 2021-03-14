(function () {
    let myMap;
    let zoom;


    if ($(window).width() <= 480) {
        zoom = 12;
    } else {
        zoom = 13;
    }

    $(window).resize(() => {
        if ($(window).width() <= 480) {
            zoom = 12;
        } else {
            zoom = 13;
        }
    });


    const init = () => {
        myMap = new ymaps.Map("map", {
            center: [56.866582, 53.209872],
            zoom: zoom,
            controls: [],
        });

        let coords = [
                [56.859484, 53.176862],
                [56.846717, 53.197888],
                [56.887275, 53.249778],
                [56.868083, 53.222445],
            ],
            myCollection = new ymaps.GeoObjectCollection({}, {
                draggable: false,
                iconLayout: 'default#image',
                iconImageHref: '/2020-11-23-web-chocco/images/svg/marker.svg',
                iconImageSize: [58, 73],
                iconImageOffset: [-29, -73]
            });

        for (let i = 0; i < coords.length; i++) {
            myCollection.add(new ymaps.Placemark(coords[i]));
        }

        myMap.geoObjects.add(myCollection);

        myMap.behaviors.disable('scrollZoom');
    };

    ymaps.ready(init);
})();