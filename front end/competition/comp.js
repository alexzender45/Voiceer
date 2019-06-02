
 


const cateB = document.getElementById('cateB');
const cateC = document.getElementById('cateC');
const cateD = document.getElementById('cateD');
const cateE = document.getElementById('cateE');
const catehr1 = document.getElementById('hr1');
const catehr2 = document.getElementById('hr2');
const catehr3 = document.getElementById('hr3');
const catehr4 = document.getElementById('hr4');






// 
catehr2.style.display = "none";
        catehr3.style.display = "none";
        catehr4.style.display = "none";

//
cateE.style.display = "none";
cateD.style.display = "none";
cateC.style.display = "none";
//toggle 1
function toggle(){
    if(cateB.style.display = "block"){
        cateB.style.display = "none";
        cateC.style.display = "block";
        cateD.style.display = "none";
        cateE.style.display = "none";
        catehr2.style.display = "block";
        catehr1.style.display = "none";
        catehr3.style.display = "none";
        catehr4.style.display = "none";
        
    }
}


// toggle2
function toggle2(){
    
 if(cateB.style.display = "none"){
        cateB.style.display = "block";
        cateC.style.display = "none";
        cateD.style.display = "none";
        cateE.style.display = "none";
        catehr2.style.display = "none";
        catehr3.style.display = "none";
        catehr4.style.display = "none";
        catehr1.style.display = "block";
    }
}

//toggle3

function toggle3(){
    
    if(cateD.style.display = "none"){
           cateB.style.display = "none";
           cateC.style.display = "none";
           cateD.style.display = "block";
           cateE.style.display = "none";
           catehr3.style.display = "block";
           catehr2.style.display = "none";
        catehr4.style.display = "none";
        catehr1.style.display = "none";
       }
   }


   // toggle4
   function toggle4(){
    
    if(cateE.style.display = "none"){
           cateB.style.display = "none";
           cateC.style.display = "none";
           cateD.style.display = "none";
           cateE.style.display = "block";
           catehr2.style.display = "none";
        catehr3.style.display = "none";
        catehr4.style.display = "block";
        catehr1.style.display = "none";
       }
   }

