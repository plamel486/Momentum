const time = document.querySelector("h3#time");


//시계의 두자리수 표기를 위한 패드 스타트를 사용. 00:00:00

const tiktok = () => {
    const date= new Date();
    const hours=String(date.getHours()).padStart(2,"0");
    const minutes=String(date.getMinutes()).padStart(2,"0");
    const seconds=String(date.getSeconds()).padStart(2,"0");
    time.innerText= `${hours}:${minutes}:${seconds}`;   
};


setInterval(tiktok,1000);