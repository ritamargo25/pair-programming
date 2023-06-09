// В этой задаче вам нужно проанализировать данные — вычислить повторы каждого слова.
// Создайте функцию getRepeats с одним параметром. В этот параметр будет приходить массив данных.
// Функция должна возвращать объект, в котором указано сколько раз каждое слово встречается в массиве.
// */

// ["Василий","Пётр","Иннокентий","Пётр","Иван","Василий"]
// Ожидаемый результат: 
// {"Василий":2,"Пётр":2,"Иннокентий":1,"Иван":1}

// ["привет","пока","прощай","пока","здравствуйте","прощай"]
// Ожидаемый результат: 
// {"привет":1,"пока":2,"прощай":2,"здравствуйте":1}

// ["картошка","картошка","кофе","торт","салат","кофе","торт","картошка"]
// Ожидаемый результат: 
// {"картошка":3,"кофе":2,"торт":2,"салат":1}

// ["работа","работа","работа","работа","работа"]
// Ожидаемый результат: 
// {"работа":5}

function getRepeats(arr) {
    let counter = {}
    for (let i = 0; i < arr.length; i++) {
        if (counter[arr[i]]) {
            counter[arr[i]]++;
        } else {
            counter[arr[i]] = 1;
        }
    }
    return counter
}
const data = ["Василий", "Пётр", "Иннокентий", "Пётр", "Иван", "Василий"];
const counter = getRepeats(data);
console.log(counter)

