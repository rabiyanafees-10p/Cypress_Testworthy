// Fixture.js
export class Fixture {
  load() {
    // Load fixture data
    cy.fixture('loginData').then((data) => {
      this.email = data.email;
      this.password = data.password;
    });
  }

  clear() {
    // Clear fixture data
    this.email = '';
    this.password = '';
  }
}
