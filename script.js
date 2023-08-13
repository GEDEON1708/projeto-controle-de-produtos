class Produto {
  constructor() {
    this.id = 1;
    this.arrayProdutos = [];
  }

  Adicionar() {
    let produto = this.lerDados();
    if (this.Validar(produto) == true) {
      this.Salvar(produto);
    }
    console.log(this.arrayProdutos);

    this.Listar();
    this.Cancelar(); // essa função foi colocada aqui para que ela seja acionada/ utilizada assim que os dados foram listados/obtidos.
  }

  lerDados() {
    let produto = {};

    produto.id = this.id;
    produto.nomeProduto = window.document.getElementById("pdnome").value;
    produto.precoProduto = window.document.getElementById("pdpreco").value;

    return produto;
  }

  Validar(produto) {
    let msg = "";

    if (produto.nomeProduto == "") {
      msg += "Por favor, insira corretamente o nome do produto! \n";
    }

    if (produto.precoProduto == "") {
      msg += "Por favor, insira corretamente o preço do produto! \n";
    }

    if (msg != "") {
      alert(msg);
      return false;
    }

    return true;
  }

  Salvar(produto) {
    this.arrayProdutos.push(produto);
    this.id++;
  }

  Listar() {
    let tbody = window.document.getElementById("tbody");
    tbody.innerText = "";
    // Um laço de repetição que fara a função listar funcionar.

    for (let i = 0; i < this.arrayProdutos.length; i++) {
      // "tr" sera as linhas que terá a listagem, essa declaração feita com tr consiste a que todas vez que os dados foram obtidos que automaticamente uma nova linha se cria preenchendo cada vaga ( nome, preço )
      let tr = tbody.insertRow();

      let td_id = tr.insertCell();
      let td_nome = tr.insertCell();
      let td_preco = tr.insertCell();
      let td_del = tr.insertCell();

      td_id.innerText = this.arrayProdutos[i].id; // aqui terá acesso ap array produto com índice 0 e pegar o id dele. e fazer aparecer na tela usando o innerText.
      td_nome.innerText = this.arrayProdutos[i].nomeProduto; // aqui terá acesso ap array produto com índice 0 e pegar o nome dele. e fazer aparecer na tela usando o innerText.
      td_preco.innerText = this.arrayProdutos[i].precoProduto; // aqui terá acesso ap array produto com índice 0 e pegar o preço dele. e fazer aparecer na tela usando o innerText.

      let imagem = document.createElement("img");
      imagem.src = "./img/trash.svg";
      imagem.setAttribute(
        "onclick",
        "produto.Deletar(" + this.arrayProdutos[i].id + ")"
      );
      td_del.appendChild(imagem);
    }
  }

  Cancelar() {
    document.getElementById("pdnome").value = ""; // Assim que essa função for acionada ela ira pegar o valor do nome do produto e/ou preço dele para cancelar.
    document.getElementById("pdpreco").value = "";
  }

  Deletar(id) {
    let tbody = document.getElementById("tbody");
    for (let i = 0; i < this.arrayProdutos.length; i++) {
      if (this.arrayProdutos[i].id == id) {
        this.arrayProdutos.slice(i, 1);
        tbody.deleteRow(i);
      }
    }
    alert("O item foi apagado com sucesso");
  }
}

var produto = new Produto();
