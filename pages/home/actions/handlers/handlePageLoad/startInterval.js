const numberOfDeliveries = 5;
function updateLocationScope() {
  let tableOffset = numberOfDeliveries;
  const interval = setInterval(() => {
    {{actions.fetchLocationData.trigger({numberOfDeliveries, tableOffset})}};
    tableOffset = tableOffset < (60 * numberOfDeliveries) ? tableOffset + numberOfDeliveries : 0;
  }, 10000);
}
updateLocationScope();
return {{data}};
