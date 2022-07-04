var botaoDescripto = document.querySelector(".descriptografar");
var contentResult = document.querySelector("#text2");
var contentMobResult = document.querySelector("#text-mob");

botaoDescripto.addEventListener("click",function(){
    var contentCrip = document.querySelector("#text-area");
    var textoCrip = contentCrip.value;

    var removeImage = document.querySelector(".boneco-texto");
    var removeImageText = document.querySelector(".mensagem-texto");

    var removeText = document.querySelector(".sem-texto");
    var removeImageTextMob = document.querySelector(".sem-texto2");
    
    contentResult.textContent = textoCrip;
    contentMobResult.textContent = textoCrip;

    var resultTextDescript = document.getElementById("text2").innerHTML;
    document.getElementById("text2").innerHTML = resultTextDescript.replace(/enter/g,"e").replace(/ai/g,"a").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u");

    var resultTextMobDescript = document.getElementById("text-mob").innerHTML;
    document.getElementById("text-mob").innerHTML = resultTextMobDescript.replace(/enter/g,"e").replace(/ai/g,"a").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u");

    if(!contentMobResult.value == ""){

        removeText.classList.add("invisible");
        removeImageTextMob.classList.add("invisible");
        botaoCopyMob.classList.add("mostrarMob");

    }else{
        removeText.classList.remove("invisible");
        removeImageTextMob.classList.remove("invisible");
        botaoCopyMob.classList.remove("mostrarMob");
    };

    if(!contentResult.value == ""){

        removeImage.classList.add("remover-imagem");
        removeImageText.classList.add("remover-imagem");
        botaoCopy.classList.add("mostrar");

    }else{
        removeImage.classList.remove("remover-imagem");
        removeImageText.classList.remove("remover-imagem");
        botaoCopy.classList.remove("mostrar");
    }

    clear();

})

function clear(){
    document.getElementById("text-area").value = "";
    
}