const userId = document.querySelector("#userId");
const userPw = document.querySelector("#userPw");
const userPwCheck = document.querySelector("#userPw2");
const userPwCheckTxt = document.querySelector("#userPwCheckTxt");
const userGender = document.querySelectorAll('.gender');
const userJoinMotive = document.querySelector('.joinMotive');
const userFavorite = document.querySelector('#mostLike');
const userPhone = document.querySelectorAll('.userPhoneBox>input');
const joinForm = document.querySelector('#joinForm');
const joinBtn = document.querySelector("#joinBtn");
const userMemo = document.querySelector("#Memo");
const userMemoLength = document.querySelector('#userMemoLength')

//숫자 0~9, 알파벳 소/대문자가 들어있는 지 확인하는 패턴. ()
const pattern1 = /[0-9]/g;
const pattern2 = /[a-zA-Z]/g;

//비밀번호와 비밀번호 확인이 일치하는지 확인하는 함수.
function pwCheck() {
  if (userPw.value == userPwCheck.value) {
    userPwCheckTxt.innerText = "비밀번호가 일치합니다";
    userPwCheckTxt.style.color = 'blue'
    } 
else {
    userPwCheckTxt.innerText = "비밀번호가 일치하지 않습니다";
    userPwCheckTxt.style.color = 'red'
  }
}
//키를 땔 때마다 비밀번화를 비교한다!
userPwCheck.addEventListener("keyup",pwCheck);

userMemo.addEventListener('keydown',()=>{
  let txtLength = userMemo.value.length
  userMemoLength.innerText = txtLength
})

joinBtn.addEventListener("click", joinFunc);

// join 버튼을 누르면 유효성 검사!
function joinFunc() {
  if (userId.value == "" || userId.value.length <= 0) {
    alert("아이디를 입력해주세요");
    userId.focus();
    return false;
  } else if (userId.value.length > 10) {
    alert("아이디는 20글자 이내입니다");
    return false;
  }
  
  if(userPw.value == ""){
    alert('비밀번호를 입력해주세요');
    userPw.focus();
    return false
  }
  
  //패턴 1(숫자포함)을 만족하고, 패턴 2(영어 포함)을 만족하며, 글자 수가 5 ~ 16자 사이인 비밀번호 출력.
  if(!pattern1.test(userPw.value) || !pattern2.test(userPw.value) || userPw.value.length > 16 || userPw.value.length <5) {
    alert('비밀번호는 영 소/대문자와 숫자의 조합, 5~16자 사이로 입력해주세요')
    userPw.focus();
    userPw.value = ""
    userPwCheck.value = ""
    return false;
  }

  if (userPw.value != userPwCheck.value){
    alert('비밀번호 확인이 일치하지 않습니다');
    userPwCheck.focus();
    return false;
  }



    if(userPhone[0].value.length <3 || userPhone[0].value.length>4){
        alert('전화번호는 3~4글자 사이로 입력해주세요!')
        userPhone[0].focus();
        return false;
      }
      
      else if(userPhone[1].value.length <3 || userPhone[1].value.length>4){
        alert('전화번호는 3~4글자 사이로 입력해주세요!')
        userPhone[1].focus();
        return false;
      }
      
      if(userFavorite.value == ""){
        alert('최애 작품을 알려주세요!')
        userFavorite.focus();
        return false;

    }
    alert('회원가입 실행')
    joinForm.submit();

}
