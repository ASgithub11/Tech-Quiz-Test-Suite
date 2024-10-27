describe('Tech Quiz', () => {
    // Before each test, visit the root URL to start fresh
    beforeEach(() => {
        cy.visit('/');
    });

    // Check if the quiz starts and the first question is displayed
    it('should start the quiz and display the first question', () => {
        // Find  and click the button with the text 'Start Quiz'
        cy.get('button').contains('Start Quiz').click();
        cy.get('.card').should('be.visible');
        cy.get('h2').should('be.visible');
    });

    // Answering a question
    it ('should allow answering a question', () => {
        // Start the quiz by clicking the 'Start Quiz' button
        cy.get('button').contains('Start Quiz').click();
        cy.get('button').contains('2').click();
    });
    
    // Display final score upon quiz completion
    it ('should display the final score when all questions are answered', () => {
        // Start the quiz by clicking the 'Start Quiz' button
        cy.get('button').contains('Start Quiz').click();
        // Loop through each question by clicking an answer button with the text '1'
        for(let i = 0; i < 10; i++) {
            cy.get('button').contains('1').click();
        }
        // Check if the quiz completion message "Quiz Completed" is displayed
        cy.get('.card').contains('Quiz Completed');
        // Ensure that the final score is displayed
        cy.get('.alert-success').should('be.visible').and('contain','Your score:');
    });

    // Restart the quiz after completion
    it ('should restart the quiz after completion', () => {
        // Start the quiz by clicking the 'Start Quiz' button
        cy.get('button').contains('Start Quiz').click();
        // Loop through each question by clicking an answer button with the text '1'
        for(let i = 0; i < 10; i++) {
            cy.get('button').contains('1').click();
        }
        // Check if the quiz completion message "Quiz Completed" is displayed
        cy.get('.card').contains('Quiz Completed');
        // Ensure that the final score is displayed
        cy.get('.alert-success').should('be.visible').and('contain','Your score:');
        // Ensure that the 'Take New Quiz' button is displayed
        cy.get('button').contains('Take New Quiz').should('be.visible');
        // Click the 'Take New Quiz' button to restart the quiz
        cy.get('button').contains('Take New Quiz').click();
        // Check that the quiz card is displayed again for a new quiz
        cy.get('.card').should('be.visible');
        // Ensure that the question (h2) is displayed
        cy.get('h2').should('be.visible');       
    });
});
