  
const btnClientes = document.querySelector('#btnClientes')
const modalCliente = document.querySelector('#modalCliente')
const fecharCliente = document.querySelector('#fecharCliente')

btnClientes.addEventListener('click', () => {
    modalCliente.classList.add('mostrar')
})

fecharCliente.addEventListener('click', () => {
    modalCliente.classList.remove('mostrar')
})

const btnProdutos = document.querySelector('#btnProdutos')
const modalProduto = document.querySelector('#modalProduto')
const fecharProduto = document.querySelector('#fecharProduto')

btnProdutos.addEventListener('click', () => {
    modalProduto.classList.add('mostrar')
})

fecharProduto.addEventListener('click', () => {
    modalProduto.classList.remove('mostrar')
})

const cadCliente = document.querySelector('#cadCliente')

cadCliente.addEventListener('click', () => {

    let nome = document.querySelector('#nome').value
    let email = document.querySelector('#email').value
    let telefone = document.querySelector('#telefone').value
    let cpf = document.querySelector('#cpf').value
    let cidade = document.querySelector('#cidade').value
    let estado = document.querySelector('#estado').value

    let dadosCliente = {
        
        nome,
        email,
        telefone,
        cpf,
        cidade,
        estado,

    }

    let convertDadosCliente = JSON.stringify(dadosCliente);

    if (localStorage.idClienteAtual) {
        localStorage.idClienteAtual = Number(localStorage.idClienteAtual) + 1;
        localStorage.setItem(`Cliente: ${localStorage.idClienteAtual}`, convertDadosCliente);
    }else {
        localStorage.idClienteAtual = 1;
        localStorage.setItem(`Cliente: ${localStorage.idClienteAtual}`, convertDadosCliente);
    }

    alert(` ${dadosCliente.nome} Cadastro realizado com sucesso!`);
    document.querySelector('#formCliente').reset();

})

const cadProduto = document.querySelector('#cadProduto')

cadProduto.addEventListener('click', () => {

    let produto = document.querySelector('#produto').value
    let codigo = document.querySelector('#codigo').value
    let categoria = document.querySelector('#categoria').value
    let quantidade = document.querySelector('#quantidade').value

    let dadosProduto = {

        produto,
        codigo,
        categoria,
        quantidade,

    }

    let convertDadosProduto = JSON.stringify(dadosProduto)    
    
    if (localStorage.idProdutoAtual) {
        localStorage.idClienteAtual = Number(localStorage.idProdutoAtual) + 1;
        localStorage.setItem(`Produto: ${localStorage.idProdutoAtual}`, convertDadosProduto);
    }else {
        localStorage.idProdutoAtual = 1;
        localStorage.setItem(`Produto: ${localStorage.idProdutoAtual}`, convertDadosProduto);
    }

    alert(`${dadosProduto.produto} Cadastro realizado com sucesso!`);
    document.querySelector('#formCliente').reset();

})