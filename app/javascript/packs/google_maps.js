window.initMap = function () {
  const event = new Event('google-maps-callback'); 
  window.dispatchEvent(event); 
};