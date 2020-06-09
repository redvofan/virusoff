var marker_color = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";


var locations = [
    {
        "Nombre": "GUADALUPE",
        "Titulo":"ESTADIO BBVA",
        "Direccion": "Pablo Livas # 2301 Tolteca",
        "Ciudad": "Guadalupe, Nuevo León.",
        "Tel": "812138-0571",
        "LatLng":{
            lat:25.6699213,
            lng:-100.2380485
        }
    },
    {
        "Nombre":"MONTERREY",
        "Titulo":"RUIZ CORTINES",
        "Direccion":"Ruiz Cortines # 1904-L2 Garza Nieto ",
        "Ciudad":"Monterrey, Nuevo León.",
        "Tel":"812138-0571",
        "LatLng":{
            lat:25.7043225,
            lng:-100.3317717
        }
    },

    {
        "Nombre":"MONTERREY",
        "Titulo":"BUENOS AIRES",
        "Direccion":"Chapultepec # 906 Buenos Aires",
        "Ciudad":"Monterrey, Nuevo León.",
        "Tel":"812138-0571",
        "LatLng":{
            lat:25.6670021,
            lng:-100.2904709
        }
    },

    {
        "Nombre":"MONTERREY",
        "Titulo":"CUMBRES",
        "Direccion":"Pedro Infante # 6556 Mirador de las Mitras",
        "Ciudad":"Monterrey, Nuevo León.",
        "Tel":"812138-0571",
        "LatLng":{
            lat:25.7443269,
            lng:-100.3907138
        }
    },   
    {
        "Nombre":"ESCOBEDO",
        "Titulo":"ESCOBEDO",
        "Direccion":"Raúl Salinas # 622 Quinto Centenario",
        "Ciudad":"Escobedo, Nuevo León.",
        "Tel":"812138-0571",
        "LatLng":{
            lat:25.7922461,
            lng:-100.3327589
        }
    },   
    {
        "Nombre":"APODACA",
        "Titulo":"APODACA",
        "Direccion":"Afganistán #545 Prados de la Cieneguita",
        "Ciudad":"Apodaca, Nuevo León",
        "Tel":"812138-0571",
        "LatLng":{
            lat:25.7815042,
            lng:-100.2526055
        }
    },
    { 
        "Titulo":"SANTA CATARINA",
        "Nombre":"SANTA CATARINA",
        "Direccion":"Pioneros de Rochdale #199 Cooperativa la unión",
        "Ciudad":"Santa Catarina, nuevo Leon ",
        "Tel":"812138-0571",
        "LatLng":{
            lat:25.6882209,
            lng:-100.4546725
        }
    },
    {
        "Nombre":"SANTA CATARINA",
        "Titulo":"MANUEL ORDOÑEZ",
        "Direccion":"MANUEL ORDOÑEZ PLAZA 2203 LOCAL 1, ECHEVERRIA",
        "Ciudad":"SANTA CATARINA, NUEVO LEON MEXICO",
        "Tel":"812138-0571",
        "LatLng":{
            lat:25.6789019,
            lng:-100.481286
        }
    },
    { 
        "Nombre":"Puerto Vallarta",
        "Titulo":"IMPERCAUCHO LAS JUNTAS",
        "Direccion":"Carr. Ixtapa Las Palmas L- 104 Las Juntas",
        "Ciudad":"Puerto Vallarta, Jalisco.",
        "Tel":"812138-0571",
        "LatLng":{
            lat:20.6980426,
            lng:-105.2384862
        }
    },   
    {
        "Nombre":"Puerto Vallarta",
        "Titulo":"IMPERCAUCHO FCO. VILLA",
        "Direccion":"Francisco Villa # 465 Fracc. Versalles",
        "Ciudad":"Puerto Vallarta, Jalisco.",
        "Tel":"01 (81) 2138-0571",
        "LatLng":{
            lat:20.6304693,
            lng:-105.2271284
        }
    },   
    {
        "Nombre":"Puerto Vallarta",
        "Titulo":"IMPERCAUCHO GRANDES LAGOS",
        "Direccion":"Ave. Grandes Lagos # 269-A Residencial Fluvial Vallarta",
        "Ciudad":"Puerto Vallarta, Jalisco.",
        "Tel":"812138-0571",
        "LatLng":{
            lat:20.6513779,
            lng:-105.2259481
        }
    },   
    {
        "Nombre":"NUEVO VALLARTA",
        "Titulo":" IMPERCAUCHO NUEVO VALLARTA",
        "Direccion":"Carr. Puerto Vallarta – Tepic # 1515 Las Jarretaderas Bahía de Banderas",
        "Ciudad":"Nuevo Vallarta, Nayarit.",
        "Tel":"812138-0571",
        "LatLng":{
            lat:20.7043215,
            lng:-105.272874
        }
    },
    {
        "Nombre":"NAYARIT",
        "Titulo":"IMPERCAUCHO BUCERIAS",
        "Direccion":"HEROES DE NACOZARI 266, BUCERIAS",
        "Ciudad":"NAYARIT",
        "Tel":"01 (81) 2138-0571",
        "LatLng":{
            lat:20.7532278,
            lng:-105.3314578
        }
    },
    {
        "Nombre":"Mezcales",
        "Titulo":"IMPERCAUCHO MEZCALES",
        "Direccion":"Carretera a San Juan #200 Las parotas. ",
        "Ciudad":"Mezcales, Nayarit.",
        "Tel":"01 (81) 2138-0571",
        "LatLng":{
            lat:20.7332525,
            lng:-105.2792825
        }
    }
];


