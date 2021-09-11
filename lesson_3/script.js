function arr_change() {

    // Приймає значення двох масивів 
    const arr1 = ['Car','Mango','Table','Mouse'];
    const arr2 = ['Hand','Mango','Phone','Mouse'];

    // Об'єднює масиви
    const arr_sum = [...arr1,...arr2];

    // Перевіряє на унікальність елементів
    let arr = Array.from(new Set(arr_sum))

    let result = ''
    let result_1 = ''
    let result_0 =[]

    // Перетворює елементи: всі букви великі значення та пишуться заду на перед
    for (let i = 0; i<arr.length; i++){
        result = String(arr[i])
        result = result.split("").reverse().join("")
        result_1 = result.toUpperCase()
    
        result_0.push(result_1)
    }

    // Останнє переворення з Array у String та сполученням
     return  finish = result_0.join('-')

}

// Виклик функції
console.log(arr_change());
