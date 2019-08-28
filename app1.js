const ul = document.querySelector('.main__menu')
const menu = document.querySelectorAll('.main__menu__list');
const section = document.querySelectorAll('.main__section');
const container = document.querySelector('.container');

const showPage = ()=>{
    container.classList.add('container--active');
 }

 menu.forEach(function(links){        
     links.addEventListener('click', function(event){ 
    
        let e = event.target.firstChild.textContent;
        
         section.forEach(function(x){ 
            x.classList.remove('main__section--active');
            if (x.classList.contains('main__section--' + e)){x.classList.add('main__section--active')}
            // console.log(e)
         })
     });
 });


 ul.addEventListener('click', (e) => {
    // container.classList.remove('container--active');
    // setTimeout(showPage,100)
     let active = e.target.firstChild.textContent;
     menu.forEach((link)=>{
         link.classList.remove('main__menu__list--active');
         if (link.classList.contains('main__menu__list--' + active)){link.classList.add('main__menu__list--active')}
     })
     
 })


 
 