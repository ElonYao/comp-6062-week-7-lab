
let inputNumber = document.querySelector('#numberInput');
inputNumber.addEventListener('input', function() {
    if (inputNumber.value >=10 || inputNumber.value <= -10) {
        alert('Number should be between -10 and 10');
    }
});

const fruit={
    name: 'Grape',
    color: 'red',
    taste: 'sweet'
};

document.querySelector('#name').innerHTML = `Name: ${fruit.name}`;
document.querySelector('#color').innerHTML = `Color: ${fruit.color}`;
document.querySelector('#taste').innerHTML = `Taste: ${fruit.taste}`;

