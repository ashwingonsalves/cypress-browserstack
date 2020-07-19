describe('BrowserStack Local Testing', () => {
    it('Successfully navigate to local URL', () => {
        cy.visit('http://bs-local.com:8080')
        cy.get('body').should('contain', 'Up and running')
        cy.screenshot({capture: 'fullPage'})
    })
})