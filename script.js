//Fazendo modal/janela
function acao() {
    let modal = document.querySelector('.modal')
    modal.style.display = 'block';
}
function fechar() {
    let modal = document.querySelector('.modal')
    modal.style.display = 'none';
}
//
function acao2() {
    let modal = document.querySelector('.modal2')
    modal.style.display = 'block';
}
function fechar2() {
    let modal = document.querySelector('.modal2')
    modal.style.display = 'none';
}
//
function acao3() {
    let modal = document.querySelector('.modal3')
    modal.style.display = 'block';
}
function fechar3() {
    let modal = document.querySelector('.modal3')
    modal.style.display = 'none';
}
//Saldo
alert("*Primeiro Acesso* Você ganhou 30 reais em saldo para comprar tickets");
const btn = document.querySelector('.btn-modal-finalizar');
const btn2 = document.querySelector('.btn-modal-finalizar2');
const btn3 = document.querySelector('.btn-modal-finalizar3');
btn.addEventListener('click',function(){
    alert("Compra Realizada com Sucesso");
    document.getElementById("idSaldo").textContent = "10";
});
btn2.addEventListener('click',function(){
    alert("Compra Realizada com Sucesso");
    document.getElementById("idSaldo").textContent = "20";
});
btn3.addEventListener('click',function(){
    alert("Compra Realizada com Sucesso");
    document.getElementById("idSaldo").textContent = "10";
});
//sair
const sair = document.querySelector('.texto-sair');
sair.addEventListener('click',function(){
    alert("Deslogado com Sucesso");
    document.getElementById("idSaldo").textContent = "0";
});
