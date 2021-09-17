const hiddenMenu = document.querySelector('.h-header');
const closeBtn = document.querySelector('.closeBtn');
const menuUl = document.querySelector('.h-header>ul');
const menuLi = document.querySelectorAll('.first');
const subUlLi = document.querySelectorAll('.subUl');
const menuList = document.querySelector('.menu-list');
const logo = document.querySelector('.top-left-logo');
const mainText = document.querySelector('.container .main-title');
const linkLi = document.querySelectorAll('.link');
const wrap = document.querySelector("#wrap");

// window가 load 되었을 때 천천히 화면이 나타나는 애니메이션
(function () {
  setTimeout(function () {
    menuList.style.transition = 'all 2s';
    menuList.style.opacity = 1;
    logo.style.transition = 'all 2s';
    logo.style.opacity = 1;
    mainText.style.transition = 'all 2s';
    mainText.style.opacity = 1;
  }, 2000);
})();


// 메뉴 그림을 클릭하면 숨겨진 메뉴가 출력되는 함수.
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

window.onload = ()=>
{
        wrap.style.opacity = 1;
}


// 각 menu 클릭시 sub메뉴가 출력되고, 다른 메뉴를 클릭시 기존 클릭된 메뉴는 원래대로 돌아가는 함수
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