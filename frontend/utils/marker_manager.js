
export default class MarkerManager {
  constructor(map, waypoints=[]){
    this.map = map;
    this.waypts = waypoints;
    this.distance = ''
    this.summaryPanel = document.getElementById("directions-panel")
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    if(this.waypts.length > 0){
      this.calculateAndDisplayRoute(this.directionsService, this.directionsRenderer)
      this.directionsRenderer.setMap(this.map)
    }
    this.updateMarkers()
  }
  
  undoMarker(){
    if (this.waypts.length > 1){
      this.waypts.pop()
      this.calculateAndDisplayRoute(this.directionsService, this.directionsRenderer)
    } else {
      this.clearAll();
    }
  }

  clearAll(){
    this.waypts = [];
    this.directionsRenderer.setMap(null);
  }

  reverseRoute(){
    if (this.waypts.length > 1){
      this.waypts.reverse();
      this.calculateAndDisplayRoute(this.directionsService, this.directionsRenderer);
    }

  }
  
  updateMarkers(){
    this.map.addListener('click', (e)=>{
      this.waypts.push({location:{lat: e.latLng.lat(), lng: e.latLng.lng()}, stopover: false})
      this.directionsRenderer.setMap(this.map)
      this.calculateAndDisplayRoute(this.directionsService, this.directionsRenderer)
    })
  };


  
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
          this.summaryPanel.innerHTML = "";
          
          // For each route, display summary information.
          for (let i = 0; i < route.legs.length; i++) {
            const routeSegment = i + 1;
            this.distance = route.legs[i].distance.text
            this.summaryPanel.innerHTML += 'Distance: ' + route.legs[i].distance.text + '<br>'
          }
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
      );
    }
  }
  