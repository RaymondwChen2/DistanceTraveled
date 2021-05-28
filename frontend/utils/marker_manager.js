
export default class MarkerManager {
  constructor(map){
    this.map = map;
    // this.markers = [];
    this.waypts = [];
  }

  updateMarkers(){
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    this.map.addListener('click', (e)=>{
      // this.createNewMarker(e.latLng)
      this.waypts.push({location:{lat: e.latLng.lat(), lng: e.latLng.lng()}, stopover: true})
      console.log(this.waypts)
      this.calculateAndDisplayRoute(directionsService, directionsRenderer)
      directionsRenderer.setMap(this.map)
    })
  };

  // createNewMarker(location){
  //   const marker = new google.maps.Marker({
  //     position: location,
  //     map: this.map
  //   })
  //   this.markers.push({location: {lat : marker.position.lat(), lng : marker.position.lng()}, stopover: true})
  // }

  // setMapOnAll(map){
  //   for (let i = 0; i < this.markers.length; i++) {
  //     this.markers[i].setMap(map);
  //   }
  // }

  calculateAndDisplayRoute(directionsService, directionsRenderer) {
    const waypts = this.markers
    const origin = `${this.waypts[0].location.lat}, ${this.waypts[0].location.lng}`
    const destination = `${this.waypts[this.waypts.length - 1].location.lat}, ${this.waypts[this.waypts.length - 1].location.lng}`
    
      directionsService.route(
        {
          origin: origin,
          destination: destination,
          waypoints: this.waypts,
          optimizeWaypoints: false,
          travelMode: google.maps.TravelMode.WALKING,
        },
        (response, status) => {
          if (status === "OK" && response) {
            directionsRenderer.setDirections(response);
            const route = response.routes[0];
            const summaryPanel = document.getElementById("directions-panel");
            summaryPanel.innerHTML = "";
    
            // For each route, display summary information.
            for (let i = 0; i < route.legs.length; i++) {
              // const routeSegment = i + 1;
              const routeSegment = i + 0;
              summaryPanel.innerHTML +=
                "<b>Route Segment: " + routeSegment + "</b><br>";
              summaryPanel.innerHTML += route.legs[i].start_address + " to ";
              summaryPanel.innerHTML += route.legs[i].end_address + "<br>";
              summaryPanel.innerHTML += route.legs[i].distance.text + "<br><br>";
            }
          } else {
            window.alert("Directions request failed due to " + status);
          }
        }
      );
    }



  clearMarkers(){
    this.setMapOnAll(null)
  }

  undoMarker(){
    if (this.markers.length > 0){
      (this.markers.pop()).setMap(null)
      this.path.pop()
    }
  }
}