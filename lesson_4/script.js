const name_pizza =["Paperoni","Hawaiian","Five cheese",'Carbonara','Tuscany']
const size = {"small":1, 
            "midle":1.3, 
            "big":1.4}
const tupe_dough =["thin", "standart"]
const price_small_pizza = {'Paperoni': 130,
                        'Hawaiian': 115,
                        'Five cheesse': 121,
                        'Carbonara': 135,
                        'Tuscany': 118,
}

const obj = {}

let br_str = (a) => { 
  while (typeof a !== "string") {
  break    
 }
 return true
}

let price_pizza = (pizza,size,price) =>{

  let your_pizza = prompt ("Choose pizza:",)
  if(br_str(your_pizza)){
    obj.yourPizza = your_pizza
  }
  
  let size_pizza = prompt ("Choose pizza size:",) 
  if (br_str(size_pizza)){
    obj.sizeYourPizza = size_pizza
  }

  if(pizza.includes(your_pizza)) {
    if(size[size_pizza] !== undefined){
      return price[your_pizza] * size[size_pizza] 
    }  
  }
}

obj.priseYourPizza = price_pizza(name_pizza,size,price_small_pizza);

let your_tupe_dought = prompt("Choose dought:",)
if (br_str(your_tupe_dought)) {
    obj.yourTupeDought = your_tupe_dought
}
console.log(obj);