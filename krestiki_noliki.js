var line1 = [1, 2, 3];
var line2 = [1, 2, 3];
var line3 = [1, 2, 3];
var random = 0;

function create_game() {
    for (var i = 0; i < line1.length; i++) {
        random = Math.random();
        if (random > 0.5) {
            line1[i] = 'X';
        } else if (random < 0.5) {
            line1[i] = 'O';
        }
    }
    for (var i = 0; i < line2.length; i++) {
        random = Math.random();
        if (random > 0.5) {
            line2[i] = 'X';
        } else if (random < 0.5) {
            line2[i] = 'O';
        }
    }
    for (var i = 0; i < line3.length; i++) {
        random = Math.random();
        if (random > 0.5) {
            line3[i] = 'X';
        } else if (random < 0.5) {
            line3[i] = 'O';
        }
    }
    console.log(line1);
    console.log(line2);
    console.log(line3);
}

function check_game() {
    if (line1[0] === 'X' &&
        line1[1] === 'X' &&
        line1[2] === 'X' ||
        line2[0] === 'X' &&
        line2[1] === 'X' &&
        line3[2] === 'X' ||
        line3[0] === 'X' &&
        line3[1] === 'X' &&
        line3[2] === 'X' ||
        line1[0] === 'X' &&
        line2[1] === 'X' &&
        line3[2] === 'X' ||
        line1[2] === 'X' &&
        line2[1] === 'X' &&
        line3[0] === 'X' ||
        line1[0] === 'X' &&
        line2[0] === 'X' &&
        line3[0] === 'X' ||
        line1[1] === 'X' &&
        line2[1] === 'X' &&
        line3[1] === 'X' ||
        line1[2] === 'X' &&
        line2[2] === 'X' &&
        line3[2] === 'X') {
        console.log("X - WIN")
    } else if (line1[0] === 'O' &&
        line1[1] === 'O' &&
        line1[2] === 'O' ||
        line2[0] === 'O' &&
        line2[1] === 'O' &&
        line3[2] === 'O' ||
        line3[0] === 'O' &&
        line3[1] === 'O' &&
        line3[2] === 'O' ||
        line1[0] === 'O' &&
        line2[1] === 'O' &&
        line3[2] === 'O' ||
        line1[2] === 'O' &&
        line2[1] === 'O' &&
        line3[0] === 'O' ||
        line1[0] === 'O' &&
        line2[0] === 'O' &&
        line3[0] === 'O' ||
        line1[1] === 'O' &&
        line2[1] === 'O' &&
        line3[1] === 'O' ||
        line1[2] === 'O' &&
        line2[2] === 'O' &&
        line3[2] === 'O') {
        console.log("O - WIN")
    } else {
        console.log("Ничья");
    }
}

create_game()
check_game()