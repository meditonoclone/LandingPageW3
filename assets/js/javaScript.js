var modal = document.querySelector(".modal-buy");
btnButtons = document.querySelectorAll(".buy-btn");
btnButtons.forEach(element => {
    element.addEventListener("click", openModal);
});

document.querySelector(".modal-close").addEventListener("click", closeModal);

function openModal(e){
    modal.style.display = "block";
}

function closeModal(e){
    modal.setAttribute("style", "display:none");
}

modal.addEventListener("click", closeModal)

document.querySelector(".modal-container").addEventListener("click", function(e){
    e.stopImmediatePropagation();
})

var iconNav = document.querySelector(".icon-nav");
var nav = document.getElementById("nav");
var flag = 0;

iconNav.addEventListener("click", ocMenu);

function ocMenu(e){
    if(flag == 0)
    {
        /* hiện */
        nav.classList.remove("hiden");
        flag = 1;
    }else
    {
        /* ẩn */
        nav.classList.add("hiden");
        flag = 0;
    }
}

function ocSubMenu(){
    if(subNavFlag == 0)
    {
        this.querySelector('.subnav').classList.remove('hiden');
        subNavFlag = 1;
    }else
    {
        this.querySelector('.subnav').classList.add('hiden');
        subNavFlag = 0;
        ocMenu();
    }
}

var slice = 1;
document.body.onload = setInterval(function(){
    if(slice == 1)
    {
        document.querySelector(".slice").style.backgroundImage = "url(./assets/images/la.jpg)";
        slice++;
    }else if(slice == 2)
    {
        document.querySelector(".slice").style.backgroundImage = "url(./assets/images/ny.jpg)"
        slice++;
    }else{
        document.querySelector(".slice").style.backgroundImage = "url(./assets/images/chicago.jpg)";
        slice = 1;
    }
}, 2000);

var menuItems = document.querySelectorAll("#nav > li");
[...menuItems].filter(el => !(el.classList.contains('js-subnav'))).forEach(item => {
    item.onclick = ocMenu;
});


var subNavFlag = 0;
var subMenuItems = document.querySelectorAll(".js-subnav");
subMenuItems.forEach(item => {
    item.onclick = ocSubMenu;
});


