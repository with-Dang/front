export function formatPrice(price: number) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function calculatePrice(discountRate: number, price: number) {
  return (price * ((100 - discountRate) / 100)).toFixed(0);
}
