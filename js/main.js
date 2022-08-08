
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('header').addClass('scrolling');
        }else{
            $('header').removeClass('scrolling');
        }
    });

});

const section = document.querySelectorAll('section');
const navLi = doccument.querySelectorAll('nav ul li');


window.onscroll = () => {
    var current = "";
}

section.forEach((section) =>{
    const sectionTop = section.offsetTop;

    if(pageXOffset >= sectionTop - 60){
        current = section.getAttribute('id');
    }

    navLi.forEach((li) => {
        li.classList.remove('active');

        if(li.classList.contains(current)){
            li.classList.add('active');
        }
    })
});

