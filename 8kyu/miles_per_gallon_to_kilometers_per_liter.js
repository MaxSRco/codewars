// Sometimes, I want to quickly be able to convert miles per imperial gallon (mpg) into kilometers per liter (kpl).
//
//     Create an application that will display the number of kilometers per liter (output) based on the number of miles
//     per imperial gallon (input).
//
//     Your answer should be accurate within 0.01 kpl.
//
//     Some useful associations:
//
//     1 Imperial Gallon = 4.54609188 litres
//     1 Mile = 1.609344 kilometres

function converter (mpg) {
    let kpl = mpg * 0.354; //mpg --> kpl
    kpl = parseFloat(kpl.toFixed(2));//round to 2 decimal places and return the number
    return kpl;
}