var arrayMarkers = [];

$(document).ready(function(){

    for (let index = 0; index < locations.length; index++) {
        let element_loc = locations[index];
        let cadena_html = '<span onclick="SetMap('+index+')" class="map_select_cursor"><span class="circle">'+(index+1)+'</span> <span id="map_'+(index+1)+'">'+element_loc.Titulo+'</span> </span> <br>';
        $("#ubicaciones_mapa_click").append(cadena_html);
    }
});

var map, infoWindow;
function initMap() {
    infoWindow = new google.maps.InfoWindow({
        size: new google.maps.Size(150, 50)
    });

    var latlng = {lat: 25.668191, lng: -100.2466512};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: latlng
    });


    for (let index = 0; index < locations.length; index++) {
        let markerTmp = CreateMarkers(locations[index], index);
        arrayMarkers.push(markerTmp);
    }
}

function CreateMarkers(json_data, index){
    var marker = new google.maps.Marker({
        position: json_data.LatLng,
        map: map,
        icon: marker_color,
        title: json_data.Titulo,
        id: index
    });

    marker.addListener("click", function(){
        SetMap(index);
    });

    return marker;
}

function SetMap(index){
    let markerTmpSelected = arrayMarkers[index];
    let infoMarkerSelected = locations[index];


    map.panTo(infoMarkerSelected.LatLng);
    map.setZoom(18);

    var id_selected = "map_"+index;
    infoWindow.setContent("<b>"+infoMarkerSelected.Titulo+"</b>");


    infoWindow.open(map, markerTmpSelected);

    $("#direccion_nombre").html(infoMarkerSelected.Nombre);
    $("#direccion_mapa").html(infoMarkerSelected.Direccion + "<br>" + infoMarkerSelected.Ciudad);
    $("#direccion_tel").html(infoMarkerSelected.Tel);
    $("#direccion_titulo").html(infoMarkerSelected.Titulo);


    for (let indexLoop = 0; indexLoop < arrayMarkers.length; indexLoop++) {
        if (indexLoop == index) {
            $("#map_"+ (indexLoop+1)).addClass("map_selected");
        }
        else{
            $("#map_"+ (indexLoop+1)).removeClass("map_selected");
        }
    }
}