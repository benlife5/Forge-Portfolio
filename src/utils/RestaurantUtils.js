const calcCenter = (locations) => {
  let topLeft = locations[0].geometry.location;
  let bottomRight = locations[0].geometry.location;
  for (let i = 0; i < locations.length; i++) {
    if (
      locations[i].geometry.location.lat < topLeft.lat ||
      locations[i].geometry.location.lng > topLeft.lng
    ) {
      topLeft = locations[i].geometry.location;
    }
    if (
      locations[i].geometry.location.lat > bottomRight.lat ||
      locations[i].geometry.location.lng < bottomRight.lng
    ) {
      bottomRight = locations[i].geometry.location;
    }
  }

  const lat = (bottomRight.lat - topLeft.lat) / 2 + topLeft.lat;
  const lng = (bottomRight.lng - topLeft.lng) / 2 + topLeft.lng;
  return { lat, lng };
};

export { calcCenter };
