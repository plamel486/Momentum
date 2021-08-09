const backImg = ["main0.jpg","main1.jpg","main2.jpg"];

//배경에 랜덤 이미지 나오게 하기

function draw(){
    
    const randImg = backImg[Math.floor(Math.random()*backImg.length)];
    document.body.style.backgroundImage=`url(imgs/${randImg})`;
}
draw();