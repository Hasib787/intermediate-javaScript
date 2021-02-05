var name = "kuddus";
function add(num1, num2) {
     let result = num1 + num2;
    function double(num) {
        return num * 2;
    }
    var total = double(result);
    return total;
}

const sum = add(10, 20);
console.log(sum);
console.log(name);
