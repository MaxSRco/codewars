// Give you a function animal, accept 1 parameter: obj like this:
//
// {name:"dog",legs:4,color:"white"}
// and return a string like this:
//
// "This white dog has 4 legs."

function animal(obj){
    return  result = `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

console.log(animal({name:"dog",legs:4,color:"white"}));