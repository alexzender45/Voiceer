const top1 = document.getElementById('top1');
const top2 = document.getElementById('top2');
const top3 = document.getElementById('top3');
const hr1 = document.getElementById('hr1');
const hr2 = document.getElementById('hr2');
const hr3 = document.getElementById('hr3');
const longh4 = document.getElementById('longh4');
const test = document.getElementById('test');
// display none
hr2.style.display = "none";
hr3.style.display = "none";
console.log(test);
// function for toggle 1
function toggle1(){
    if(hr1 === "block"){
        hr2.style.display = "none";
        hr3.style.display = "none";
        hr1.style.display = "block";
        longh4.innerText = "videos (20)";
        
       
    }else{
        hr2.style.display = "none";
        hr3.style.display = "none";
        hr1.style.display = "block";
        longh4.innerText = "videos (20)";  
    }
}



// function for toggle 2
function toggle2(){
    if(hr2 === "none"){
        hr2.style.display = "block";
        hr3.style.display = "none";
        hr1.style.display = "none";
        longh4.innerText = "challenges (20)";
    }else{
        hr2.style.display = "block";
        hr3.style.display = "none";
        hr1.style.display = "none"; 
        longh4.innerText = "challenges (20)"; 
    }
}


// function for toggle 3
function toggle3(){
    if(hr3 === "none"){
        hr2.style.display = "none";
        hr3.style.display = "block";
        hr1.style.display = "none";
        longh4.innerText = "prices (20)";
       
    }else{
        hr2.style.display = "none";
        hr3.style.display = "block";
        hr1.style.display = "none";
        longh4.innerText = "prices (20)";  
    }
}

