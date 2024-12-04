/* helper Functions */

function switchDispalyNone(element) {
    element.style.display = "none";
}

function switchDispalyFlex(element) {
    element.style.display = "flex";
}

function changeColor(element, color) {
    element.style.color = color;
}

/* main Functions */

function createNewTask() {
    let tempelate = document.querySelector(".template").cloneNode(true);
    tempelate.className = "task";
    switchDispalyFlex(tempelate);
    
    let title = tempelate.children[1];
    title.textContent = prompt("Enter your Task Title");
    if(title.textContent == "") return;

    let date = tempelate.children[2].children[0];
    let todayDate = new Date();
    date.textContent = `${todayDate.getFullYear()} /${todayDate.getMonth()}/ ${todayDate.getDay()}`;

    switchToCheck(tempelate.children[0]);

    tempelate.children[0].children[0].addEventListener("click", function () {
        switchToXmark(tempelate.children[0]);
        tempelate.style.backgroundColor = "#49da81";
        tempelate.style.boxShadow = "1px 1px 10px rgba(0, 0, 0, 0.393)";
    });

    tempelate.children[0].children[1].addEventListener("click", function () {
        switchToCheck(tempelate.children[0]);
        tempelate.style.backgroundColor = "#FFF";
        tempelate.style.boxShadow = "1px 1px 2px rgba(0, 0, 0, 0.393)";
    });

    tempelate.children[0].children[2].addEventListener("click", function () {
        if (confirm("Are You Sure ?"))
            document.querySelector("section").removeChild(tempelate);
    });

    tempelate.children[0].children[3].addEventListener("click", function () {
        let Txt = prompt("Enter your Task Title",title.textContent);
        if(Txt == "") return;
        title.textContent = Txt;
    });

    document.querySelector("section").appendChild(tempelate);
}

function switchToCheck(task_op) {
    let taskElemnts = task_op.children;
    let checkElemnt = taskElemnts[0];
    let xmarkElemnt = taskElemnts[1];
    switchDispalyFlex(checkElemnt);
    switchDispalyNone(xmarkElemnt);
}

function switchToXmark(task_op) {
    let taskElemnts = task_op.children;
    let checkElemnt = taskElemnts[0];
    let xmarkElemnt = taskElemnts[1];
    switchDispalyFlex(xmarkElemnt);
    switchDispalyNone(checkElemnt);
}
