// LOOP (ADDITION TO 9)
// ADDITION FOR 1 
var i;
var msg = '';
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
var countLength = num.length;
var countNum = 1;

for (i = 1; i < countLength; i++) {
    countNum = (i + 1);
    msg += i + ' + 1 = ';
    msg += num[i] + '<br>';
}
document.getElementById('adds1').innerHTML = msg;

// ADDITION FOR 3(DO.. WHILE
var ts = 1;
var msg1 = '';

// Store 5 times table in a variable
do {
    msg1 += ts + ' + 3 = ' + (ts + 3) + '<br>';
    ts++;
} while (ts < 13);

document.getElementById('adds2').innerHTML = msg1;

// ADDITION FOR 3(DO.. WHILE
var ts = 1;
var msg1 = '';

// Store 5 times table in a variable
do {
    msg1 += ts + ' + 5 = ' + (ts + 5) + '<br>';
    ts++;
} while (ts < 13);

document.getElementById('adds3').innerHTML = msg1;

// ADDITION FOR 5 (WHILE)
var t = 1;
var msg2 = '';
var msgs;

// Store 5 times table in a variable
while (t < 13) {
    msg2 += t + ' + 7 = ' + (t + 7) + '<br>';
    t++;
}

document.getElementById('adds4').innerHTML = msg2;

// ADDITION FOR 5 (WHILE)
var t = 1;
var msg2 = '';

// Store 5 times table in a variable
while (t < 13) {
    msg2 += t + ' + 9 = ' + (t + 9) + '<br>';
    t++;
}

document.getElementById('adds5').innerHTML = msg2;


// LOOP (SUBTRACTION TO 9)
// SUBTRACTION FOR 1 
var i;
var msg = '';
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var countLength = num.length;
var countNum = 1;

for (i = 1; i < countLength; i++) {
    countNum = (i - 1);
    msg += i + ' - 1 = ' + countNum + '<br>';
}
document.getElementById('sub1').innerHTML = msg;

// SUBTRACTION FOR 3(DO.. WHILE
var ts = 1;
var msg1 = '';

// Store 5 times table in a variable
do {
    msg1 += ts + ' - 3 = ' + (ts - 3) + '<br>';
    ts++;
} while (ts < 13);

document.getElementById('sub2').innerHTML = msg1;

// SUBTRACTION FOR 5 (DO.. WHILE
var ts = 1;
var msg1 = '';

// Store 5 times table in a variable
do {
    msg1 += ts + ' - 5 = ' + (ts - 5) + '<br>';
    ts++;
} while (ts < 13);

document.getElementById('sub3').innerHTML = msg1;

// SUBTRACTION FOR 7 (WHILE)
var t = 1;
var msg2 = '';
var msgs;

// Store 5 times table in a variable
while (t < 13) {
    msg2 += t + ' - 7 = ' + (t - 7) + '<br>';
    t++;
}

document.getElementById('sub4').innerHTML = msg2;

// SUBTRACTION FOR 9 (WHILE)
var t = 1;
var msg2 = '';

// Store 5 times table in a variable
while (t < 13) {
    msg2 += t + ' - 9 = ' + (t - 9) + '<br>';
    t++;
}

document.getElementById('sub5').innerHTML = msg2;


// LOOP (MULTIPLICATION TO 9)
// MULTIPLICATION FOR 1 
var i;
var msg = '';
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var countLength = num.length;
var countNum = 1;

for (i = 1; i < countLength; i++) {
    countNum = (i * 1);
    msg += i + ' x 1 = ';
    msg += num[i] + '<br>';
}
document.getElementById('mul1').innerHTML = msg;

// MULTIPLICATION FOR 3(DO.. WHILE
var ts = 1;
var msg1 = '';

// Store 5 times table in a variable
do {
    msg1 += ts + ' x 3 = ' + (ts * 3) + '<br>';
    ts++;
} while (ts < 13);

document.getElementById('mul2').innerHTML = msg1;

// MULTIPLICATION FOR 5 (DO.. WHILE
var ts = 1;
var msg1 = '';

// Store 5 times table in a variable
do {
    msg1 += ts + ' x 5 = ' + (ts * 5) + '<br>';
    ts++;
} while (ts < 13);

document.getElementById('mul3').innerHTML = msg1;

// MULTIPLICATION FOR 7 (WHILE)
var t = 1;
var msg2 = '';
var msgs;

// Store 5 times table in a variable
while (t < 13) {
    msg2 += t + ' x 7 = ' + (t * 7) + '<br>';
    t++;
}

document.getElementById('mul4').innerHTML = msg2;

// MULTIPLICATION FOR 9 (WHILE)
var t = 1;
var msg2 = '';

// Store 5 times table in a variable
while (t < 13) {
    msg2 += t + ' x 9 = ' + (t * 9) + '<br>';
    t++;
}

document.getElementById('mul5').innerHTML = msg2;


// LOOP (DIVISION TO 9)
// DIVISION FOR 1 
var i;
var msg = '';
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var countLength = num.length;
var countNum = 1;

for (i = 1; i < countLength; i++) {
    countNum = (i / 1);
    msg += i + ' &#247 1 = ';
    msg += num[i] + '<br>';
}
document.getElementById('dvd1').innerHTML = msg;

// DIVISION FOR 3(DO.. WHILE
var ts = 1;
var msg1 = '';

// Store 5 times table in a variable
do {
    msg1 += ts + ' &#247 3 = ' + (ts / 3).toFixed(3) + '<br>';
    ts++;
} while (ts < 13);

document.getElementById('dvd2').innerHTML = msg1;

// DIVISION FOR 5 (DO.. WHILE
var ts = 1;
var msg1 = '';

// Store 5 times table in a variable
do {
    msg1 += ts + ' &#247 5 = ' + (ts / 5).toPrecision(3) + '<br>';
    ts++;
} while (ts < 13);

document.getElementById('dvd3').innerHTML = msg1;

// DIVISION FOR 7 (WHILE)
var t = 1;
var msg2 = '';
var msgs;

// Store 5 times table in a variable
while (t < 13) {
    msg2 += t + ' &#247 7 = ' + (t / 7).toFixed(3) + '<br>';
    t++;
}

document.getElementById('dvd4').innerHTML = msg2;

// DIVISION FOR 9 (WHILE)
var t = 1;
var msg2 = '';

// Store 5 times table in a variable
while (t < 13) {
    msg2 += t + ' &#247 9 = ' + (t / 9).toPrecision(3) + '<br>';
    t++;
}

document.getElementById('dvd5').innerHTML = msg2;