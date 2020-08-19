//Javascript - Objeto Endereço

//Criar um objeto endereço
//Rua
//Cidade
//Cep
//exibirEndereço(endereço)
let endereco = {
  Rua: 'Carlos Germano Nauman',
  Cidade: 'Colatina',
  Cep: 29705-200
};

function exibirEndereco(endereco) {
  for (let chave in endereco)
  console.log(chave, endereco[chave])
}
exibirEndereco(endereco);
