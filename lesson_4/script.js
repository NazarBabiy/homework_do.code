const obj_pizza = {};
let order = [];

class Order {
  constructor(pizza, size, dought, price) {
    this.pizza = pizza;
    this.size = size;
    this.dought = dought;
    this.price = price;
  }

  getOrder() {
    return `<b>Pizza:</b> ${this.pizza}, <b>Size:</b> ${this.size}, <b>Dought:</b> ${this.dought}, <b>Price:</b> ${this.price} `;
  }

}

function add() {
  let your_pizza = document.getElementById('pizza').value;
  let size_pizza = document.getElementById('size').value;
  let dought = document.getElementById('type_dought').value;

  switch (your_pizza) {
    case "Paperoni":
      price_pizza = 130
      break;
    case "Hawaiia":
      price_pizza = 115
      break;
    case "Five cheese":
      price_pizza = 121
      break;
    case "Carbonara":
      price_pizza = 135
      break;
    case "Tuscany":
      price_pizza = 118
      break;
    default:
      price_pizza = 100;
  }
  switch (size_pizza) {
    case "small":
      size = 1
      break;
    case "normal":
      size = 1.3
      break;
    case "big":
      size = 1.4
      break;
    default:
      size = 1
  }

  const price = price_pizza * size;
  let p = new Order(your_pizza, size_pizza, dought, price);
  order.push(p);
  showOrder();
}

function showOrder() {
  let res = document.getElementById('result');
  res.innerHTML = '';
  final_price = 0;
  order.forEach((e, i) => {
    res.innerHTML += (i + 1) + ". " + e.getOrder();
    res.innerHTML += "</br>";
    final_price += e.price;
  });
  res.innerHTML += `<b>Sum:</b> ${final_price} `;
}


function clearOder() {
  order = [];
  showOrder();
}