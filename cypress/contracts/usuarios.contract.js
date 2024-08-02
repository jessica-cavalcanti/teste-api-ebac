const Joi = require ('joi')



const usuariosSchema = Joi.object({
     
    usuarios: Joi.array().items({
        nome: Joi.string(),
        email: Joi.string(),
        password: Joi.string(),
        administrador: Joi.string(),
        _id: Joi.string(),
    }),
    quantidade: Joi.number()
})
export default usuariosSchema;
/// <reference types="cypress" />
describe('Testes da Funcionalidade Usuarios', () => {

  it('Deve validar contrato de usuários - GET', () => {
    cy.request({
      method: 'GET',
      url: 'usuarios'
    });
  });

});
it.only('Deve listar usuários cadastrados - GET', () => {
  cy.request({
    method: 'GET',
    url: 'usuarios'
  });

});
it('Deve cadastrar um usuário com sucesso', () => {
  //TODO: 
});
it('Deve validar um usuário com email inválido', () => {
  //TODO: 
});
it('Deve editar um usuário previamente cadastrado', () => {
  //TODO: 
});
it('Deve deletar um usuário previamente cadastrado', () => {
  //TODO: 
});
;
