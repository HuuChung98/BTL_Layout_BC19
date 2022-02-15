document.getElementById('trigger-overlay').onclick = function(){
    const overlay__trigger = document.getElementById('overlay-trigger');
    overlay__trigger.style.display = "block";
}

// CLOSE OVERLAY 
document.getElementById('close-overlay').onclick = function() {
    const overlay__trigger = document.getElementById('overlay-trigger');
    overlay__trigger.style.display = "none";
}

document.getElementById('switchButton').onclick = function() {
    document.getElementById("search").classList.toggle("dark");
    document.getElementById("switchButton").classList.toggle("change");

}