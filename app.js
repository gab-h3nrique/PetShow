let lojas = document.querySelector('.card').style.display = "block";
let produtos = document.querySelector('.cardProduto').style.display = 'none';

const segundaPagina = () => {
    document.querySelector('.card').style.display = "none";
    document.querySelector('.cardProduto').style.display = 'block';
    document.querySelector('.cardProduto').style.display = 'grid';
}
const voltar = () => {
    document.querySelector('.card').style.display = "block";
    document.querySelector('.cardProduto').style.display = 'none';
}