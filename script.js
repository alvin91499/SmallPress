// script.js
function calculateGravity(calculator) {
  var userInput1 = calculator === 1 ? document.getElementById('barInput1').value : "";
  var userInput2 = calculator === 2 ? document.getElementById('kNInput2').value : "";
  var userInput3 = calculator === 3 ? document.getElementById('psiInput3').value : "";

  if ((calculator === 1 && (isNaN(userInput1) || userInput1 === "")) ||
      (calculator === 2 && (isNaN(userInput2) || userInput2 === "")) ||
      (calculator === 3 && (isNaN(userInput3) || userInput3 === ""))) {
    alert("Please enter a valid number.");
    return;
  }

  if (calculator === 1) {
    var Tons1 = userInput1 * 1.418625257;
    var kN1 = Tons1 * 9.80665;
    var psi1 = userInput1 * 14.5038;

    document.getElementById('result1').innerText = `Tons1: ${Tons1.toFixed(2)} tons`;
    document.getElementById('result2').innerText = `kN1: ${kN1.toFixed(2)} kN`;
    document.getElementById('result3').innerText = `psi1: ${psi1.toFixed(2)} psi`;
  } else if (calculator === 2) {
    var Tons2 = userInput2 / 9.80665;
    var bar2 = (Tons2 * 1000) / 1418.625257;
    var psi2 = bar2 * 14.5038;

    document.getElementById('result4').innerText = `Tons2: ${Tons2.toFixed(2)} tons`;
    document.getElementById('result5').innerText = `bar2: ${bar2.toFixed(2)} bar`;
    document.getElementById('result6').innerText = `psi2: ${psi2.toFixed(2)} psi`;
  } else if (calculator === 3) {
    var Bar3 = userInput3 / 14.5038;
    var Tons3 = Bar3 * 1.418625257;
    var kN3 = Tons3 * 9.80665;

    document.getElementById('result7').innerText = `Tons3: ${Tons3.toFixed(2)} tons`;
    document.getElementById('result8').innerText = `kN3: ${kN3.toFixed(2)} kN`;
    document.getElementById('result9').innerText = `Bar3: ${Bar3.toFixed(2)} bar`;
  }
}
