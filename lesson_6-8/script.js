var arr = [];

async function Get(ID) {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${ID}`
  )
  return response.json();
}

async function result() {
  let ID = document.getElementById('number_id').value;
  let btn = document.getElementById('Get');
  btn.style.backgroundColor = 'grey' 
  btn.innerHTML = 'Loading...' 
  let data = await Get(ID);
  const name = data.name
  const email = data.email
  const phone = data.phone;

  // Дані існують?
  if (name !== undefined){ 
    document.getElementById("name").innerHTML = `${name}`;
    document.getElementById("email").innerHTML = `${email}`;
    document.getElementById("phone").innerHTML = `${phone}`;
    localStorage(ID, name)
    btn.style.backgroundColor = '#9B59B6' 
    btn.innerHTML = 'Get' 
  }else{
    btn.style.backgroundColor = 'grey' 
    btn.innerHTML = 'Get'
  }

}


function Save() {
  let res = document.getElementById('res');
  res.innerHTML ='';
  arr.forEach((e, i) => {
    res.innerHTML += `${e}`;
    res.innerHTML += "<img src='delete.png' onclick='deleteTex(" + i + ")'>"
    res.innerHTML += "</br>";
  });
}

function localStorage(id, name) {
  let a = `${id}. ${name}`
  arr.push(a);
}

function deleteTex(i) {
  arr.splice(i, 1);
  Save();
}


