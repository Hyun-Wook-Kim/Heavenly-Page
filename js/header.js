const header = document.querySelector('.header')


window.addEventListener('scroll',headerFunc)


// 스크롤을 할 떄, 최상단에 위치할 때가 아니면 header를 투명화.
function headerFunc() {
    if(window.scrollY >1){
        header.style.opacity = '0';
    }
    else{
        header.style.opacity = '1';
    }
}


//투명화 된 header에 마우스를 올리면 메뉴 표시 / 마우스가 나가면 다시 사라짐.

header.addEventListener('mouseover',() => header.style.opacity = '1');
header.addEventListener('mouseout',() => {
    if(window.scrollY !=0){
        header.style.opacity = '0'
    }});