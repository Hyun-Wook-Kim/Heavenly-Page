"use strict";


const aTag = document.querySelectorAll('a.noWork');


aTag.forEach((el,idx)=>{
  el.addEventListener('click',()=>{
    event.preventDefault();
  })
})

let indexNum = 0;
const itemsUl = document.querySelector(".items-button>ul");
const  items = document.querySelectorAll(".items-button>ul>li");
const li = document.querySelectorAll("ul#GalleryUl>li");
const itemsLength = items.length;
const liLength = li.length;


//윈도우 로드시 첫번째 Li와 items 버튼에 class부여
(function () {
  items[0].classList.add("on");
  li[0].classList.add("show");
})();



// items 클릭시 해당 index로 이동하는 함수
function liMove(event) {
  let _target = event.target;
  items.forEach((el, idx) => {

    if(_target == itemsUl){
      return false;
    }
    if (el == _target) {
      el.classList.add("on");
      indexNum = idx;
      li[idx].classList.add("show");
    }
    else {
      el.classList.remove("on");
      li[idx].classList.remove("show");
    }
  });
}

//autoGallery 함수

function autoGallery() {
  indexNum++;
  if (indexNum >= items.length) {
    indexNum = 0;
  }

  items.forEach((el, idx) => {
    el.classList.remove("on");
  });
  li.forEach((el, idx) => {
    li[idx].classList.remove("show");
  });
  items[indexNum].classList.add("on");
  li[indexNum].classList.add("show");
}

// autoGallery 실행
let timer = setInterval(autoGallery, 4000);

// ul>li에 마우스를 올리면 슬라이드 정지 / 나가면 다시 시작
function galleryStop() {
  clearTimeout(timer);
}

function galleryStart() {
  timer = setInterval(autoGallery, 4000);
}



//이벤트 위임//
itemsUl.addEventListener("click", liMove);
itemsUl.addEventListener("mouseover", galleryStop);
itemsUl.addEventListener("mouseout", galleryStart);







///////////////////////////////////////////////////////////////////////////////////

const galleryTopImg = document.querySelector(".top-con img");
const galleryTopTxt = document.querySelector(".top-text");
const galleryBottomLi = document.querySelectorAll(".bottom-con>ul>li");
const galleryBottomLiImg = document.querySelectorAll(".bottom-con>ul>li>img");
const galleryBottomUl = document.querySelector(".bottom-con>ul");
const galleryBottomArrow = document.querySelectorAll("span.arrow");
const galleryBottomArrowLeft = document.querySelector("span.arrow.left");
const galleryBottomArrowRight = document.querySelector("span.arrow.right");
const galleryBottomUlWidth = galleryBottomUl.clientWidth;
const bottomCon = document.querySelector(".bottom-con");
const galleryBottomCon = document.querySelector('.bottom-con');
galleryTopTxt.innerText = galleryTopImg.alt;
let BottomUlIdx = 0;



// 윈도우 크기 조정시, 화면 너비에 따라 section 4 li의 갯수 조절
window.onresize = ()=>{
  let galleryBottomUlMoveWidth = galleryBottomCon.clientWidth;
  BottomUlIdx = 0;
  galleryBottomUl.style.left = `${
    (-galleryBottomUlMoveWidth) * BottomUlIdx
  }px`;
  galleryBottomArrowLeft.style.display = "none";
  galleryBottomArrowRight.style.display = "block";
}



// LI 이미지를 클릭하면 maim box에 해당 사진이 나타나게 하는 함수
function galleryImgChange(event) {
  let _this = event.target;
  galleryBottomLiImg.forEach((el, idx) => {
    if (_this == el) {
      el.classList.add("on");
      galleryTopImg.src = el.src;
      galleryTopImg.alt = el.alt;
      galleryTopTxt.innerText = el.alt;
    } else {
      el.classList.remove("on");
    }
  });
}



