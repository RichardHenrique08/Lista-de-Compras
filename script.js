const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-botao");


botaoSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(event) {
    event.preventDefault()
    
    const itemLista = document.createElement("li");
    const containerItemList = document.createElement("div")
    containerItemList.classList.add("lista-item-container")
    
    itemLista.appendChild(containerItemList);

}