// model
let counter = 0;

const addButton = document.getElementById('increment');
const removeButton = document.getElementById('decrement');

const counterElement = document.getElementById('number');

// controllers
addButton.addEventListener('click', function(){
    const newValue = increment();
    counterElement.innerHTML = newValue;
})

removeButton.addEventListener('click', function(){
    const newValue = decrement();
    counterElement.innerHTML = newValue;
})



function increment(){
    counter += 1;

    return counter;
}

function decrement(){
    if(counter === 0) return 0;
    counter -= 1;

    return counter;
}


// view = html


// minst 3 typer enhetstester av funksjonene


// TEST1: når jeg kaller increment() skal counter øke med 1
// TEST2: når jeg kaller decrement() skal counter reduseres med 1
// TEST3: når jeg kaller decrement() skal counter ikke kunne gå under 0