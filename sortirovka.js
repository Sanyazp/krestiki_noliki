var arr = [1, 2, 3, 4, 10, 6, 7, 8, 9, 5];
var c = arr.length - 1;





function _sort(array, how) {
    if (how === 1) {
        for (var i = 0; i < c; i++) {
            for (var x = 0; x < c - i; x++)
                if (array[x] > array[x + 1]) {
                    var max = array[x];
                    array[x] = array[x + 1];
                    array[x + 1] = max;
                }
        }
        console.log(array);
    } else if (how === -1) {
        for (var i = 0; i < c; i++) {
            for (var x = 0; x < c - i; x++)
                if (array[x] < array[x + 1]) {
                    var max = array[x];
                    array[x] = array[x + 1];
                    array[x + 1] = max;
                }
        }
        console.log(array);
    } else {
        console.log('Неверно указан массив который нужно отсортировать, или метод сортировки (1) или (-1) без скобок');
    }
}

_sort(arr, 1);