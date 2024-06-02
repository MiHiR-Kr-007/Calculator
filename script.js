const all_clear = document.querySelector('.ac');
const delete_btn = document.querySelector('.del');
const number_btn = document.querySelectorAll('.num');
const operation_btn = document.querySelectorAll('.ope');
const equal_btn = document.querySelector('.equal');
const prev = document.querySelector('.pre_data');
const current = document.querySelector('.curr_data');


function handleKeyPress(event) {

    const keyPressed = event.key;

    if (!isNaN(keyPressed) || ['+', '-', '*', '/', '.'].includes(keyPressed)) {
        if (current.innerHTML === '0') {
            current.innerHTML = ''; 
        }
        current.innerHTML += keyPressed;
    } else if ( keyPressed === '=') {
        try {
            prev.innerHTML = current.innerHTML;
            current.innerHTML = eval(current.innerHTML);
        } catch (error) {
            current.innerHTML = 'Error';
        }
    } else if (keyPressed === 'Backspace') {
        current.innerHTML = current.innerHTML.slice(0, -1);
    } else if (keyPressed === 'Escape') {
        prev.innerHTML = '';
        current.innerHTML = '0';
    }
}
document.addEventListener('keydown', handleKeyPress);


number_btn.forEach(e => {
    e.addEventListener('click', () => {
        if (current.innerHTML === '0') {
            current.innerHTML = ''; 
        }
        current.innerHTML += e.innerHTML;
    });
});

operation_btn.forEach((e) => {
    e.addEventListener('click', () => {
        current.innerHTML += e.innerHTML;
    });
});

delete_btn.addEventListener('click', () => {
    current.innerHTML = current.innerHTML.slice(0, -1);
});

equal_btn.addEventListener('click', () => {
    try {
        prev.innerHTML = current.innerHTML;
        current.innerHTML = eval(current.innerHTML);
    } catch (error) {
        current.innerHTML = 'Error';
    }
});

all_clear.addEventListener('click', () => {
    prev.innerHTML = '';
    current.innerHTML = '0';
});
