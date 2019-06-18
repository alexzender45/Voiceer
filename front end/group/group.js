const select = document.getElementById('select');
const grid = document.getElementById('grid');
const show = document.getElementById('display');
const fade1 = document.getElementsByClassName('fade1');
const tag = document.getElementsByClassName('tag');

select.style.display = "none";


let check =[]
for(let i = 0; i < fade1.length; i++){
    check.push(fade1[i]);
}

console.log(check);
//for search

function display(){
    let input = document.getElementById('form').value;
    let x = document.getElementsByClassName('voiceer');
    for(let i = 0; i < x.length; i++){
        if(!x[i].innerHTML.toLowerCase().includes(input.toLowerCase())){
            x[i].style.display = "none";
            check[i].style.display = "none";
        }else{
            x[i].style.display = "block"; 
            check[i].style.display = "list-item";
            
        }
    }
}


//toggle for 1

function toggle1() {
    if(grid.style.display === "block"){
        grid.style.display = "block";
        select.style.display = "none";
        show.style.display = "flex";
    }else{
        grid.style.display = "block";
        select.style.display = "none";
        show.style.display = "flex";
    }
}

//toggle for 2

function toggle2() {
    if(select.style.display === "none"){
        grid.style.display = "none";
        select.style.display = "block";
        show.style.display = "none";
    }  
}


// for btn
 function btn1(){
 document.getElementById('form').innerHTML = tag; 
 }

