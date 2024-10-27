import Quiz from '../../client/src/components/Quiz';

describe('Tech Quiz', () => {
    // Before each test, set up an API intercept for random questions
    beforeEach(() => {
        // Intercept the GET request to /api/questions/random
        cy.intercept({
            method: 'GET',
            url: '/api/questions/random'
        },
        {
            fixture: 'questions.json',  // Load the questions from the fixture
            statusCode: 200,            // Return a 200 status code
        }
        ).as('getRandomQuestion');
    })

    // Start the quiz and display the first question
    it('should start the quiz and display the first question', () => {
        cy.mount(<Quiz/>);                               // Mount the Quiz component
        cy.get('button').contains('Start Quiz').click(); // Click the Start Quiz button
        cy.get('.card').should('be.visible');            // The card should be visible
        cy.get('h2').should('be.visible');               // The question (h2) should be visible
    });
    
    // Allow the user to answer a question
    it ('should allow answering a question', () => {
        cy.mount(<Quiz/>);                               // Mount the Quiz component
        cy.get('button').contains('Start Quiz').click(); // Click the Start Quiz button
        cy.get('button').contains('2').click();          // Click the answer button labeled 2
        cy.get('h2').contains('Which of the following is a mutable data type in Python?');
    });

    // Complete the quiz from start to finish
    it ('should complete the quiz from start to finish', () => {
        cy.mount(<Quiz/>);                                  // Mount the Quiz component
        cy.get('button').contains('Start Quiz').click();    // Click the Start Quiz button
        cy.get('button').contains('2').click();             // Click the answer button 2
        cy.get('button').contains('3').click();             // Click the answer button 3
        cy.get('button').contains('3').click();             // Click the answer button 3
    });
    
    // Restart the quiz after completion
    it ('should restart the quiz after completion', () => {
        cy.mount(<Quiz/>);                                  // Mount the Quiz component
        cy.get('button').contains('Start Quiz').click();    // Click the Start Quiz button
        cy.get('button').contains('2').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains('3').click();
        // The quiz completion message and final score should be visible
        cy.get('.card').contains('Quiz Completed');
        cy.get('.alert-success').should('be.visible').and('contain','Your score: 3/3');
        // Check if the Take New Quiz button is visible and click it to start a new quiz
        cy.get('button').contains('Take New Quiz').should('be.visible');
        cy.get('button').contains('Take New Quiz').click();
        // The quiz should restart and the first question should be displayed
        cy.get('h2').contains('What is the output of print(2 ** 3)?');
    });
});
