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
   
}else{
  likeCount--;
  curtido = false;
  
}

}



function descurtir() {
 if (descurtido == false){
     deslikeCount++;
     descurtido = true;
    
  }else{
    deslikeCount--;
    descurtido = false;
    
  }

} 

// === VIEW (interface/renderização)===
function atualizarTela(){
  document.getElementById("likeCount").innerText = likeCount;
  document.getElementById("deslikeCount").innerText = deslikeCount;
}

// === CONTROLLER (intermediação)===

function clicarCurtir(){
  curtir();
  atualizarTela();
}
function clicarDescutir(){
  descurtir();
  atualizarTela();
}

// === EVENTOS === 

document.getElementById("likeBtn").addEventListener("click", clicarCurtir);
document.getElementById("deslikeBtn").addEventListener("click", descurtir);

// === INICIALIZACÃO ===

atualizarTela();