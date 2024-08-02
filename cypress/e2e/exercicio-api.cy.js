/// <reference types="cypress" />

 import contrato from '../contracts/usuarios.contract'

 describe('Testes da Funcionalidade Usuarios', () => {
});
  
  it.only('Deve validar contrato de usuários - GET', () => {
    cy.request('usuarios').then(response =>{
      return contrato.validateAsync(response.body)
   
     });
    
  });

  it('Deve listar usuários cadastrados - GET', () => {
    cy.request({
      method: 'GET',
      url: 'usuarios'
    }).should((response) => {
      
      expect(response.status).to.equal(200)
      expect(response.body).to.have.property('usuarios')
    
  });

});

 it('Deve cadastrar um usuário com sucesso - POST', () => {
  let usuario = 'Jessica da ' + Math.floor(Math.random() * 100000)
   // Função para gerar uma string aleatória de determinado comprimento
function gerarStringAleatoria(comprimento) {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let resultado = '';
  const caracteresLength = caracteres.length;
  for (let i = 0; i < comprimento; i++) {
      resultado += caracteres.charAt(Math.floor(Math.random() * caracteresLength));
  }
  return resultado;
}

// Função para gerar um e-mail aleatório
function gerarEmailAleatorio() {
  const parteLocal = gerarStringAleatoria(10); // Parte antes do @
  const dominio = gerarStringAleatoria(8);    // Domínio do e-mail
  const extensao = 'com.br';                      // Extensão padrão, você pode alterar se quiser

  return `${parteLocal}@${dominio}.${extensao}`;
}

// Gerar e atribuir um e-mail aleatório à variável let
let emailAleatorio = gerarEmailAleatorio();

// Exibir o e-mail aleatório no console
console.log(emailAleatorio);

 

cy.cadastrarUsuario(usuario, emailAleatorio, 'teste', 'true')

  .should((response) => {
      
    expect(response.status).to.equal(201)
    expect(response.body.message).to.equal('Cadastro realizado com sucesso')
  
    });

  });
 

  it('Deve validar um usuário com email inválido - GET', () => {
    let usuario = 'Ada Qasim ' + Math.floor(Math.random() * 100000)
    cy.cadastrarUsuario(usuario, 'jessica@', 'teste', 'true')
  
     .should((response) => {
        
       expect(response.status).to.equal(400)
       expect(response.body.email).to.equal('email deve ser um email válido')
    
       });
  
   });

it('Deve editar um usuário previamente cadastrado - PUT', () => {
  let usuario = 'Ada Qasim ' + Math.floor(Math.random() * 100000)
  // Função para gerar uma string aleatória de determinado comprimento
function gerarStringAleatoria(comprimento) {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let resultado = '';
  const caracteresLength = caracteres.length;
  for (let i = 0; i < comprimento; i++) {
      resultado += caracteres.charAt(Math.floor(Math.random() * caracteresLength));
  }
  return resultado;
}

// Função para gerar um e-mail aleatório
function gerarEmailAleatorio() {
  const parteLocal = gerarStringAleatoria(10); // Parte antes do @
  const dominio = gerarStringAleatoria(8);    // Domínio do e-mail
  const extensao = 'com.br';                      // Extensão padrão, você pode alterar se quiser

  return `${parteLocal}@${dominio}.${extensao}`;
}

// Gerar e atribuir um e-mail aleatório à variável let
let emailAleatorio = gerarEmailAleatorio();

// Exibir o e-mail aleatório no console
console.log(emailAleatorio);
  cy.cadastrarUsuario(usuario, emailAleatorio, 'teste', 'true')
      .then(response => {
        let id = response.body._id
        
    cy.request({
      method: 'PUT',
      url: `usuarios/${id}`,
      body:  {
        "nome": usuario,
        "email": emailAleatorio,
        "password": "teste",
        "administrador": "true"
        }
    }).should((response) => {
        
       expect(response.status).to.equal(200)
       expect(response.body.message).to.equal('Registro alterado com sucesso')
      })
  
 
   });

     });

it('Deve deletar um usuário previamente cadastrado - DELETE', () => {
  let usuario = 'Ada Qasim ' + Math.floor(Math.random() * 100000)
  // Função para gerar uma string aleatória de determinado comprimento
function gerarStringAleatoria(comprimento) {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let resultado = '';
  const caracteresLength = caracteres.length;
  for (let i = 0; i < comprimento; i++) {
      resultado += caracteres.charAt(Math.floor(Math.random() * caracteresLength));
  }
  return resultado;
}

// Função para gerar um e-mail aleatório
function gerarEmailAleatorio() {
  const parteLocal = gerarStringAleatoria(10); // Parte antes do @
  const dominio = gerarStringAleatoria(8);    // Domínio do e-mail
  const extensao = 'com.br';                      // Extensão padrão, você pode alterar se quiser

  return `${parteLocal}@${dominio}.${extensao}`;
}

// Gerar e atribuir um e-mail aleatório à variável let
let emailAleatorio = gerarEmailAleatorio();

// Exibir o e-mail aleatório no console
console.log(emailAleatorio);
  cy.cadastrarUsuario(usuario, emailAleatorio, 'teste', 'true')
      .then(response => {
        let id = response.body._id
        
    cy.request({
      method: 'DELETE',
      url: `usuarios/${id}`,
      
    }).should((response) => {
        
       expect(response.status).to.equal(200)
       expect(response.body.message).to.equal('Registro excluído com sucesso')
      })
  


  });


 });
