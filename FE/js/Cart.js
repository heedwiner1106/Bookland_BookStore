

const renderOrder = async () =>{

  let uri = 'http://localhost:3000/orderItems?_sort=price&_order=desc';
  const res = await fetch(uri);
  const orderItems = await res.json();
  console.log(orderItems);
  var data = document.querySelector('.data');
  var totalPrice = document.querySelector('.total-price');
  console.log(data);
  var template = '';
  var total = 0;
  orderItems.forEach(orderItem => {
    template += `
    <tr>
      <td class="info-product"><img src="${orderItem.productImg}" alt=""><p>${orderItem.productName}</p></td>
      <td>${orderItem.productPrice}</td>
      <td>
        <div class="btn-qty btn-qty-bonus">
        <button>-</button>
        <input type="text" value="1">
        <button>+</button>
        </div>
      </td>
      <td>${orderItem.productPrice}</td>
      <td>
        <button type="" class="delete-button"><i class="far fa-trash-alt"></i><span>Detete</span></button>
      </td>
    </tr>
    `
    total += parseInt(orderItem.productPrice);
  });
  console.log(total);
  data.innerHTML = template;
  totalPrice.innerHTML = total
  }
  window.addEventListener('DOMContentLoaded', () => renderOrder() );
