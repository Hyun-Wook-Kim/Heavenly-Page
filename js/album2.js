"use strict";

const albumDescArr = [
'괜찮아요. 괜찮아요. 그 한마디가 때로는 얼마나 큰 도움이 되는지 아시나요?\n\모든 것을 포기하고 싶을 때도 아무도 믿을 수 없을 것 같을 때도\n\ 내가 세상에서 제일 쓸모 없는 사람이 된 것 같은 기분이 들 때도\n\마법같은 이 한마디가 우리를 다시 일어나게 하더라구요\n\그래서 여러분들께 꼭 말해드리고 싶었어요.\n\괜찮아요! 괜찮아요.. 아무런 이유 없어도'
,'뭐가 그리 슬퍼서, 펑펑 울고 말았을까\n\ 그럴 때 없었나요? 영원한 이별도 아닌데 괜시리 눈시울이 붉어지고\n\ 코가 시큰거리고\n\ 이대로 헤어지기 싫다는 마음이 불쑥 올라올 때요.....\n\그리움이라는 건 슬픔보다 더한 녀석이에요.\n\슬픔은 나의 것이지만, 그리움은 서로의 것이니까요.'
,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quos quam obcaecati amet velit mollitia, cupiditate ipsa tempora, harum alias dolor dicta dignissimos voluptatibus voluptas nobis sapiente architecto minima hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quos quam obcaecati amet velit mollitia, cupiditate ipsa tempora, harum alias dolor dicta dignissimos voluptatibus voluptas nobis sapiente architecto minima hic.\n\ Nunc finibus condimentum turpis eu ullamcorper. Donec rhoncus erat eget interdum dapibus. Vivamus est augue, mattis mollis pretium quis, ultricies quis dui. Quisque et diam dapibus, gravida libero quis, iaculis velit. Morbi gravida augue id metus hendrerit, ultricies placerat metus dapibus. Vestibulum euismod, neque pharetra pellentesque elementum, tellus ipsum tincidunt nisl, ac facilisis metus massa ac nulla. Ut erat erat, facilisis fringilla eleifend in, malesuada ut massa. Curabitur porta arcu urna, vel placerat quam sagittis id. In ultricies velit nec sem tincidunt vestibulum. Pellentesque convallis aliquam nulla, ut malesuada erat auctor sed. Quisque id libero interdum, iaculis tortor ut, condimentum ante.'
,'그 모습 그대로를 사랑해!\n\ 마치 고전 로맨스 드라마의 한 장면 같죠?\n\ 이성간의 고백에서, 도덕적인 당위에서, 종교적인 은혜에서 한번즈음 나오는 말이기도 해요\n\ 모습 그대로 사랑한다는 것은 정말 어려운 일인 것 같아요.\n\ 그리고 내 모습 그대로 받아들여지는 것 만큼 행복한 일도 없겠죠'
,'잔뜩 널어놓은 빨래를 하나씩 걷어봅니다.\n\ 어떤 것은 잘 말라 추억이 되었고\n\ 어떤 것은 적당히 말라 그리움이 되었고\n\ 어떤 것은 축축해져 원망이 되어버렸네요.\n\ 어느 것 하나 버리고 싶지 않지만\n\ 젖은 것을 함께 두면 마른것도 젖기에\n\ 원망은 버리고 그리움과 추억만\n\ 두 팔 가득 벌려 담아옵니다.'
,'Nunc finibus condimentum turpis eu ullamcorper. Donec rhoncus erat eget interdum dapibus. Vivamus est augue, mattis mollis pretium quis, ultricies quis dui. Quisque et diam dapibus, gravida libero quis, iaculis velit. Morbi gravida augue id metus hendrerit, ultricies placerat metus dapibus. Vestibulum euismod, neque pharetra pellentesque elementum, tellus ipsum tincidunt nisl, ac facilisis metus massa ac nulla. Ut erat erat, facilisis fringilla eleifend in, malesuada ut massa. Curabitur porta arcu urna, vel placerat quam sagittis id. In ultricies velit nec sem tincidunt vestibulum. Pellentesque convallis aliquam nulla, ut malesuada erat auctor sed. Quisque id libero interdum, iaculis tortor ut, condimentum ante.'
,'Suspendisse egestas dictum justo, at pretium leo imperdiet id. Vestibulum nunc erat, cursus sed diam eu, venenatis bibendum massa. Donec fringilla bibendum nisi, vitae sagittis tortor. Etiam varius augue in nisl bibendum mollis. Donec at ornare erat, at placerat odio. Phasellus vehicula varius magna quis viverra. Suspendisse tincidunt, ex sed vulputate dictum, lectus justo varius mi, ac blandit dui erat eget dui. Nam bibendum ipsum metus, sit amet iaculis quam placerat vel. Quisque in eros enim. Vivamus rhoncus viverra nibh, non porttitor massa pharetra vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean eu sapien non felis vestibulum consectetur non at eros. Nullam accumsan ex et ligula pellentesque ultricies. Duis dictum turpis sollicitudin enim facilisis tincidunt. Sed dolor nisi, vestibulum eu nulla ut, semper feugiat lacus. Morbi sollicitudin congue magna a iaculis.'
,'Nunc viverra luctus orci, sit amet porta tellus volutpat sed. Curabitur non sem pharetra, fringilla felis nec, aliquet neque. Sed fermentum, metus vitae iaculis pellentesque, massa nisi consectetur mauris, eget tincidunt nisi odio eget urna. Sed ac commodo risus, nec lobortis nisl. Aenean auctor orci arcu, eget fermentum ante fermentum in. Sed nec purus non justo ultricies cursus eu vel lectus. Nullam posuere accumsan augue, sed congue risus tincidunt sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam varius nec risus ut dignissim. Sed ligula risus, congue vitae eros vel, dapibus scelerisque arcu. Suspendisse et metus in dui mattis gravida eget et urna. In quis efficitur nibh. Vivamus molestie eu odio eget fringilla. Curabitur nec quam mauris. Suspendisse tincidunt augue id mi consequat, tempor porttitor ante aliquet. Integer tristique dolor quis condimentum ullamcorper. Nullam elementum urna eu libero porta, at laoreet velit euismod. Vivamus pellentesque tempus nisi ut tincidunt. Cras quam tortor, sollicitudin id massa quis, tristique aliquam ex. In eu erat vel ligula bibendum feugiat sed id massa. Nullam at purus et risus fringilla suscipit. Etiam commodo est vitae augue pulvinar, vitae placerat odio volutpat. Maecenas convallis mollis sem id maximus. Etiam scelerisque augue a neque luctus, semper pharetra lacus pretium. Quisque a nunc eget felis convallis condimentum quis ac sem'
]

