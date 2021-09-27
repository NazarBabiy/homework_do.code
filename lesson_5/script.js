 function Get() {
  let ID = document.getElementById('ID').value;
  if (ID>0 && ID<=10){
  Data(ID)
button()
}
}


function button() {
  var change = document.getElementById("get_s").value;
  if (change.value == "GET"); {
    change.value = "Loading..."
  } {
    change.value = "GET";
  }
}

async function Data(ID){
  
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${ID}`
  )
  const data = response.json();
  
  const name = data.name;
  const email = data.email;
  const phone = data.phone; 
   document.getElementById('result').innerHTML = `<b>Name:</b> ${name} <br>
                                                    <b>Email:</b> ${email} <br> 
                                                    <b>phone:</b> ${phone} <br>`;

  
}



  



