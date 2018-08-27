var a = ['Slovo1', 'Slovo2', 'Slovo3', 'Slovechko4', 'asdasdasdad', 'asdasdasd'];
var empty = '';
var razdel = ', ';

for (var i = 0; i < a.length; i++) {
    empty = empty + razdel + a[i];
}
empty = '\b' + '\b' + empty;
console.log(empty);