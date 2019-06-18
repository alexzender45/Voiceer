const member = document.getElementById('member1');
const view = document.querySelector('.view');
const chat = document.getElementsByClassName('chat');
const image = document.querySelectorAll('.img-color');
const color = document.getElementsByClassName('color');
const image2 = document.getElementsByClassName('change');

console.log(image2);


let toggle1 = () =>{
    if(member.style.display === "block"){
        member.style.display = "none";
        view.style.width = "173.7%";
       
    }else{
        member.style.display = "block";
        view.style.width = "145%";
    }
}

// change background-color
for(let i = 0; i < chat.length; i++){
    chat[i].addEventListener('mouseover', () =>{
        chat[i].style.backgroundColor = "rgba(187, 187, 187, 0.123)";
        image[i].style.border = "4px solid deeppink"
    });

    chat[i].addEventListener('mouseout', () =>{
        chat[i].style.backgroundColor = "white";
        image[i].style.border = "none"
    });
}
// color
for(let i = 0; i < color.length; i++){
    color[i].addEventListener('mouseover', () =>{
     color[i].style.backgroundColor = "white";
     image2[i].style.border = "4px solid deeppink";
    });

    color[i].addEventListener('mouseout', () =>{
        color[i].style.backgroundColor = "rgba(187, 187, 187, 0)";
        image2[i].style.border = "none";
    });
}


