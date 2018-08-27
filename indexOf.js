var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function _indexof(index) {
    for (var i = 0; i < arr.length; i++) {
        var b = arr[i];
        if (b === index) {
            console.log(i);
            break;
        } else {
            console.log("Введенная строка не найдена в массиве, проверьте ввод.");
        }
    }
}
_indexof(4);
console.log(arr.indexOf(4));