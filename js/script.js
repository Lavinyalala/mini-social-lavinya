//=== BANCO DE DADOS (JSON simulado) ===

let post = {
  likeCount: 0,
  dislikeCount: 0,
  curtido: false,
  descurtido: false
}
 
// === SERVICE (regras de négocio) ===

function curtir() {
 if (post.curtido == false){
   post.likeCount++;
   post.curtido= true;
   
}else{
  post.likeCount--;
  post.curtido = false;
  
}

}



function descurtir() {
 if (post.descurtido == false){
     post.deslikeCount++;
     post.descurtido = true;
    
  }else{
    post.deslikeCount--;
    post.descurtido = false;
    
  }

} 

//=== API SIMULADO ===

function getPost(){
  return post; 
}

function likePost(){
  curtir();
  return post; 
}

function dislikePost(){
  descurtir();
  return post; 
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