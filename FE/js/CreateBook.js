var form = document.querySelector('.create');
var createProduct = async (e) => {
  e.preventDefault();

  const data = {
    name: form.name.value,
    description: form.body.value
  }


  await fetch('http://localhost:3000/products', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json'}
  })


  window.location.replace('/FE/BooksListView_Sidebar.html');
}

form.addEventListener('submit', createProduct);
