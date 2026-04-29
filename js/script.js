//=== ESTADO (dados da aplicação) ===

let likeCount = 0;
let curtido = false; // flag booleana
let deslikeCount = 0;
let descurtido = false; // flag boolena

// === SERVICE (regras de négocio) ===

function curtir() {
 if (curtido == false){
   likeCount++;
   curtido= true;
   document.getElementById("likeCount").innerText = likeCount;
}else{
  likeCount--;
  curtido = false;
  document.getElementById("likeCount").innerText = likeCount;
}

}

document.getElementById("likeBtn").addEventListener("click", curtir);

function descurtir() {
 if (descurtido == false){
     deslikeCount++;
     descurtido = true;
    document.getElementById("deslikeCount").innerText = deslikeCount;
  }else{
    deslikeCount--;
    descurtido = false;
    document.getElementById("deslikeCount").innerText = deslikeCount;
  }

} 

// === CONTROLLER (intermediação)===

function clicarCurtir(){
  curtir();
}
function clicarDescutir(){
  descurtir();
}

// === EVENTOS === 

document.getElementById("likeBtn").addEventListener("click", clicarCurtir);
document.getElementById("deslikeBtn").addEventListener("click", descurtir);
