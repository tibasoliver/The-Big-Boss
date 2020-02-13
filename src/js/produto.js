const img = document.getElementById('img-product');
const title = document.getElementById('title');
const frete = document.getElementById('frete');
const desc = document.getElementById('desc');
const category = document.getElementById('category');
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
        category.innerHTML='Esportes & Lazer';
        desc.innerHTML='Bicicleta Vermelha - Em ótima condição - 1 ano de uso';
        frete.innerHTML='Valor do Frete: ¥ 140,00 ou US$ 20,00';
        rem.innerHTML='Preço em Remimbi: ¥ 696,00 ';
        dolar.innerHTML='Preço em Dólar: US$ 100,00';
        break;
    case '2':
        img.setAttribute('src', '/src/img/categories/cooker/cooker_01.png');
        title.innerHTML='Fogão Inox';
        category.innerHTML='Eletro-Domésticos';
        desc.innerHTML='Fogão à Gás - 5 anos de uso - Uso residencial';
        frete.innerHTML='Valor do Frete: ¥ 70,00 ou US$ 10,00';
        rem.innerHTML='Preço em Remimbi: ¥ 452,00 ';
        dolar.innerHTML='Preço em Dólar: US$ 65,00';
        break;
    case '3':
        img.setAttribute('src', '/src/img/categories/clothes/clothes_01.png');
        title.innerHTML='Tênis Casual';
        category.innerHTML='Vestuário';
        desc.innerHTML='Tênis Polo - 18 meses de uso';
        frete.innerHTML='Valor do Frete: Gratuito';
        rem.innerHTML='Preço em Remimbi: ¥ 55,00 ';
        dolar.innerHTML='Preço em Dólar: US$ 8,00';
        break;
    case '4':
        img.setAttribute('src', '/src/img/categories/phone/phone_01.png');
        title.innerHTML='Computador Desktop';
        category.innerHTML='Celulares & Eletrônicos';
        desc.innerHTML='Computador Desktop - Recém formatado - 2 anos e meio de uso';
        frete.innerHTML='Valor do Frete: ¥ 35,00 ou  US$ 5,00';
        rem.innerHTML='Preço em Remimbi: ¥ 725,00';
        dolar.innerHTML='Preço em Dólar: US$ 104,00';
        break;
}