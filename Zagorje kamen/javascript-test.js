//Javascript test

$(document).ready(function(){
    $("#proizvodi").hide();
    $("#kontakt").hide();

$("#triggerIndex").click(function(){
     var target = $(this).data("target"); 
     $("#proizvodi").hide();
     $("#kontakt").hide();
     $(target).show();
    });

    $("#triggerProizvodi").click(function(){
     var target = $(this).data("target"); 
     $("#pocetna").hide();
     $("#kontakt").hide();
     $(target).show();
    });
    
    $("#triggerKontakt").click(function(){
     var target = $(this).data("target"); 
     $("#pocetna").hide();
     $("#proizvodi").hide();
     $(target).show();

     initMap();
/*
     function loadApi() {
  google.load("visualization", "1", {"initMap" : pageLoaded});
}
*/

    });
});


function initMap() {
                var uluru = {lat: 46.332236, lng: 16.144392};
                var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: uluru
                });
                var marker = new google.maps.Marker({
                position: uluru,
                map: map
                });
                };