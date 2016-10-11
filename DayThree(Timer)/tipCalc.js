var title = document.getElementById('totalAmmount');
var button = document.getElementById('getTipButton');
var input = document.getElementById('input');

button.addEventListener("click", function(event){
    title.innerHTML ="Total ammount: " + ((parseFloat(input.value) * 0.15) + parseFloat(input.value));
});