// section4의 좌/우 화살표를 누르면 해당 방향으로 이동하고,
// 처음 / 마지막 파트에서는 화살표를 없애 해당 방향으로 초과 이동 방지.
bottomCon.addEventListener("click", (event) => {
  let galleryBottomUlMoveWidth = galleryBottomCon.clientWidth;
  let maxIdx = Math.round(galleryBottomUl.clientWidth / galleryBottomCon.clientWidth);
  galleryBottomArrow.forEach((el, idx) => {
    let _target = event.target;
    if (el == _target.parentElement) {
      if (el.classList.contains("right")) {
        BottomUlIdx++;
        galleryBottomUl.style.left = `${
          (-galleryBottomUlMoveWidth) * BottomUlIdx
        }px`;
        if (BottomUlIdx == maxIdx-1) {
          galleryBottomArrowRight.style.display = "none";
        } else {
          galleryBottomArrow[0].style.display = "block";
          galleryBottomArrow[1].style.display = "block";
        }
      } else {
        galleryBottomUl.style.left = `${
          (-galleryBottomUlMoveWidth) * (BottomUlIdx-1)
        }px`;
        BottomUlIdx--;
        if (BottomUlIdx == 0) {
          galleryBottomArrowLeft.style.display = "none";
        } else {
          galleryBottomArrow[0].style.display = "block";
          galleryBottomArrow[1].style.display = "block";
        }
      }
    }
  });
});



//이벤트 위임//
galleryBottomUl.addEventListener("click", galleryImgChange);







/////////////////////////////////////////////////////
const sectionsBox = document.querySelectorAll(".section");
const sliderUl = document.querySelector(".sliderBtn>ul");
const sliderLi = document.querySelectorAll(".sliderBtn>ul>li");

window.addEventListener("scroll", () => {
  liScrollMove();
});

sliderUl.addEventListener("click", () => {
  liClickMove();
  liScrollMove();
});




// 화면을 스크롤 / 오른쪽 fixed 내비게이션 메뉴 클릭 시 내비게이션 LI의 class 변경. 

  // 이거 너무 복잡하다... 좀 단순화 할 방법이 있을 거 같은데?
  
function liScrollMove() {
  sliderLi.forEach((el) => {
    el.classList.remove("scrollOn");
  });
  let boxTop1 = document.querySelector(".section.sec1").offsetTop;
  let boxTop2 = document.querySelector(".section.sec2").offsetTop;
  let boxTop3 = document.querySelector(".section.sec3").offsetTop;
  let boxTop4 = document.querySelector(".section.sec4").offsetTop;
  let boxTop6 = document.querySelector(".section.sec6").offsetTop;
  let scrollPosition = document.documentElement.scrollTop;

  if (scrollPosition <= boxTop2) {
    sliderLi[0].classList.add("scrollOn");
    return false;
  } else if (scrollPosition <= boxTop3) {
    sliderLi[1].classList.add("scrollOn");
    return false;
  } else if (scrollPosition <= boxTop4) {
    sliderLi[2].classList.add("scrollOn");
    return false;
  } else if (scrollPosition <= boxTop6) {
    sliderLi[3].classList.add("scrollOn");
    return false;
  } else if (scrollPosition > boxTop6) {
    sliderLi[4].classList.add("scrollOn");
    return false;
  }
}

function liClickMove() {
  let boxTop1 = document.querySelector(".section.sec1").offsetTop;
  let boxTop2 = document.querySelector(".section.sec2").offsetTop;
  let boxTop3 = document.querySelector(".section.sec3").offsetTop;
  let boxTop4 = document.querySelector(".section.sec4").offsetTop;
  let boxTop6 = document.querySelector(".section.sec6").offsetTop;
  let boxTopArr = [boxTop1, boxTop2, boxTop3, boxTop4, boxTop6];
  let _target = event.target;
  sliderLi.forEach((el, idx) => {
    if (el == _target) {
      window.scrollTo(0, boxTopArr[idx] + 1);
      sliderLi.forEach((el) => {
        el.classList.remove("scrollOn");
      });
      sliderLi[idx].classList.add("scrollOn");
    }
  });
}
