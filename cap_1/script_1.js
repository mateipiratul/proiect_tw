window.onload = function(){
    const frame = document.getElementById("exercise-frame");
    document.getElementById("shop").addEventListener("click",
    function () {frame.src = "shopping-list.html";});
    document.getElementById("mors").addEventListener("click",
    function () {frame.src = "morse-code.html";});
    document.getElementById("conc").addEventListener("click",
    function () {frame.src = "concealment.html";});
    document.getElementById("cloc").addEventListener("click",
    function () {frame.src = "clock-hours.html";});
}