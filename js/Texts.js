'use strict';

const boxs = document.querySelectorAll('.box');
const textSection= document.querySelector('.textSection');
const titleTxt = document.querySelector('p.titleTxt');
const row1 = document.querySelector('.box.row1')
const row2 = document.querySelector('.box.row2')
const row3 = document.querySelector('.box.row3')
const rowLi = document.querySelectorAll('.box>ul>li');
const rowLiCon = document.querySelectorAll('.LiCon')
const rowLiConTxt = document.querySelectorAll('p.ConTxt')
const rowLiConTitle = document.querySelectorAll('p.titleTxt')


// 윈도우가 로드 되면 각 LI의 크기가 랜덤으로 설정되게 함 300~400px 사이로
rowLiCon.forEach((el,idx)=>{
    if(window.innerWidth>767){
        let height = Math.floor(((Math.random()*(5-3))+3)*100/10)*10+'px'
        el.style.height = height;
    }

})
    const lightBox = document.querySelector('.lightBox');
    const lightBoxTitle = lightBox.querySelector('.lightTitle')
    const lightBoxCon = lightBox.querySelector('.lightCon')
    const lightBoxCloseBtn = lightBox.querySelector('.closeBtn')


    //text section을 클릭하면 해당 내용이 lightBox 형식으로 나오는 이벤트
    textSection.addEventListener('click',()=>{
        let _target = event.target;
        console.log(_target);
        rowLiConTitle.forEach((el,idx)=>{
            if(el == _target){
             lightBox.style.visibility = 'visible'
             lightBox.style.opacity = 1;
             lightBoxCon.innerHTML = rowLiCon[idx].innerHTML;
             lightBoxTitle.innerHTML = rowLiConTitle[idx].innerHTML;
            }
        })
    })


// X 버튼을 누르면 다시 사라지는 함수
lightBoxCloseBtn.addEventListener('click',()=>{
        lightBox.style.visibility = 'hidden'
        lightBox.style.opacity = 0;
    });


