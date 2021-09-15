function arr_change() {

    // Приймає значення двох масивів 
    const arr1 = ['Car','Mango','Table','Mouse'];
    const arr2 = ['Hand','Mango','Phone','Mouse'];

    // Об'єднює масиви
    const arr_sum = [...arr1,...arr2];

    // Перевіряє на унікальність елементів
    let arr = Array.from(new Set(arr_sum));

    let result = []

    // Перетворює елементи: всі букви великі значення та пишуться ззаду на перед
    for (let i = 0; i<arr.length; i++){
      result.push(String(arr[i]).split("").reverse().join("").toUpperCase())
    }

    // Останнє переворення з Array у String та сполученням
    return  finish = result.join(' - ')

}

// Виклик функції
console.log(arr_change());

