let yourScore=0;
let compScore=0;

let yourOption=0;
let compOption=0;
let option = document.querySelectorAll(".option");
let points = document.querySelectorAll(".points");
let reset = document.getElementById("reset");

let n;
let youWins =1;
let draw=0;
let message = document.getElementById("message");

const check=(yourOption,compOption)=>{
    if(yourOption==compOption){
        message.innerText="Draw";
        message.style.backgroundColor="rgb(1, 1, 78)";
        draw=1;
    }
    else if(yourOption==0){
        if(compOption==1){
            message.innerText="Computer wins by paper";
            message.style.backgroundColor="red";
            youWins=0;
        }
        else if(compOption==2){
            message.innerText="You won by rock";
            message.style.backgroundColor="rgb(1, 1, 78)";
            youWins=1;
            draw=0;
        }
    }else if(yourOption==1){
        if(compOption==0){
            message.innerText="You won by paper";
            message.style.backgroundColor="rgb(1, 1, 78)";
            youWins=1;
            draw=0;
        }
        else if(compOption==2){
            message.innerText="Computer wins by scissor";
            message.style.backgroundColor="red";
            youWins=0;
            draw=0;
        }
    }else if(yourOption==2){
        if(compOption==0){
            message.innerText="Computer wins by rock";
            message.style.backgroundColor="red";
            youWins=0;
            draw=0;
        }
        else if(compOption==1){
            message.innerText="You won by scissor";
            message.style.backgroundColor="rgb(1, 1, 78)";
            youWins=1;
            draw=0;
        }
    }
    scoreUpgd(youWins,draw);
};

const gen = (yourOption)=>{
    n= Math.random();
    if(n<=(1/3)){compOption=0;}
    else if(n>(1/3) && n<=(2/3)){compOption=1;}
    else{compOption=2;}
    check(yourOption,compOption);
};

const scoreUpgd = (youWins,draw)=>{
    if(youWins==1 && draw==0){
        yourScore += 1;
        points[0].innerText=yourScore;
    }else if(youWins==0 && draw==0){
        compScore += 1;
        points[1].innerText=compScore;
    }
};

option.forEach((choice,idx)=>{
    choice.addEventListener("click",()=>{
        yourOption=idx;
        gen(yourOption);
    })
});

reset.addEventListener("click",()=>{
    yourScore=0;
    compScore=0;
    points[0].innerText=yourScore;
    points[1].innerText=compScore;
    message.innerText="Play Your Move";
    message.style.backgroundColor="rgb(1,1,78)";
});
