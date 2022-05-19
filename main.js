'use strict'

{
    const imgs = [
        'img/pic00.png',
        'img/pic01.png',
        'img/pic02.png',
        'img/pic03.png',
        'img/pic04.png',
        'img/pic05.png',
        'img/pic06.png',
        'img/pic07.png',
    ];

    let currentIndex = 0;

    const mainImage = document.querySelector('#main');
    mainImage.src = imgs[currentIndex];

    imgs.forEach((img,index) =>{
        const imag = document.createElement('img');
        imag.src = img;

        const li = document.createElement('li');

        if(index === currentIndex){
            li.classList.add('current');
        }
        li.addEventListener('click',()=>{
            mainImage.src = img;
            const thumbnails =document.querySelectorAll('.thumbnails >li');
            thumbnails[currentIndex].classList.remove('current');
            currentIndex = index;
            thumbnails[currentIndex].classList.add('current');
        });
        
        li.appendChild(imag);
        
        document.querySelector('.thumbnails').appendChild(li);
    });
        
        const next = document.querySelector('#next');
        next.addEventListener('click',()=>{
            let target = currentIndex + 1;
            if(target ===imgs.length){
                target =0;
            }
            document.querySelectorAll('.thumbnails >li')[target].click();

        });
        const prev = document.querySelector('#prev');
        prev.addEventListener('click',()=>{
            let target = currentIndex - 1;
            if(target <0){
                target =imgs.length -1
            }
            document.querySelectorAll('.thumbnails >li')[target].click();


        });

        let timeoutId;

        function playSlideShow(){
          timeoutId =  setTimeout(()=>{
                next.click();
                playSlideShow();

            },1000)
           
        }

        let isPlaying = false;

        const play = document.querySelector('#play');
        play.addEventListener('click',()=>{
            if(isPlaying ===false){
                playSlideShow();
                play.textContent = 'Pause';
            }else{
                clearTimeout(timeoutId);
                play.textContent = 'Play';
            }
            isPlaying =!isPlaying;

        })
       
}