const backImg = ["main.jpg","1.jpg","2.jpg"];



function draw(){
    
    const randImg = backImg[Math.floor(Math.random()*backImg.length)];
    document.body.style.backgroundImage=`url(imgs/${randImg})`;
}
draw();