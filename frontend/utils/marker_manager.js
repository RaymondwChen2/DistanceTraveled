
export default class MarkerManager {
  constructor(map){
    this.map = map;
    this.waypts = [];
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();
  }

    
  undoMarker(){
      this.waypts.pop()
      this.directionsRenderer.setMap(this.map)
      this.calculateAndDisplayRoute(this.directionsService, this.directionsRenderer)
    }

  updateMarkers(){
    this.map.addListener('click', (e)=>{
      this.waypts.push({location:{lat: e.latLng.lat(), lng: e.latLng.lng()}, stopover: true})
      console.log(this.directionsService)
      this.directionsRenderer.setMap(this.map)
      this.calculateAndDisplayRoute(this.directionsService, this.directionsRenderer)
    })
  };


  // createNewMarker(location){
  //   const marker = new google.maps.Marker({
  //     position: location,
  //     map: this.map
  //   })
  //   this.waypts.push({location: {lat : marker.position.lat(), lng : marker.position.lng()}, stopover: true})
  // }

  calculateAndDisplayRoute(directionsService, directionsRenderer) {
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
              const routeSegment = i + 1;
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
  }

  
  
  // clearMarkers(){
  //   this.setMapOnAll(null)
  // }

// setMapOnAll(map){
//   for (let i = 0; i < this.waypts.length; i++) {
//     this.waypts[i].setMap(map);
//   }
// }



 
