function loadCalender(){
    // getting the last date of the current month
    let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
    // getting the last date of the previus month
    let lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();
    // getting the first day of the currentMonth
    let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
    // getting the last day of the current month
    let lastDayOfMonth = new Date(currYear, currMonth, lastDateOfLastMonth).getDay();

    let z;

    liDayTag.innerHTML = ``;

    let liTag = '';

    for(let i=firstDayOfMonth; i > 0; i--){
        liTag += `<li class="eachday inactive">${lastDateOfLastMonth - i + 1}</li>`
    }

    for(let i = 1; i <= lastDateOfMonth; i++){
        if(date.getFullYear() == currYear && date.getMonth() == currMonth && date.getDate() == i){
            liTag += `<li class="eachday active">${i}</li>`;
        }else{
            liTag += `<li class="eachday">${i}</li>`;
        }
    }

    if(lastDayOfMonth = 6){
        z = 10;
    }else if(lastDayOfMonth <= 5){
        z = 11;
    }

    for( let i = lastDayOfMonth; i < z; i++){
        liTag += `<li class="eachday inactive">${i - lastDayOfMonth + 1}</li>`
    }

    liDayTag.innerHTML = liTag;
    currentYear.innerText = `${currYear}`;
    currentMonth.innerText = `${months[currMonth]}`
    console.log(lastDayOfMonth)
}
loadCalender();

prev.addEventListener("click", () => {
    currMonth = currMonth - 1;

    if(currMonth < 0){
        changeYear--;
        currYear = currYear + changeYear;
        currMonth = 11;
        loadCalender(currYear, currMonth);
        changeYear = 0;
    }else{
        loadCalender(currYear, currMonth);
    }
})

next.addEventListener("click", () => {
    currMonth = currMonth + 1;

    if(currMonth > 11){
        changeYear++;
        currYear = currYear + changeYear;
        currMonth = 0;
        loadCalender(currYear, currMonth);
        changeYear = 0;
    }else{
        loadCalender(currYear, currMonth)
    }
})