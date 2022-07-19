const btn = document.getElementById("1");
console.log("hello");
btn.addEventListener("click", showImg);
function showImg() {
    if (confirm("Do you want to move to other page?")) { location = "pokes.html"; }
}