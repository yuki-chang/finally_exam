/* 
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');
    const navs_links = document.querySelectorAll('.nav_links li ')
    //Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav_active');
        //Animate Links
        navs_links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
            }
        })
        //Burger Animation
        burger.classList.toggle('toggle');
    });

}
navSlide();**/


var menu_img = document.getElementById('menu_img'); // Assumes element with id='button'
menu_img.onclick = function() {
    var menu_block = document.getElementById('menu_block');
    menu_block.style.display == 'block'?
        menu_block.style.display = 'none':
        menu_block.style.display = 'block';
};

var main_content_title = document.getElementById('main_content_title');
var text1 ="COURSE\nCATALOG\nSYSTEM";



function stringAnimation(text,p,num){
    var chars = text.split("");
    var typed = "";
    var state = 0;
    var type = setInterval(function(){
      if(chars.length > 0){
        var char = chars.shift();
        if(char == "\n")
          char = "<br />"
        else if(char == ";"){
          state += 1;
          p += " state" + state;
        }
        typed += char;
        p.innerHTML = typed;
        p.scrollTop = p.scrollHeight;
      }
      else{
        clearInterval(type);
      }
    }, num); //80
}

stringAnimation(text1,main_content_title,160)