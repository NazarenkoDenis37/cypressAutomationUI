describe('EXCEL', () => {
    it('reading excel', () => {
        cy.readingXlsx('cypress/fixtures/excelData.xlsx').then((data) =>{
            cy.log(data)
            cy.log(data[0])
            cy.log(data[0].data)
            cy.log(data[0].data[0])
            cy.log(data[0].data[1])
            cy.log(data[0].data[2])
        })
    });
    it('write data to json document', () => {
        cy.readingXlsx('cypress/fixtures/excelData.xlsx').then((data) =>{
            cy.log(data)
            cy.log(data[0])
            cy.log(data[0].data)
            cy.log(data[0].data[0])
            cy.log(data[0].data[0][0])
            cy.log(data[0].data[0][1])
            let email = data[0].data[0][0]
            let password = data[0].data[0][1]
            cy.writeFile('cypress/fixtures/login.json',{
                email: email,
                password: password
            })
        })
    });
    it.only('write data to json document and then use it to login', () => {
        cy.readingXlsx('cypress/fixtures/excelData.xlsx').then((data) =>{
            cy.log(data)
            cy.log(data[0])
            cy.log(data[0].data)
            cy.log(data[0].data[0])
            cy.log(data[0].data[0][0])
            cy.log(data[0].data[0][1])
            let email = data[0].data[0][0]
            let password = data[0].data[0][1]
            cy.writeFile('cypress/fixtures/login.json',{
                email: Cypress.env('email'),
                password: Cypress.env('password')
            })
            cy.fixture('login.json').then(login=>{
                cy.log(login)
                cy.apiLogin(login.email, login.password)
                cy.visit('https://stage.pasv.us/profile/65c2da8504369c018a35764e')
                cy.contains('Denis Nazarenko')
            })
        })
    });
});