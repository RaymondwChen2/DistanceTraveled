# README


## Overview
[DistanceTraveled](https://distancetraveled.herokuapp.com/#/) is a workout app where you can track how far you've traveled for each iof your workouts.

## Technologies

### Frontend
* React
* Redux
* Javasript
* Google maps API

### Backend
* Ruby on Rails
* Ajax
* PostgreSQL
* Google Maps API library

## Features
The user can add markers to the map where it will have polylines connecting each consecutive marker forming a route. User can also undo markers is they want to change up their route.
```
updateMarkers(mappings){
    this.map.addListener('click', (e)=>{
      this.createNewMarker(e.latLng)
      this.path.push(e.latLng)
    })
  };
  createNewMarker(location){
    const marker = new google.maps.Marker({
      position: location,
      map: this.map
    })
    this.markers.push(marker)
  }
  setMapOnAll(map){
    for (let i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    }
  }
  clearMarkers(){
    this.setMapOnAll(null)
  }

  undoMarker(){
    if (this.markers.length > 0){
      (this.markers.pop()).setMap(null)
      this.path.pop()
    }
```

## In-Progress
* More functions to mapping
   * The user can save the route they've created
   * Route display the distance of the route 
* Comment/ liking
   * Users will be able to like and comment on their friend's routes.
* Friending
  * Will be able to look up a user and add them as a friend.
