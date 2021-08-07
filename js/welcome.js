const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const welcome = document.querySelector("#welcome");
const HIDE = "hide"; 
const KEY = "userName";

//아이디 등록 및 등록시 환영 인사 나오는 구조 

function enroll (event){
    //기능 정지후 class 하이드 부여! , 입력창의 값을 변수에 집어 넣어서 로컬 스토리지 저장.
    event.preventDefault();
    loginForm.classList.add(HIDE);
    const userName=loginInput.value;
    localStorage.setItem(KEY,userName);
    //인사
    gretting(userName);
}

function gretting(userName){
    welcome.innerText=`welcome! ${userName}`;
    welcome.classList.remove(HIDE);
}

// 로컬 스토리지를 검색해서 기존에 저장된 아이디 검사 -> 검사 후 조건에 따른 분류

const member = localStorage.getItem(KEY);

if(member===null){
    loginForm.classList.remove(HIDE);
    loginForm.addEventListener("submit",enroll);
}else{
    gretting(member);
}
