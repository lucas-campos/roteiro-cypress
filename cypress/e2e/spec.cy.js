describe('TODOMvc App', () => {
  it('Verifica se app está abrindo', () => {
    cy.visit('')
  })

  it('Insere uma tarefa', () => {
    cy.visit(''); 

    cy.get('[data-cy=todo-input]')
      .type('TP2 de Engenharia de Software{enter}');

    cy.get('[data-cy=todos-list]')
      .children()
      .should('have.length', 1) 
      .first()
      .should('have.text', 'TP2 de Engenharia de Software'); 
  });

  it('Insere e deleta uma tarefa', () => {
    cy.visit('');

    cy.get('[data-cy=todo-input]')
      .type('TP2 de Engenharia de Software{enter}');

    cy.get('[data-cy=todos-list]')
      .children()
      .should('have.length', 1);

    cy.get('[data-cy=todos-list] > li [data-cy=remove-todo-btn]')
      .invoke('show')
      .click();

    cy.get('[data-cy=todos-list]')
      .children()
      .should('have.length', 0);
  });

  it('Filtra tarefas completas e ativas', () => {
    cy.visit(''); 

    cy.get('[data-cy=todo-input]')
      .type('TP2 de ES{enter}')
      .type('Prova de ES{enter}');

    cy.get('[data-cy=todos-list] > li [data-cy=toggle-todo-checkbox]')
      .first()
      .click();

    cy.get('[data-cy=filter-active-link')
      .click();
    cy.get('[data-cy=todos-list]')
      .children()
      .should('have.length', 1)
      .first()
      .should('have.text', 'Prova de ES');

    cy.get('[data-cy=filter-completed-link')
      .click();
    cy.get('[data-cy=todos-list]')
      .children()
      .should('have.length', 1)
      .first()
      .should('have.text', 'TP2 de ES');

    cy.get('[data-cy=filter-all-link')
      .click();
    cy.get('[data-cy=todos-list]')
      .children()
      .should('have.length', 2);
  });

  // Novos testes
  it('Insere duas tarefas', () => {
    cy.visit(''); 

    cy.get('[data-cy=todo-input]')
      .type('TP1 de Engenharia de Software 2024-Lucas{enter}');
    
    cy.get('[data-cy=todo-input]')
      .type('TP2 de Engenharia de Software 2024-Lucas{enter}');

    cy.get('[data-cy=todos-list]')
      .children()
      .should('have.length', 2) 
      .first()
      .should('have.text', 'TP1 de Engenharia de Software 2024-Lucas')
      .next()
      .should('have.text', 'TP2 de Engenharia de Software 2024-Lucas');
  });

  it('Insere e deleta duas tarefas', () => {
    cy.visit('');

    cy.get('[data-cy=todo-input]')
      .type('TP1 de Engenharia de Software para deletar{enter}');

    cy.get('[data-cy=todo-input]')
      .type('TP2 de Engenharia de Software para deletar{enter}');

    cy.get('[data-cy=todos-list]')
      .children()
      .should('have.length', 2);

    cy.get('[data-cy=todos-list] > li [data-cy=remove-todo-btn]')
      .first()
      .invoke('show')
      .click();

    cy.get('[data-cy=todos-list] > li [data-cy=remove-todo-btn]')
      .first()
      .invoke('show')
      .click();

    cy.get('[data-cy=todos-list]')
      .children()
      .should('have.length', 0);
  });

  it('Insere três tarefas e deleta apeans a primeira', () => {
    cy.visit('');

    cy.get('[data-cy=todo-input]')
      .type('TP1 de Engenharia de Software para deletar{enter}');

    cy.get('[data-cy=todo-input]')
      .type('TP2 de Engenharia de Software para deletar{enter}');

    cy.get('[data-cy=todo-input]')
      .type('TP3 de Engenharia de Software para deletar{enter}');
    
    cy.get('[data-cy=todos-list]')
      .children()
      .should('have.length', 3);

    cy.get('[data-cy=todos-list] > li [data-cy=remove-todo-btn]')
      .first()
      .invoke('show')
      .click();

    cy.get('[data-cy=todos-list]')
      .children()
      .should('have.length', 2);
  });
});