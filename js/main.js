(() => {
console.log("Linked Up");
//variables
var iconSet = document.querySelectorAll('svg');

//functions
function logThisIcon() {
  console.log('clicked on this icon', this.id);


  this.style.transform = "scale(1.1)";

}

function remove() {
  this.style.transform = "scale(1)";
}

//event handling
  iconSet.forEach(icon => icon.addEventListener('mouseover', logThisIcon));
  iconSet.forEach(icon => icon.addEventListener('mouseout', remove));

})();