// 이거 나중에는 서버에서 받아오는 방법도 있다고 한다. (java라든가 그런걸 통해서 불러올 수 있다. 나중에 배워보자 :)



///////////// window 로드 시, 화면 크기에 따라 UL,Ul의 사이즈를 설정해주는 함수 + 좌 우 화살표 클릭시 이동하는 함수 //////////////////
const bannerUl = document.querySelector(".picture-list>ul");
const bannerLi = document.querySelectorAll(".picture-list>ul>li");
const bannerLiArr = Array.from(bannerLi);
const centerBtn = document.querySelector(".centerBtn");
const centerBtnArrow = centerBtn.querySelectorAll(".arrow");
const footer = document.querySelector(".footer");
bannerUl.style.width = `${bannerLi.length * 20}%`;
let i = 0;


//초기 화면 크기 767을 기준으로 UL과 Li크기 설정

    // 너비가 767이상일 때는 화면에 li 3개 출력 + 가운데 1개에 .show클래스 부여
    // 너비가 767 이하일 떄는 화면에 Li 1개만 출력, 첫번째 li에 .show클래스 부여

if (window.innerWidth <= 767) {
  bannerUl.style.width = `${bannerLi.length * 100}%`;
  bannerUl.children[i].classList.add("showBox");
  bannerFunc(i);
} else {
  i = 1;
  bannerUl.style.width = `${bannerLi.length * 33.333333333}%`;
  bannerUl.children[i].classList.add("showBox");
  bannerFunc(i);
}

//화면 크기가 바뀔 경우 UL 새로 설정
window.addEventListener("resize", () => {
  if (window.innerWidth <= 767) {
    i = 0;
    bannerUl.style.width = `${bannerLi.length * 100}%`;
    bannerLi.forEach((el, idx) => {
      el.classList.remove("showBox");
      bannerUl.children[i].classList.add("showBox");
    });
  } else {
    i = 1;
    bannerUl.style.width = `${bannerLi.length * 33.333333333}%`;
    bannerLi.forEach((el, idx) => {
      el.classList.remove("showBox");
      bannerUl.children[i].classList.add("showBox");
    });
  }
  closeDescBox();
});







/////////////////////////// banner 의 이미지나 버튼을 클릭하면 좌/우로 이동하고, 설명란을 드러내어 해당하는 텍스트와 제목을 입력해주는 부분 ////////////////////////////////////



const ArrowUpDown = document.querySelector(".arrowUpDown");
const closeArrow = document.querySelector(".closeBtn");
const pictureDesc = document.querySelector(".pictureDesc");
const pictureDescTitle = document.querySelector(".pictureDesc>h1.title");
const pictureDescdescription = document.querySelector(".pictureDesc> .description");



bannerUl.addEventListener("click", () => {
  let _target = event.target;
  let ulWidth = bannerUl.clientWidth;
  let ulMoveWidth = ulWidth / bannerLi.length - 1;

  //화면 767이상일 때, 3개의 LI중 왼쪽 / 오른쪽 Li를 클릭하는 지 여부에 따라 왼쪽/오른쪽으로 LI가 이동.
  //화면시 767이하일 때는 양 옆 LI가 출력되지 않기 때문에 별도 함수는 X
  bannerLi.forEach((el, idx) => {
    if (el == _target.parentElement) {
      if (window.innerWidth > 767) {
        if (_target.parentElement == bannerUl.children[2]) {
          bannerRightMove(_target, ulMoveWidth);
          bannerLiArr.forEach((el,idx)=>{
            if(el.classList.contains('showBox')){
            }
        })
        } else if (_target.parentElement == bannerUl.children[0]) {
          bannerLeftMove(_target, ulMoveWidth);

        }
      }


      //li를 누르면 닫는 버튼(화살표)가 나오고,
      // 하단 describe 박스가 열리고 클릭한 LI에 해당하는 내용이 표시.
      closeArrow.style.visibility = "visible";
      closeArrow.style.opacity = 1;
      openDescBox();
      descBoxTitle();
      descTextBring();
    }
  });
});


