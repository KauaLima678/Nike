let body = document.querySelector("body");
let tenis = document.querySelector(".tenis");
let preco = document.querySelector(".preco")


function mudarVisual(cor, src){

    tenis.classList.add("trocaEfeito");
    preco.classList.add("precoEfeito")

    
    body.style.backgroundColor = cor;
    
    

    setTimeout(() =>{
        preco.style.color = cor;
        preco.classList.remove("precoEfeito")
        tenis.src = src;
        tenis.classList.remove("trocaEfeito")

    }, 300)

    
}