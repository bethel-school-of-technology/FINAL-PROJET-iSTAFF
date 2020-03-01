var app = {
    // Application Constructor
    initialize: function() {
        document.getElementById("btn").addEventListener('click', app.takePhoto);
        document.addEventListener(getLocation);
    },

    
    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
       document.addEventListener('deviceready', this.onDeviceReady.bind(this), false)
    },

        //picture taking 

    takePhoto: function() {
            console.log("Button Clicked and Location Found!");
            navigator.camera.getPicture(app.onSuccess, app.onFail, { quality: 50,
            destinationType: Camera.DestinationType.DATA_URL })
    },
               
    onSuccess: function(imageData, position) {
            var image = document.getElementById('photo');
            image.src = "data:image/jpeg;base64," + imageData;
            
        },
        
    onFail: function(message, error) {
            alert('Failed because: ' + message);
    },
  
};


  //get location
app.initialize();

var Latitude = undefined;
var Longitude = undefined;


function getLocation() {
    console.log('getlocation called')
    navigator.geolocation.getCurrentPosition(locationSuccess, locationError, {enableHighAccuracy: true});
}

var locationSuccess = function(position) {
    console.log('locationSuccess called - latitude: ' + position.coords.latitude + ', longitude ' + position.coords.longitude);
    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;
};

function locationError(error) {
    console.log(
        'code: ' + errror.code + '\n' + 'message: ' + error.message + '\n'
    );
}