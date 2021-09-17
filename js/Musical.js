'use strict'



const wrapper = document.querySelector('.wrapper');
const slider = document.querySelector('.slidePointer');
const bgArr = [];
const bgArrMobile = [];

const boxWrap = document.querySelector('.boxWrap');
const boxWrapLength = document.querySelectorAll('.box').length;
let boxWidth;



// for(let i = 0; i<boxWrapLength;i++){
//     bgArr.push(`url(img/musical/musical_${i}.png) no-repeat 50%/cover`);
//     document.querySelectorAll('.box')[i].style.background = bgArr[i]
// }

window.addEventListener('load',()=>{
    boxWrap.style.width = `${(boxWrapLength+2) * 100}%`
    boxWrap.style.left = -(boxWrap.querySelectorAll('.box')[0].offsetWidth) + 'px'

    boxWidth = boxWrap.querySelectorAll('.box')[0].offsetWidth;
    console.log(boxWidth);
    wrapper.style.opacity = 1;
    wrapper.style.transition = 'all 2s'
    wrapper.style.transform = 'translate(-50%,-50%)'
})


window.addEventListener('resize',()=>{
    boxWrap.style.width = `${(boxWrapLength+2) * 100}%`
    boxWrap.style.left = -(boxWrap.querySelectorAll('.box')[0].offsetWidth) + 'px'

    boxWidth = boxWrap.querySelectorAll('.box')[0].offsetWidth;
    console.log(boxWidth);
    wrapper.style.opacity = 1;
    wrapper.style.transition = 'all 2s'
    wrapper.style.transform = 'translate(-50%,-50%)'
})



let lastClone = boxWrap.lastElementChild.cloneNode(true);
let firstClone = boxWrap.firstElementChild.cloneNode(true);
boxWrap.prepend(lastClone)
boxWrap.append(firstClone)



let posX1, posX2, originalPos, allow = false,
    index = 1;

boxWrap.addEventListener('mousedown', () => {
    posX1 = event.clientX;
    console.log(event.target)
    allow = true;
    originalPos = boxWrap.offsetLeft;
    console.log(originalPos)

});

boxWrap.addEventListener('mousemove', () => {
    event.preventDefault()
    posX2 = event.clientX;
    if (allow == true) {

        boxWrap.style.left = `-${(index * boxWidth) - (posX2-posX1)}px`
        // console.log(boxWrap.style.left)
    }

})

boxWrap.addEventListener('mouseup', () => {
    boxWrap.style.transition = "all 0.2s"
    allow = false;
    if (posX1 > posX2) {
        index++
        if (index == boxWrapLength+1) {
            boxWrap.style.left = `${-boxWidth * index}px`
            index = 1
            setTimeout(() => {
                boxWrap.style.left = `${-boxWidth * index}px`
            },201);
        }
        else{

            boxWrap.style.left = `${-boxWidth * index}px`
        }
        
        
    } else if (posX1 < posX2) {
        index--
        if (index == 0) {
            boxWrap.style.left = `${-boxWidth * index}px`
            index = boxWrapLength
            setTimeout(() => {
                boxWrap.style.left = `${-boxWidth * index}px`
            },201);
        }
        else{
            boxWrap.style.left = `${-boxWidth * index}px`
            
        }
    }



    
    setTimeout(()=>{
        boxWrap.style.transition = "none"
    },200)



    originalPos = boxWrap.style.left;
})





const hiddenMenu = document.querySelector('.h-header');
const closeBtn = document.querySelector('.closeBtn');
const menuUl = document.querySelector('.h-header>ul');
const menuLi = document.querySelectorAll('.first');
const subUlLi = document.querySelectorAll('.subUl');
const menuList = document.querySelector('.menu-list');

menuList.addEventListener("click", () => {
    hiddenMenu.style.transform = "translateX(0)";
  });
  // 닫기 버튼을 누르면 메뉴가 다시 사라지는 함수.
  closeBtn.addEventListener("click", () => {
    hiddenMenu.style.transform = "translateX(100%)";
    subUlLi.forEach(function (ele) {
      ele.style.display = "none";
    });
  });


  menuUl.addEventListener('click',(event)=>{
    let _target = event.target;
    console.log(_target)
    menuLi.forEach((el,idx)=>{
        if(el == _target){
            subUlLi[idx].style.display = "block";
        }
        else{
            subUlLi[idx].style.display = "none";
        }
    })
})

// const box = document.querySelector('.box');
// const boxWidth = box.clientWidth;
// const boxHeight = box.clientHeight;


// let posX1,
// posX2,
// threshold = 10;
// let allow = false;
// let originalPos;

// function mouseEvent(){

//     box.addEventListener('mousedown',()=>{

//         allow = true;
//         posX1 = event.clientX
//         box.style.position = 'absolute'
//         originalPos = box.offsetLeft;
//         console.log(originalPos)
//         // box.style.left = `${event.clientX - (boxWidth/2)}px`
//     });


//         box.addEventListener('mousemove',()=>{
//             if(allow == true){
//                 // console.log(event.clientX)
//                 box.style.left = `${event.clientX - boxWidth/2}px`
//             }

//         });


//     box.addEventListener('mouseup',()=>{
//         allow = false;
//         posX2 = event.clientX
//         if(posX1 < posX2){
//             box.style.left = `${originalPos + boxWidth}`+'px'
//             originalPos = box.offsetLeft;
//         }
//         else if (posX1 > posX2){
//             console.log('왼쪽 이동')
//             box.style.left = `${originalPos - boxWidth}`+'px'
//             originalPos = box.offsetLeft;
//         }
//         else{
//             console.log('움직이지 않았습니다')
//         }
//     });


// }

// mouseEvent();


// box.addEventListener('mousemove',()=>{
//     //     console.log('ㄴㅇ리ㅏㄴㅁ엏ㄹ')
//     //     console.log(event.clientX)
//     posX1 = event.clientX;

//     console.log(posX1)

// })