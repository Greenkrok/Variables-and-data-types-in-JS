// Создадим шесть переменных, в каждой из которых будет один из шести типов данных;
// Выводим их значение в alert;
// Выводим объекты в консоль.

var string = "abc";
var number = 123;
var boolean = true;
var variableUndefined;
var variableNull = null;
var object = {
    firstName: "Ilya",
    lastName: "Zharkevich",
    age: 26,
    adult: true,
    contacts: {
        city: "Minsk",
        tel: 375291111111
    }
};

alert(
    'string = ' + string + `\n` +
    'number = ' + number + `\n` +
    'boolean = ' + boolean + `\n` +
    'variableUndefined = ' + variableUndefined + `\n` +
    'variableNull = ' + variableNull + `\n` +
    'object = ' + object
    );

console.log(object)
console.log(object.firstName, object['lastName'], object['contacts'].tel)
