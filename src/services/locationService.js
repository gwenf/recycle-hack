export function getCurrentLocation(){
    new Promise(function(resolve, reject) {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(resolve);
        }
        else {
            reject(Error("Browser doesn't support location service"));
        }
    });
}