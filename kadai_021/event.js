const eventBtn=document.getElementById("btn");
const eventText=document.getElementById("text");



eventBtn.addEventListener("click",()=>{

    setTimeout(()=>{
        eventText.textContent="ボタンをクリックしました";
    },2000);
    
});