let boxes=document.querySelectorAll(".box");
let resetButton=document.querySelectorAll("#resetButton");
let turn0=0;
let newButton=document.querySelectorAll("#newButton");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msgcontainer");
let winningArray=[[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];
const resetfunc=()=>{
    turn0=0;
    enableBoxes();
    msgcontainer.classList.add("hide");
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn0==0){
            box.innerText="0";
            turn0=1;
        } else{
            box.innerText="X";
            turn0=0;
        }
        box.disabled=true;
        checkWinner();
    });
});

const checkWinner=()=>{
    for(pattern of winningArray){
        let pos1=pattern[0];
        let pos2=pattern[1];
        let pos3=pattern[2];
        let pos1val=boxes[pos1].innerText;
        let pos2val=boxes[pos2].innerText;
        let pos3val=boxes[pos3].innerText;
        if(pos1val!="" &&pos2val!="" &&pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
               msg.innerText=`Congratulations, The Winner is ${pos1val}`;
               msgcontainer.classList.remove("hide");
               disableBoxes();
            }
        }
    }
}
newButton[0].addEventListener("click",resetfunc);
resetButton[0].addEventListener("click",resetfunc);