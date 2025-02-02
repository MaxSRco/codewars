function camelize(str) {

    let arr = str.split('-');
    let result = [];
    arr.map(item => {
        item = item.charAt(0).toUpperCase() + item.slice(1);
        result.push(item);
    })
    // result = result.join('');
    // result = result.charAt(0).toLowerCase() + result.slice(1);
    return result.join('');
}

console.log(camelize('-webkit-transition'));