# Tech-Quiz-Test-Suite

![License: MIT](https://img.shields.io/badge/License-MIT-blue)

## Table of Contents

- [Technologies Used](#technologies-used)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Screenshots](#screeshots)
- [License](#license)
- [Questions](#questions)

## Technologies Used

- Frontend: React, TypeScript
- Testing Framework: Cypress

## Description

The Tech Quiz Application is built with a React frontend, serving questions randomly to users and tracking their scores. It uses Cypress for automated testing, ensuring the functionality of the quiz from start to finish including quiz initiation, question interaction, quiz completion, and quiz restart.

## Installation

1. Clone the Respository:
    ```
    git clone https://github.com/your-username/tech-quiz-test-suite.git
    cd tech-quiz-test-suite
    ```

2. Install Dependencies:
    ```
    npm install
    ```

3. Environment Variables:

- Create a .env file in the root of your project and add the following line:
    ```
    MONGODB_URI='mongodb://127.0.0.1:27017/techquiz'
    ```

4. Build and Seed:
    ```
    npm run build
    npm run seed
    ```

5. Start the application:
    ```
    npm run start:dev
    ```

The application should now be running on http://127.0.0.1:3001/.

## Usage

1.  To run the tests in command line, use the following commands:
    ```
    npm run test
    ```

2. To run the tests in Cypress, use the following commands:
    ```
    npm run cypress
    ```

## Tests

These are the core test cases included in the Cypress test suite:

-   Start Quiz and Display First Question:
    -   Ensures the quiz initiates and the first question card is visible.

-   Answer a Question:
    -   Confirms that users can click an answer option after starting the quiz.

-   Complete the Quiz:
    -   Simulates answering a series of questions and verifies the final score display.

-   Restart Quiz After Completion:
    -   Verifies the quiz can be restarted after completing and viewing the final score.

## Screenshots

## License

Copyright (c) 2024 ASgithub11

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Questions

If you have any questions, reach me on Github: https://github.com/ASgithub11

or email me here at aishasiddiqa151@gmail.com
