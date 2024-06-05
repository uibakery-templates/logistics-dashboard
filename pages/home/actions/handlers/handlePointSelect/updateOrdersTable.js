let orders = {{actions.fetchOrders.data}};
const courierId = {{state.selectedCourier.id}}
if (courierId) {
  orders = orders.filter((order) => order.courier_id === courierId);
}
return orders;