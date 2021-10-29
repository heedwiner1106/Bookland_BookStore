var form = document.querySelector('.create');
var createUser = async (e) => {
  e.preventDefault();

  const data = {
    name: form.name.value,
  }


  await fetch('http://localhost:3000/users', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json'}

  })


  window.location.replace('/FE/BooksListView_Sidebar.html');
}

form.addEventListener('submit', createUser);
