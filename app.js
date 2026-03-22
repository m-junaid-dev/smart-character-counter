let mytext = document.querySelector("#my-text");
let count = document.querySelector("#count");
let remaining = document.querySelector("#remaining");
let modal = document.querySelector("#modal");
let resetBtn = document.querySelector("#resetBtn");

let limit = 60;
let popupShown = false;

mytext.addEventListener("input", function () {

    let text = mytext.value;

    if (text.length > limit) {

        mytext.value = text.substring(0, limit);

        mytext.classList.add("shake");

        setTimeout(()=>{
            mytext.classList.remove("shake");
        },300);

        if(!popupShown){
            modal.classList.add("active");
            popupShown = true;
        }
    }

    let length = mytext.value.length;
    let remain = limit - length;

    count.textContent = length + "/" + limit;
    remaining.textContent = remain + " characters remaining";

    if(remain <= 10){
        remaining.classList.add("warning");
        mytext.classList.add("error");
    }else{
        remaining.classList.remove("warning");
        mytext.classList.remove("error");
    }

});

resetBtn.addEventListener("click", function(){
    mytext.value = "";
    count.textContent = "0/" + limit;
    remaining.textContent = limit + " characters remaining";
    modal.classList.remove("active");
    popupShown = false;
});
