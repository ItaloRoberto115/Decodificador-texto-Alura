var botaoCripto = document.querySelector(".criptografar");
var contentResult = document.querySelector("#text2");
var contentMobResult = document.querySelector("#text-mob");
var botaoCopy = document.querySelector(".copy");
var botaoCopyMob = document.querySelector(".copyMob");

botaoCripto.addEventListener("click",function(){
    var contentCrip = document.querySelector("#text-area");
    var textoCrip = contentCrip.value;

    var removeImage = document.querySelector(".boneco-texto");
    var removeImageText = document.querySelector(".mensagem-texto");

    var removeText = document.querySelector(".sem-texto");
    var removeImageTextMob = document.querySelector(".sem-texto2");

    contentResult.textContent = textoCrip;
    contentMobResult.textContent = textoCrip;
    
    var resultText = document.getElementById("text2").innerHTML;
    document.getElementById("text2").innerHTML = resultText.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");

    var resultTextMob = document.getElementById("text-mob").innerHTML;
    document.getElementById("text-mob").innerHTML = resultTextMob.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");

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
    };

    clear();

})





