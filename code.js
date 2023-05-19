// paste this code in the console: https://typing-speed-test.aoeu.eu/?lang=en
const input = document.getElementById('input');
for(let i=0; i<300; i++){ 
    input.value = document.getElementById('currentword').textContent + " " + "x";
    var e1 = new KeyboardEvent("keydown", {
      key: " ",
      keyCode: 32, 
      bubbles: true, 
      cancelable: true 
    });
    var e2 = new KeyboardEvent("keyup", { 
      key: " ",
      keyCode: 32,
      bubbles: true,
      cancelable: true
    });
    input.dispatchEvent(e1);
    input.dispatchEvent(e2);
    input.value = "";
} 
