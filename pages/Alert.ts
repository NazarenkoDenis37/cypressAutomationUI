class Alert{
    private alertTextButton:string= "Click for JS Alert"
    private buttonSelector:string = "button"
    private buttonPromptText:string = "Click for JS Prompt"
    //popupWindowText
    private jsConfirmWindowTetx:string = "I am a JS Confirm"
    private jsAlertText:string = "I am a JS Alert"

    private resultSelector:string = '#result'
    private resultTextJSAlert:string = "You successfully clicked an alert"
    private resultTextJSAlertConfirmOK:string = "You clicked: Ok"
    private resultTextJSAlertConfirmCancel:string = "You clicked: Cancel"
    private jsConfirmText:string = "Click for JS Confirm"
    //private jsPromptText:string = "Click for JS Prompt"
    

    jsAlert(){
        cy.contains(this.buttonSelector, this.alertTextButton).click()
        cy.on('window:alert',(text)=>{
            expect(text).to.equal(this.jsAlertText)
        })
        cy.on('window:confirm',()=> true)
        cy.get(this.resultSelector).should('have.text', this.resultTextJSAlert)
    }
    jsConfirmOk(){
        cy.contains(this.buttonSelector, this.jsConfirmText).click()
        cy.on('window:alert',(textAlert)=>{
            expect(textAlert).to.equal(this.jsConfirmWindowTetx)
        })
        cy.on('window:confirm',()=> true)
        cy.get(this.resultSelector).should('have.text', this.resultTextJSAlertConfirmOK)
    }
    jsConfirmCancel(){
        cy.contains(this.buttonSelector, this.jsConfirmText).click()
        cy.on('window:alert',(textAlert)=>{
            expect(textAlert).to.equal(this.jsConfirmWindowTetx)
        })
        cy.on('window:confirm',()=> false)
        cy.get(this.resultSelector).should('have.text', this.resultTextJSAlertConfirmCancel)
    }
    jsPrompt(){
        const text = "Hello World!"
        cy.window().then(window=>{
            cy.stub(window, "prompt").returns(text)
            cy.contains(this.buttonSelector,this.buttonPromptText).click()
        })
        cy.get(this.resultSelector).should('have.text', 'You entered: Hello World!')
    }
}

export const AlertPage = new Alert();