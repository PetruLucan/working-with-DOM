// Get by ID -- only one element
function log(a) {
    console.log(a);
}

log(document.getElementById('searchInput'));

// Lesson 1: carefull where you include the JS file. The DOM might
// not be loaded... 😞

// Get by class -- returns a list
log(document.getElementsByClassName('btn bum'));

/* REZOLVARE*/
var names = [
    'Pava',
    'Lucian',
    'Petru',
    'Diana',
    'Alex',
    'Rucs',
    'Florin',
    'Culita',
    'Alexandru',
    'Costel',
    'Bobita',
    'Bob',
    'Bubu'
];

// Pas 1: punem mana pe elementele necesare
var myInput = document.getElementById('searchInput');
var myList = document.getElementById('nameList');
var myReset = document.getElementById('resetBtn');
var myName = document.getElementById('nameInput');
var myPass = document.getElementById('passInput');
// var myButton = document.getElementById('deleteButton');

log(7)
for (var i = 0; i < names.length; i++) {
    // Le adaug in HTML pe fiecare, pe rand
    myList.innerHTML += '<li>' + names[i] + '</li>';
}

// Pas 2: ne legam la eventul de scris ('input')
myInput.addEventListener('input', onType);

myReset.addEventListener('click', onReset);

function onReset() {
    myName.value = null;
    myPass.value = null;
};
var timeoutID
function onType() {
    clearTimeout(timeoutID)
    // input.value -- asa pun mana pe ce se afla scris intr-un input

    //var filteredNames = search(myInput.value, names);<--apel la server

    // Sterg ce se afla in elementul <ol> din HTML
    myList.innerHTML = '';
    timeoutID = setTimeout(function () {

        var filteredNames = search(myInput.value);

        for (var i = 0; i < filteredNames.length; i++) {
            // Le adaug in HTML pe fiecare, pe rand
            myList.innerHTML += '<li>' + filteredNames[i] + '</li>';
        }

    }, 1000);
}
//dc n-a mers pe functie?
function search(name) {
    var rez = [];
    for (var i = 0; i < names.length; i++) {
        if (names[i].startsWith(name)) {
            rez.push(names[i]);
        }
    }
    console.log("sdkfjs")
    return rez;
}

function delay(fn, nr) {
    setTimeout(fn, nr)

}
function sum(a, b) {
    return a + b;
}
var y = lap(function () {
    return sum(4, 5)
}, 2000)



function print() {
    console.log("food")
}


function lap(fn, nr) {
    return setInterval(fn, nr)

}
//lap(function () { log(2) }, 1500)

delay(function () {
    clearInterval(y)
}, 3000);

//Sa se apeleze functia din nr("timp" in "timp") de "max" ori.

function stopAfter1(fn, nr, max) {
    var i = 1;
    while (i <= max) {
        delay(fn, nr * i);
        i++
    }
}

stopAfter2(function () {
    console.log("orice")
}, 1000, 5)

function stopAfter2(fn, nr, max) {

    var intervalId = setInterval(fn, nr,);
    setTimeout(function () {
        clearTimeout(intervalId)
    }, max * nr + 1);
}



function stopAfter3(fn, nr, max) {
    var count = 0;
    var intervalId = setInterval(function () {
        fn();
        count++
        if (count === max) {
            clearInterval(intervalId);}
        }, nr);
}


