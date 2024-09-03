describe("Find buttons", function () {
  it('Find buttons', function () {
    cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
    cy.contains('Sign up');
    cy.get('a[href*="https://www.facebook.com/Hillel.IT.School"]').should('have.attr', 'href').and('include', 'https://www.facebook.com/Hillel.IT.School');
    cy.get('a[href*="https://t.me/ithillel_kyiv"]').should('have.attr', 'href').and('include', 'https://t.me/ithillel_kyiv');
    cy.get('a[href*="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"]').should('have.attr', 'href').and('include', 'https://www.youtube.com/user/HillelITSchool?sub_confirmation=1');
    cy.get('a[href*="https://www.instagram.com/hillel_itschool/"]').should('have.attr', 'href').and('include', 'https://www.instagram.com/hillel_itschool/');
    cy.get('a[href*="https://www.linkedin.com/school/ithillel/"]').should('have.attr', 'href').and('include', 'https://www.linkedin.com/school/ithillel/');
    cy.get('a[href*="https://ithillel.ua"]').should('have.attr', 'href').and('include', 'https://ithillel.ua');
    cy.get('a[href*="mailto:developer@ithillel.ua"]').should('have.attr', 'href').and('include', 'mailto:developer@ithillel.ua');
});
});
