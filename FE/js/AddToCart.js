

const renderItems = async () =>{

  let uri = 'http://localhost:3000/orderItems?_sort=price&_order=desc';
  const res = await fetch(uri);
  const products = await res.json();
  console.log(products[1].productId);
  let uri1 = 'http://localhost:3000/products/'+products.productId;
  }

  window.addEventListener('DOMContentLoaded', () => renderItems() );
