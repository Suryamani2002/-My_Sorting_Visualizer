
function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;

}


function disableSorting() {
    // const bubbling= document.querySelector("#id_bubble");
    // console.log("bubbling in the disable is= ",bubbling);
    document.querySelector("#id_bubble").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
}


function enableSorting() {
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;

}

function disableSizeSlider() {
    document.querySelector("#array_size").disabled = true;
}


function enableSizeSlider() {
    document.querySelector("#array_size").disabled = false;
}


function disableNewArrayBtn() {
    document.querySelector(".newArray").disabled = true;
}

function enableNewArrayBtn() {
    document.querySelector(".newArray").disabled = false;
}

// -----------------------For pause button-----------------------

var cancelExection = false;
const cancel = document.querySelector(".cancel");
cancel.addEventListener("click", function () {
    console.log("cancel has been pressed");
    cancelExection = true;
})

let ruko = parseInt(document.querySelector("#pauseIt").value);
console.log("value of the ruko is= ", ruko);
// let ruko=5000;

let pauseElement = document.querySelector("#pauseIt");
pauseElement.addEventListener("input", function () {
    ruko = pauseElement.value;
    console.log("pauseElement=", pauseElement.value);
    document.querySelector("#numeric").innerHTML = `${ruko/1000} sec`;


})
function cancelWait(milisec) {
    cancelExection = false;
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}

// ------- Adding sec to it





// -----------

// ----------------------------------------------

//
function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}


let arraySize = document.querySelector("#array_size");

arraySize.addEventListener('input', function () {
    console.log(" the size of the array is= ", arraySize.value);
    createNewArray(parseInt(arraySize.value));

});


// Default input for waitforme function (260ms)
let delay = 260;

// Selecting speed slider from DOM
let delayElement = document.querySelector('#speed_input');

// Event listener to update delay time 
delayElement.addEventListener('input', function () {
    console.log(delayElement.value, typeof (delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});



// create array to store random gnerated nunmbers
let array = [];
createNewArray();


const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function () {
    enableSorting();
    enableSizeSlider;
    createNewArray(arraySize.value)
});

function deleteArray() {
    const barDelete = document.querySelector("#bars");
    barDelete.innerHTML = ' ';
}

function createNewArray(arrayLength = 40) {
    deleteArray();
    console.log("arrayLength isss = ", arrayLength);
    array = [];
    for (let i = 0; i < arrayLength; i++) {
        array.push(Math.ceil(Math.random() * 100));
    }

    console.log(array);

    const bars = document.querySelector("#bars");

    for (let i = 0; i < arrayLength; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i] * 5}px`;
        bar.style.width = '200px';
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}


