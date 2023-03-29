import './style.css';
import { add } from './modules/add.js';
import { event, adde } from './modules/edit.js';
import { remove } from './modules/remove.js';

let book = [];
if(localStorage.getItem('used') === null){
    book = [];
}else{
    book = JSON.parse(localStorage.getItem("used"))
}

let input = document.querySelector("input")


const flex = document.querySelector('.list');

for(let i = 0; i < book.length; i++){
  flex.innerHTML += `<div class="flex-list"><input type="checkbox"><div class="value-list"> ${book[i].discription} </div> <a class="right" href="#"><i class="fa-sharp fa-solid fa-ellipsis-vertical"></i></a><p class="index">${i+1}</p></div>`;
}


let container = document.querySelector(".container")


const value = document.querySelector(".value")

const btn = document.createElement("button");
btn.classList.add("enter");

const btn2 = document.createElement("button");
btn2.classList.add("edit");


value.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector(".enter").click();
    value.value = ""
  }
});


const clear = document.createElement('div');
clear.classList.add('clear');
clear.innerHTML = 'Clear Completed';
container.appendChild(clear);
container.appendChild(btn)

document.addEventListener("keypress", (event) => {
  
  if (event.key === "Enter") {
    event.preventDefault();
    adde(event)
    document.querySelector(".edit").click();
    
    
  }
});

btn.addEventListener("click", add)

document.addEventListener("click", event)

document.addEventListener("click", remove)



btn2.addEventListener("click", adde)




