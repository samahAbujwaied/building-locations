document.addEventListener("turbo:load", function() {
  const locationInput = document.getElementById("location-search");

  if (locationInput) {
    const autocomplete = new google.maps.places.Autocomplete(locationInput, {
      types: ["geocode"], // Limit suggestions to geographical locations
      componentRestrictions: { country: "us" } // Restrict to a specific country (optional)
    });

    // Set up event listener for when a place is selected
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        // Extract data from selected location if necessary
        const latitude = place.geometry.location.lat();
        const longitude = place.geometry.location.lng();
        console.log("Selected location:", place.formatted_address, latitude, longitude);

        // Optionally update hidden fields or perform an action
        document.getElementById("latitude").value = latitude;
        document.getElementById("longitude").value = longitude;
      }
    });
  }
});
