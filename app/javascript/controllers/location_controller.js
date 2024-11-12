import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["field", "map", "address", "latitude", "longitude", "locationName"];

  connect() {
    if (this.hasFieldTarget) {
      this.initAutocomplete();
    }
    this.initializeMaps();
  }

  initializeMaps() {
    const defaultLatitude = 40.7128; 
    const defaultLongitude = -74.0060;

    setTimeout(() => {
      this.mapTargets.forEach(mapElement => {
        const latitude = parseFloat(mapElement.dataset.locationLatitude) || defaultLatitude;
        const longitude = parseFloat(mapElement.dataset.locationLongitude) || defaultLongitude;

        if (!isNaN(latitude) && !isNaN(longitude)) {
          this.createMap(mapElement, latitude, longitude);
        } else {
          console.warn('Invalid latitude or longitude for map initialization');
        }
      });
    }, 500);
  }

  initAutocomplete() {
    this.autocomplete = new google.maps.places.Autocomplete(this.fieldTarget);
    this.autocomplete.addListener("place_changed", this.handlePlaceChanged.bind(this));
  }

  handlePlaceChanged() {
    const place = this.autocomplete.getPlace();

    if (place.geometry) {
      const latitude = place.geometry.location.lat();
      const longitude = place.geometry.location.lng();

      this.latitudeTarget.value = latitude;
      this.longitudeTarget.value = longitude;
      this.locationNameTarget.value = place.formatted_address;

      this.addressTarget.textContent = place.formatted_address;

      this.updateMap(place.geometry.location);
    }
  }

  createMap(mapElement, latitude, longitude) {
    const location = new google.maps.LatLng(latitude, longitude);

    this.map = new google.maps.Map(mapElement, {
      center: location,
      zoom: 15,
    });

    new google.maps.Marker({
      position: location,
      map: this.map,
    });
  }

  updateMap(location) {
    this.map.setCenter(location);
    this.map.setZoom(15);

    new google.maps.Marker({
      position: location,
      map: this.map,
    });
  }
}
