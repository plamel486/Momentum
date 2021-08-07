/*
workingList == form 형태를 변수화
list == 사용자가 글을 작성하면 글을 보여줄 목록 (list안에는 작성 글 + 강조 +삭제 가 같이 작성됨 )
listDetail == 사용자가 작성하는 글 입력창을 변수화
works == 글을 작성하는 배열 목록
*/

const workingList=document.getElementById("workingList");
const list=document.getElementById("list");
const listDetail=workingList.querySelector("#workingList input");
const userName = localStorage.getItem("userName");
const WORKS_KEY = "regist";
let works = [];


//리스트 작성시 로컬 스토리지 저장을 위해 사용되는 함수
function saveWork(){
    localStorage.setItem(WORKS_KEY,JSON.stringify(works));
}


//삭제 = gone function
function gone(event){
    const target = event.target.parentElement; 
    target.remove();
    works = works.filter((arg)=> arg.id !== parseInt(target.id));
    saveWork();
}

// 생성된 값을 화면에 그려 주는 과정

function write(work){
    const span = document.createElement("span");
    const li = document.createElement("li");
    li.id=work.id;
    const del = document.createElement("button");

    li.appendChild(span);
    li.appendChild(del);

    span.innerText=work.text;
    del.innerText="❌";

    del.addEventListener("click",gone)

    list.appendChild(li);
    
}

function handleSubmit(event){
    event.preventDefault();
// 값을 변수에 저장하고 빈 칸으로 만들어 주기
    const work=listDetail.value;
    listDetail.value="";
    const workObj={
        id : Date.now(),
        text: work
    } 

    works.push(workObj);
    write(workObj);
    saveWork();
}

workingList.addEventListener("submit",handleSubmit);


const saveWorkList=localStorage.getItem(WORKS_KEY);

if(saveWorkList){
    const parsedWork = JSON.parse(saveWorkList);
    works = parsedWork;
    
    parsedWork.forEach(write);
     
    
}


