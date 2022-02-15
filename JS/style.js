const inputEl = document.getElementById("input");
inputEl.onclick = function(evt){
    console.log(evt.target);
    this.style.borderColor = "#ff6600"
}