
let hourlyCheck = true;
let annualCheck = false;

window.hourlyUpdated = function() {
    hourlyCheck = true;
    annualCheck = false;
};

window.annualUpdated = function() {
    annualCheck = true;
    hourlyCheck = false;
};
window.calculateSalary = function () {
    let hourlyWage = document.getElementById("hourlyWage").value;
    let annualSalary = document.getElementById("annualSalary").value;
    let hoursWeek = document.getElementById("hoursWeek").value;
    let weeksYear = document.getElementById("weeksYear").value;

    if (hoursWeek > 168 || weeksYear > 52) {
        return;
    }

    if (hourlyCheck === true) {
        let annualSalaryValue = ((hourlyWage * hoursWeek) * weeksYear);
        document.getElementById("annualSalary").value = Math.trunc(annualSalaryValue);
    }
    else {
        let hourlyWageValue = ((annualSalary / weeksYear) / hoursWeek);
        document.getElementById("hourlyWage").value = Math.trunc(hourlyWageValue);

    }
};

window.showOptions = function () {
    let toggleItems = document.getElementById("toggle-items");
    toggleItems.classList.toggle("showItems");
};


