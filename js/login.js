'use strict';

const userId = document.querySelector('#userIdType');
const userPw = document.querySelector('#userPwType');
const okBtn = document.querySelector('.okButton')
const loginForm = document.querySelector('#loginForm')


//로그인을 할 때 빈칸일 때 경고창 (실제로 아이디 비번을 대조할 순 없으니까~)
okBtn.addEventListener('click',()=>{

    if(userId.value == ""){
        alert('아이디를 입력하세요');
        userId.focus();
        return false

    }

    if(userPw.value == ""){
        alert('비밀번호를 입력하세요');
        userPw.focus();
        return false
    }

    alert('로그인 실행')
    loginForm.submit();

});



// sns로그인 박스 중 naver 박스를 출력.
const naverLogin = document.querySelector('.naverSnsLogin');
const snsLoginBox = document.querySelector('.snsLoginBox');
const closeSnsLoginBox = document.querySelector('span.closeSnsLoginBoxBtn')

naverLogin.addEventListener('click',(event)=>{
    event.preventDefault();
    snsLoginBox.style.visibility = 'visible'
    snsLoginBox.style.opacity = 1;
})

closeSnsLoginBox.addEventListener('click',()=>{
    snsLoginBox.style.visibility = 'hidden'
    snsLoginBox.style.opacity = 0;
})