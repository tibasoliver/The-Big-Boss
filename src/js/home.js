const change = document.getElementById('card-fliping');
const img = document.getElementById('img-product');
const title = document.getElementById('title');
const price = document.getElementById('price');
const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const button = document.getElementById('button');
let t = 0;
let time = setTimeout(function(){ change_start() }, 5000);
let now = localStorage.getItem('now');
if (now == null) {
    localStorage.setItem('now', 1);
    now = localStorage.getItem('now');
}
switch(now) {
    case '1':
        img.setAttribute('src', '/src/img/categories/sport/sport_01.png');
        title.innerHTML='Bicicleta Urbana';
        price.innerHTML='¥ 696,59 ou US$ 100,00'
        break;
    case '2':
        img.setAttribute('src', '/src/img/categories/cooker/cooker_01.png');
        title.innerHTML='Fogão Inox';
        price.innerHTML='¥ 452,79 ou US$ 65,00'
        break;
    case '3':
        img.setAttribute('src', '/src/img/categories/clothes/clothes_01.png');
        title.innerHTML='Tênis Casual';
        price.innerHTML='¥ 55,73 ou US$ 8,00';
        break;
    case '4':
        img.setAttribute('src', '/src/img/categories/phone/phone_01.png');
        title.innerHTML='Computador Desktop';
        price.innerHTML='¥ 689,63 ou US$ 99,00';
        break;
}

function change_start() {
    change.style.transform='rotateY(360deg)';
    prev.style.pointerEvents='none';
    next.style.pointerEvents='none';
    button.style.pointerEvents='none';
    now = localStorage.getItem('now');
    switch(now) {
        case '1':
            localStorage.setItem('now', 2);
            break;
        case '2':
            localStorage.setItem('now', 3);
            break;
        case '3':
            localStorage.setItem('now', 4);
            break;
        case '4':
            localStorage.setItem('now', 1);
            break;
    }
    setTimeout(function(){ new_ad() }, 700);
}

function change_ad(v) {
    clearTimeout(time);
    if (v === 0) {
        t = 1;
        change.style.transform='rotateY(-360deg)';
    }
    else {
        t = 0;
        change.style.transform='rotateY(360deg)';
    }
    prev.style.pointerEvents='none';
    next.style.pointerEvents='none';
    now = localStorage.getItem('now');
    switch(now) {
        case '1':
            if (t === 0) {
                localStorage.setItem('now', 2);
            }
            else {
                localStorage.setItem('now', 4);
            }
            break;
        case '2':
            if (t === 0) {
                localStorage.setItem('now', 3);
            }
            else {
                localStorage.setItem('now', 1);
            }
            break;
        case '3':
            if (t === 0) {
                localStorage.setItem('now', 4);
            }
            else {
                localStorage.setItem('now', 2);
            }
            break;
        case '4':
            if (t === 0) {
                localStorage.setItem('now', 1);
            }
            else {
                localStorage.setItem('now', 3);
            }
            break;
    }
    setTimeout(function(){ new_ad() }, 700);
}

function new_ad() {
    now = localStorage.getItem('now');
    switch(now) {
        case '1':
            img.setAttribute('src', '/src/img/categories/sport/sport_01.png');
            title.innerHTML='Bicicleta Urbana';
            price.innerHTML='¥ 696,59 ou US$ 100,00'
            break;
        case '2':
            img.setAttribute('src', '/src/img/categories/cooker/cooker_01.png');
            title.innerHTML='Fogão Inox';
            price.innerHTML='¥ 452,79 ou US$ 65,00'
            break;
        case '3':
            img.setAttribute('src', '/src/img/categories/clothes/clothes_01.png');
            title.innerHTML='Tênis Casual';
            price.innerHTML='¥ 55,73 ou US$ 8,00';
            break;
        case '4':
            img.setAttribute('src', '/src/img/categories/phone/phone_01.png');
            title.innerHTML='Computador Desktop';
            price.innerHTML='¥ 689,63 ou US$ 99,00';
            break;
    }
    setTimeout(function(){ to_zero() }, 900);
}

function to_zero() {
    change.style.transitionDuration='0s';
    change.style.transform='rotateY(0)';
    setTimeout(function(){ to_reset() }, 100);
}

function to_reset() {
    change.style.transitionDuration='1.6s';
    next.style.pointerEvents='auto';
    prev.style.pointerEvents='auto';
    button.style.pointerEvents='auto';
    time = setTimeout(function(){ change_start() }, 5000);
}

