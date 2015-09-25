/* Hamburger Menu Function */

$(document).ready(function(){
    
    /* Desktop Services Menu */
    $('#services-list-link').on('click', function() {
        $('#services-list').slideToggle("fast");
    });
    
    /* Mobile Hamburger Menu */
    $('#hamburger-btn').click(function() {
    $(this).toggleClass('expanded').siblings('#hamburger-list').slideToggle("fast");
    });

    /* Testimonial Slider Menu */
    $('.slider-btn').click(function(){
        $('.slider-btn').removeClass('slider-btn-active');
        $(this).toggleClass('slider-btn-active');
        var slider = $(this).parent().attr('href');
        $('.slider-quote').removeClass('slider-quote-active');
        $(slider).addClass('slider-quote-active');
    });
    
    /* Upload File Events */
    $('#uploadFile').click(function(){
        $('#uploadSpan').click();
    });
    $('#uploadFile').keydown(function(){
        $('#uploadSpan').click();
    });
    $('#uploadBtn').on('change', function(){
        var uploadVal = $('#uploadBtn').val();
        $('#uploadFile').val(uploadVal);
    });

});

/* Google Map */

function initialize() {
    var myLatLng = {lat: 45.519669, lng: -123.112469}
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
        center: myLatLng,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions)
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'NW HomeSavers'
    });
    }
 
    
google.maps.event.addDomListener(window, 'load', initialize);


/* Change classes */

function changeClass() {
    document.getElementById('id').classList.toggle('class');
}
