// Вывести в консоль все типы данных переменных, созданных в задании B

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

console.log(typeof string, typeof number, typeof boolean, typeof variableUndefined, typeof variableNull, typeof object)