// 닫기 버튼 (화살표)를 누르면 describe 박스 삭제
closeArrow.addEventListener("click", () => {
    closeDescBox();
});







//////////////////////// function //////////////////////////////


//li를 누르면 해당 li 순서에 대입되는 Text를 arr에서 불러와 innertext로 표시.
function descTextBring(){
    setTimeout(()=>{
        bannerLiArr.forEach((el,idx)=>{
            if(el.classList.contains('showBox')){
            pictureDescdescription.innerText = albumDescArr[idx]
            console.log(pictureDescdescription.innerText)
            }
        })
      },1000)
}

// 좌/우 버튼을 누르면 해당하는 버튼 함수가 실행.
  // ulMoveWIdth를 입력값으로 받아 해당 변수만큼 좌 / 우 로 ul이 움직인다.
function bannerFunc(i) {
  centerBtn.addEventListener("click", () => {
    let _target = event.target;
    let ulWidth = bannerUl.clientWidth;
    let ulMoveWidth = ulWidth / bannerLi.length - 1;
    centerBtnArrow.forEach((el, idx) => {
      if (window.innerWidth <= 767) {
        i = 0;
      } else {
        i = 1;
      }
      if (el == _target) {
        if (idx == 1) {
          bannerRightMove(_target, ulMoveWidth);
        } else {
          bannerLeftMove(_target, ulMoveWidth);
        }
        descTextBring();
      }
    });
  });
}



//함수 좌 /우 버튼 클릭시 현재 UL의 너비에 따라 일정 너비씩 좌/우로 이동하고,
// 화면 크기에 따라 li에 클래스 부여( 767이상일 때는 가운데, 767이하일 때는 출력된 하나의 li에만)

function bannerLeftMove(_target, ulMoveWidth) {
  bannerLi.forEach((el, idx) => {
    el.classList.remove("showBox");
  });

  bannerUl.style.transition = `none`;
  bannerUl.style.left = `-${ulMoveWidth}px`;
  bannerUl.prepend(bannerUl.children[bannerLi.length - 1]);

  setTimeout(() => {
    bannerUl.style.transition = "all 0.5s";
    bannerUl.style.left = `0px`;
  }, 500);

  setTimeout(() => {
    bannerUl.children[i].classList.add("showBox");
  }, 1000);
  descBoxTitle();
}

function bannerRightMove(_target, ulMoveWidth) {
  bannerLi.forEach((el, idx) => {
    el.classList.remove("showBox");
  });
  bannerUl.style.transition = "all 0.5s";

  setTimeout(() => {
    bannerUl.style.left = `${-ulMoveWidth}px`;
  }, 500);

  setTimeout(() => {
    bannerUl.appendChild(bannerUl.children[0]);
    bannerUl.style.transition = `none`;
    bannerUl.style.left = `0px`;
    bannerUl.children[i].classList.add("showBox");
  }, 1000);
  descBoxTitle();
}


//li를 클릭하면 하단에 설명 상자가 나오고 show 클래스가 부여된 li에서 제목과 내용을 가져와 출력하는 함수. 

function openDescBox(){
    pictureDesc.setAttribute(
        "style",
        "margin-top: 5%; visibility: visible; height: auto;"
      );
      setTimeout(() => {
        pictureDescTitle.setAttribute("style", "visibility:visible; opacity:1");
        pictureDescdescription.setAttribute("style","visibility:visible; opacity:1");
        pictureDescdescription.setAttribute("height","auto");
        
      }, 500);
}


function closeDescBox(){
    pictureDescTitle.setAttribute("style", "visibility:hidden; opacity:0");
    pictureDescdescription.setAttribute("style", "visibility:hidden; opacity:0");
    setTimeout(() => {
      pictureDesc.setAttribute(
        "style",
        "margin-top: 0%; visibility: hidden; height: 0px;"
      );
      closeArrow.style.visibility = "hidden";
      closeArrow.style.opacity = 0;
    }, 500);
}


function descBoxTitle(){
    setTimeout(()=>{
        pictureDescTitle.innerHTML = document.querySelector('.showBox>img').getAttribute('alt')
    },1000)
}



///////////////맨 처음 출력되는 help 부분 ///////////////////////////
const help = document.querySelector('.help')


window.addEventListener('load',()=>{
    help.style.opacity = 1;
    help.style.visibility = 'visible';
}
)


help.addEventListener('click',()=>{
    help.style.opacity = 0;
    help.style.visibility = 'hidden';
})