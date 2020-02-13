const img = document.getElementById('img-product');
const title = document.getElementById('title');
const frete = document.getElementById('frete');
const dolar = document.getElementById('price-d');
const rem = document.getElementById('price-r');
let now = localStorage.getItem('now');
if (now == null) {
    localStorage.setItem('now', 1);
    now = localStorage.getItem('now');
}

switch(now) {
    case '1':
        img.setAttribute('src', '/src/img/categories/sport/sport_01.png');
        title.innerHTML='Bicicleta Urbana';
        frete.innerHTML='Valor do Frete: ¥ 140,00 ou US$ 20,00'
        rem.innerHTML='Preço Final em Remimbi: ¥ 836,00';
        dolar.innerHTML='Preço Final em Dólar: US$ 120,00';
        break;
    case '2':
        img.setAttribute('src', '/src/img/categories/cooker/cooker_01.png');
        title.innerHTML='Fogão Inox';
        frete.innerHTML='Valor do Frete: ¥ 70,00 ou US$ 10,00'
        rem.innerHTML='Preço Final em Remimbi: ¥ 522,00';
        dolar.innerHTML='Preço Final em Dólar: US$ 75,00';
        break;
    case '3':
        img.setAttribute('src', '/src/img/categories/clothes/clothes_01.png');
        title.innerHTML='Tênis Casual';
        frete.innerHTML='Valor do Frete: Gratuito'
        rem.innerHTML='Preço Final em Remimbi: ¥ 55,00';
        dolar.innerHTML='Preço Final em Dólar: US$ 8,00';
        break;
    case '4':
        img.setAttribute('src', '/src/img/categories/phone/phone_01.png');
        title.innerHTML='Computador Desktop';
        frete.innerHTML='Valor do Frete: ¥ 35,00 ou US$ 5,00'
        rem.innerHTML='Preço Final em Remimbi: ¥ 725,00';
        dolar.innerHTML='Preço Final em Dólar: US$ 104,00';
        break;
}