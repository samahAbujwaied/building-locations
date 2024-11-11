window.initMap = function () {
  console.log("initMap function loaded!");
  const event = new Event('google-maps-callback'); 
  window.dispatchEvent(event); 
};