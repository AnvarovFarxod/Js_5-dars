/*
JSda HTML teglari bilan ishlash:
let headTag = document.head;
let bodyTag = document.body;
let havola = document.documentURI;
let formalar = document.forms;
let rasmlar = document.images;
let havolalar = document.links;
console.log(havolalar);
*/
/* Events in JS: onclick,ondblclick,onchange */

function meniBos(){
    alert("Siz tugmani bosdingiz!");
}
function meniIkkiMartaBos(){
    alert("Siz tugmani 2 marta bosdingiz!");
}
function tanlash(event){
    alert("Siz " + event.target.value + " mashinasini tanladingiz!");
}
function inputgaBosish(){
    console.log("Inputga bosildi!");
}
function inputdanChiqish(){
    console.log("Inputdan chiqildi!")
}
function yozish(event){
    console.log(event.target.value);
}
document.querySelector('.text').addEventListener('copy',function (event){
    console.log("Diqqat! Sizdan "+ event.target.value + " nomli fayl ko'chrilyapti!");
});
function harakatlanish(e){
    console.log(e.clientY,e.clientX);
}
function kirish(){
    alert("Hududga kirildi!");
}
function chiqish(){
    alert("Hudud tark etildi!");
}







