//ARRAY DE VÍDEOS
let listaDestaque = document.querySelector(".videosDestaques_Lista")
let seçãoTodososVideos = document.querySelector(".seçãoTodososVideos ul")
let listaReproducao = document.querySelector(".adicionarAFila_lista")


const listaVideos = [
    {
        id: 0,
        titulo: "Conheça todo o universo da Kenzie Academy Brasil",
        visualizacoes: "2,7 mil",
        descricao: " descrição do vídeo ",
        thumbnail: "./img/thumb1.webp"
    },
    {
        id: 1,
        titulo: "Conheça todo o universo da Kenzie Academy Brasil",
        visualizacoes: "2,7 mil",
        descricao: "descrição do vídeo ",
        thumbnail: "./img/thumb2.webp"
    },
    {
        id: 2,
        titulo: "Conheça todo o universo da Kenzie Academy Brasil",
        visualizacoes: "2,7 mil",
        descricao: "descrição do vídeo ",
        thumbnail: "./img/thumb1.webp"
    },
    {
        id: 3,
        titulo: "Conheça todo o universo da Kenzie Academy Brasil",
        visualizacoes: "2,7 mil",
        descricao: "descrição do vídeo ",
        thumbnail: "./img/thumb2.webp"
    }
];

function listarVideos(listaDestaque){
    for(let i = 0; i < listaVideos.length; i = i + 1){
   
         let titulo         = listaVideos[i].titulo 
         let visualizacoes  = listaVideos[i].visualizacoes
         let descricao      = listaVideos[i].descricao
         let thumbnail      = listaVideos[i].thumbnail

        criarTemplate(listaDestaque, titulo, visualizacoes, descricao, thumbnail)
    }
}
listarVideos(listaDestaque)
listarVideos(seçãoTodososVideos)

//FUNÇÃO QUE CRIA O TEMPLATE
function criarTemplate(listaDestaque, titulo, visualizacoes, descricao, thumbnail){
    


    //CRIANDO UM ELEMENTO HTML (LI)
    let li = document.createElement("li")

    //ADICIONANDO TAGS E CONTEÚDO PARA DENTRO DO (LI)
    li.innerHTML = `
        <figure>
            <img src="${thumbnail}" alt="${titulo}">
        </figure>

         <div>
             <h3>${titulo}</h3>
             <span>${visualizacoes}</span>
             <p>${descricao}</p>
            <button class="buttonAdicionarAFila">Adicionar a Fila</button>
         </div>
    `
    console.log(li)

    //ADICIONANDO O LI, PREENCHIDO DENTRO DA LISTA, NO HTML
    listaDestaque.appendChild(li)
}


//FUNÇÕES DE CLIQUE
listaDestaque.addEventListener("click", adicionarAFila)

function adicionarAFila(event){

    const buttonName = event.target.tagName
    const button = event.target

    if(buttonName == "BUTTON"){

        const li = button.closest("li")

        const licopy = li.cloneNode(true)
        listaReproducao.appendChild(licopy)
        
    }
}



listaReproducao.addEventListener("click", removerdaFila)

function removerdaFila(event){

    const elemento = event.target
    const elementoName = event.target.tagName
    

    if(elementoName !== "LI"){
        elemento.closest("li").remove()
    }else{
        elemento.remove()
    }
}
