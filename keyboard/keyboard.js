let keys = document.querySelectorAll('.keys');
let body = document.querySelector('body');
let text_input = document.querySelector('.text');
let keyboard_wrapp = document.querySelector('.keyboard_wrapp');

for (let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}

window.addEventListener('keydown', function (e) {
    for (let i = 0; i < keys.length; i++) {
        if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.add('active')
        }
        else if (e.key == 'Backspace') {
            document.getElementById("backspace_key").classList.add('active')
        }
        else if (e.key == 'Enter') {
            document.getElementById("enter_key").classList.add('active')
        }
    }
})

window.addEventListener('keyup', function (e) {
    for (let i = 0; i < keys.length; i++) {
        if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.remove('active')
            keys[i].classList.add('remove')
            setTimeout(() => {
                keys[i].classList.remove('remove')
            }, 200)
        }
        else if (e.key == 'Backspace') {
            document.getElementById("backspace_key").classList.remove('active')
            document.getElementById("backspace_key").classList.add('remove')
            setTimeout(() => {
                keys[i].classList.remove('remove')
            }, 200)
        }
        else if (e.key == 'Enter') {
            document.getElementById("enter_key").classList.remove('active')
            document.getElementById("enter_key").classList.add('remove')
            setTimeout(() => {
                keys[i].classList.remove('remove')
            }, 200)
        }
    }
})

var keyStrokes = document.getElementsByClassName("keys");
for (var k = 0; k < keyStrokes.length; k++) {
    (function (index) {
        keyStrokes[index].addEventListener("click", function () {
            var clickedKey = keyStrokes[index].innerText;
            // alert("Clicked key: " + clickedKey);
            updateWithClick(clickedKey)
            keyStrokes[index].classList.add('active')

            //delay for removing colour
            setTimeout(function () {
                keyStrokes[index].classList.remove('active');
            }, 150);

        });
    })(k);
}