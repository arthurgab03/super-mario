const botaoTrailer = document.querySelector(".botao-trailer");
const popup = document.querySelector(".popup");
const video = document.getElementById("video");
const fecharPopup = document.querySelector(".close-popup");
const linkVideo =  video.src; 
/* a const video pegou o id video que tem no html, ou seja, essa const tem as informações do #video, significa que podemos extrair essas informações, como o src por exemplo, sabendo disso, criei uma const linkVideo que recebe a src do #video e isso será muito útil para funções abaixo. */


function alternar () {
    popup.classList.toggle("aberto"); /* aqui adicionamos a classe .aberto que faz com que o pop-up do vídeo apareça, neste caso, o toggle serve para verificar se esta classe está presente em algum elemento, se não estiver, ela será adicionada, se estiver, ela será removida, assim podemos utilizar esta função como uma forma limpa de fechar e abrir o pop-up */

}

botaoTrailer.addEventListener("click", () => {
    alternar(); // abrindo o pop up
    video.setAttribute("src", linkVideo) // adicionando o src do vídeo para abrir
   
});


 fecharPopup.addEventListener("click", () => {
    alternar(); // fechando o pop-up 
    video.setAttribute("src", ""); //removendo o src do vídeo para que não ocorra vazamento de áudio após fechar o pop-up 
});

