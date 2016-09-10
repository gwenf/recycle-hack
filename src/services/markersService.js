export function getMarkers(){
    return new Promise(function(resolve, reject) {

        const markers = [{
            latitude: 40.4049599,
            longitude: -86.9282559
        }];

        if (markers.length > 0) {
            resolve(markers);
        }
        else {
            reject(Error("Browser doesn't support location service"));
        }
    });
}