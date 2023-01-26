let currentYear = document.querySelector(".currentYear");
let currentMonth = document.querySelector(".currentMonth");
let liDayTag = document.querySelector(".days");
let prev = document.querySelector(".chev-left");
let next = document.querySelector(".chev-right");

let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();
let changeYear = 0;

function  renderCalender(currYear, currMonth){
    // get the last date of the month
    const lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
    // get the last date of last month
    const lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();
    // get the first day of the month
    const firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
    // get the last day of the month
    const lastDayOfMonth = new Date(currYear, currMonth, lastDateOfLastMonth).getDay();

    // empty the lidaytag
    liDayTag.innerHTML = ``;
    // declaration of litag with an empty value
    let liTag = "";

    // looping to get days from past month
    for(let i = firstDayOfMonth; i > 0; i--){
        liTag += `<li class="eachday inactive">${lastDateOfLastMonth - i + 1}</li>`
    }

    for(let i = 1; i <= lastDateOfMonth; i++){
        if(date.getFullYear() == currYear && date.getMonth() == currMonth && date.getDate() == i){
            liTag += `<li class="eachday active">${i}</li>`;
        }else{
            liTag += `<li class="eachday">${i}</li>`;
        }
    }

    for(let i = lastDayOfMonth; i < 6; i++){
        liTag += `<li class="eachday inactive">${i - lastDayOfMonth + 1}</li>`
    }

    liDayTag.innerHTML = liTag;
    currentMonth.innerText = `${months[currMonth]}`;
    currentYear.innerText = `${currYear}`
}

next.addEventListener("click", () => {
    currMonth = currMonth + 1;

    if(currMonth > 11){
        changeYear++;
        currYear = currYear + changeYear;
        currMonth = 0;
        console.log(currYear)
        renderCalender(currYear, currMonth);
        changeYear = 0;
    }else{
        renderCalender(currYear, currMonth);
    }
})

prev.addEventListener("click", () => {
    currMonth = currMonth - 1;

    if(currMonth < 0){
        changeYear--;
        currYear = currYear + changeYear;
        currMonth = 11;
        console.log(currYear)
        renderCalender(currYear, currMonth);
        changeYear = 0;
    }else{
        renderCalender(currYear, currMonth);
    }
})

window.addEventListener("load", () => {
    renderCalender(currYear, currMonth);
})