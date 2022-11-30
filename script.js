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
var saldo = document.getElementById('idSaldo');
saldo = 30;
var michael = document.querySelector('.btn-modal-finalizar');
michael = 20;
var queen = document.querySelector('.btn-modal-finalizar2');
queen = 10;
var anitta = document.querySelector('.btn-modal-finalizar3');
anitta = 20;
const btn = document.querySelector('.btn-modal-finalizar');
const btn2 = document.querySelector('.btn-modal-finalizar2');
const btn3 = document.querySelector('.btn-modal-finalizar3');
btn.addEventListener('click',function(){
    alert("Compra Realizada com Sucesso");
    saldo = saldo - 20;
    document.getElementById("idSaldo").textContent = saldo;
    if (saldo <= 0) {
        document.getElementById("idSaldo").textContent = "Sem Saldo";
        alert("Saldo Zero");
    }
});
btn2.addEventListener('click',function(){
    alert("Compra Realizada com Sucesso");
    saldo = saldo - 10;
    document.getElementById("idSaldo").textContent = saldo;
    if (saldo <= 0) {
        document.getElementById("idSaldo").textContent = "Sem Saldo";
        alert("Saldo Zero");
    }
});
btn3.addEventListener('click',function(){
    alert("Compra Realizada com Sucesso");
    saldo = saldo - 20;
    document.getElementById("idSaldo").textContent = saldo;
    if (saldo <= 0) {
        document.getElementById("idSaldo").textContent = "Sem Saldo";
        alert("Saldo Zero");
    }
});
//sair
const sair = document.querySelector('.botao-sair');
function redirecionar(params) {
    location.href = "index.html";
}
sair.addEventListener('click',function(){
    alert("Deslogado com Sucesso");
    document.getElementById("idSaldo").textContent = "0";
});
