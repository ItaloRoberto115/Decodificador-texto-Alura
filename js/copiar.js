botao = document.querySelector(".copy");
botaoMob = document.querySelector(".copyMob");

botao.addEventListener("click",function(){
    document.getElementById("text2").select();
    
    document.execCommand("copy");
    
})

botaoMob.addEventListener("click",function(){
    document.getElementById("text-mob").select();
    document.execCommand("copy");
    
})

