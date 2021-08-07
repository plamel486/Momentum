const quotes = [
    {
        quote:"자신감 있는 표정을 지으면 자신감이 생긴다",
        author:"찰스다윈"
},{
        quote:"고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다.",
        author:"괴테"
},{
        quote:"진짜 문제는 사람들의 마음이다. 그것은 절대로 물리학이나 윤리학의 문제가 아니다.",
        author:"아인슈타인"
},{
        quote:"해야 할 것을 하라. 모든 것은 타인의 행복을 위해서, 동시에 특히 나의 행복을 위해서이다.",
        author:"톨스토이"
},{
        quote:"돈이란 바닷물과도 같다. 그것은 마시면 마실수록 목이 말라진다.",
        author:"쇼펜하우어"
}
];

//명언 목록 중 랜덤한 명언을 표시.

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

const author = document.querySelector("#quote span:first-child");
const quote = document.querySelector("#quote span:last-child");


quote.innerText=todayQuote.quote;
author.innerText=`-${todayQuote.author}-`;
author.classList.add("quoteAuthor");
quote.classList.add("quoteText");
