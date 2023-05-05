

function encriptar(){
	var frase = document.getElementById("inputtext").value;
	var fraseEncriptada = "";
	
    if(frase.length == 0 || frase == " "){
        var hidedoll = document.getElementById("dollfigure");
        var hidetext = document.getElementById("emptymessage");
        hidedoll.style.display = "display";
        hidetext.style.display = "display";
    }
    else{
        for(var i = 0; i < frase.length; i++){
            if(frase[i] == "e"){
                fraseEncriptada += "enter";
            }
            else if(frase[i] == "i"){
                fraseEncriptada += "imes";
            }
            else if(frase[i] == "a"){
                fraseEncriptada += "ai";
            }
            else if(frase[i] == "o"){
                fraseEncriptada += "ober";
            }
            else if(frase[i] == "u"){
                fraseEncriptada += "ufat";
            }
            else{
                fraseEncriptada += frase[i];
            }	
        }
        hideDefault();
        showOutput();
        document.getElementById("outputtext").value = fraseEncriptada;
    }
    
}

function desencriptar() {
	const fraseEncriptada1 = document.getElementById("inputtext").value;
	let fraseDesencriptada = "";
	let i = 0;
    if(fraseEncriptada1.length == 0 || fraseEncriptada1 == " "){
        var hidedoll = document.getElementById("dollfigure");
        var hidetext = document.getElementById("emptymessage");
        hidedoll.style.display = "display";
        hidetext.style.display = "display";
    }
    else{
        while (i < fraseEncriptada1.length) {
            let letra = "";
            if (fraseEncriptada1.slice(i, i+5) === "enter") {
              letra = "e";
              i += 5;
            } else if (fraseEncriptada1.slice(i, i+4) === "imes") {
              letra = "i";
              i += 4;
            } else if (fraseEncriptada1.slice(i, i+2) === "ai") {
              letra = "a";
              i += 2;
            } else if (fraseEncriptada1.slice(i, i+4) === "ober") {
              letra = "o";
              i += 4;
            } else if (fraseEncriptada1.slice(i, i+4) === "ufat") {
              letra = "u";
              i += 4;
            } else {
              letra = fraseEncriptada1[i];
              i += 1;
            }
            fraseDesencriptada += letra;
          }
          hideDefault();
          showOutput();
          document.getElementById("outputtext").value = fraseDesencriptada;
    }
	
}

function hideDefault(){
    var hidedoll = document.getElementById("dollfigure");
    var hidetext = document.getElementById("emptymessage");
    hidedoll.style.display = "none";
    hidetext.style.display = "none";
}

function showOutput(){
    var hideoutp = document.getElementById("outputtext");
    var hidecbtn = document.getElementById("copy");
    hideoutp.style.display = "block";
    hidecbtn.style.display = "block";
}
  


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("encript").onclick = encriptar;
  });

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("desencript").onclick = desencriptar;
  });

  function copyClipboard() {
    const text = document.getElementById("outputtext");
    text.select();
    document.execCommand("copy");
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("copy").onclick = copyClipboard;
  });
  

  


