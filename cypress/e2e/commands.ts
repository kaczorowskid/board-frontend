/* eslint-disable quotes */
export const commands = {
  'System open page': (url: string) => {
    cy.visit(url);
  },
  'I fill the input': (id: string, value: string) => {
    cy.get(`#${id}`).type(value);
  },
  'I clear the input': (id: string) => {
    cy.get(`#${id}`).clear();
  },
  'I click the login button': () => {
    cy.get("button[type='submit']").click();
  },
  'Check validation': (field: string, validation: string) => {
    cy.get(`#${field}_help`).contains(validation);
  },
  'Check if validation message is visible': (
    field: string,
    status: 'isVisible' | 'isNotVisible'
  ) => {
    if (status === 'isVisible') {
      cy.get(`#${field}_help`).should('exist');
    } else {
      cy.get(`#${field}_help`).should('not.exist');
    }
  },
  'Check if redirect on dashboard': () => {
    cy.location('pathname').should('eq', '/dashboard');
  }
} as const;
