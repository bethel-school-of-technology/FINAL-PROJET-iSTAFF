var app = {
    // Application Constructor
    initialize: function() {
        document.getElementById("btn").addEventListener('click', app.takePhoto);
        document.addEventListener("deviceready", onDeviceReady, false);
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
            console.log("Button Clicked!");
            navigator.camera.getPicture(app.onSuccess, app.onFail, { quality: 50,
            destinationType: Camera.DestinationType.DATA_URL })
        
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        },
               
    onSuccess: function(imageData, position) {
            var image = document.getElementById('photo');
            image.src = "data:image/jpeg;base64," + imageData;
            alert('Latitude: '          + position.coords.latitude          + '\n' +
                  'Longitude: '         + position.coords.longitude         + '\n' +
                  'Timestamp: '         + new Date(position.timestamp)      + '\n');
        },
        
    onFail: function(message, error) {
            alert('Failed because: ' + message);
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        },
        
};


app.initialize();


  //get location
  
var latitude = undefined;
var longitude = undefined;