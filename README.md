# React Loan Interest Calculator



### Live here: https://loancalculatorreact.web.app/

## Features

- A user interface that allows a user to enter a loan amount and a
  loan duration in months which then displays the interest rate and the monthly payment.
- The user is able to enter the monetary amount and loan duration by using a slider.
- The calculated values is automatically updated as the slider is used - without requiring any
  further interaction by the user.
- The loan amount should be between 500 and 5000 \$ and the loan duration between 6
  and 24 months.
- The following API is used - `https://ftl-frontend-test.herokuapp.com/interest?amount=<amount>&numMonths=<numMonths>`<br/>
  This returns a JSON object with information about the monthly payment and the interest
  rates.
- User can see the history of inputs selected by him on the menu=>history.
- By clicking on particular history input, page navigates to home page with selected input which generates corresponding interest details.


### Prerequisites

Download and install npm

### Installing

Follow these steps to run this project in your local computer.

```
$ https://github.com/geekysrm/react-loan-interest-calculator.git
$ cd react-loan-interest-calculator
$ npm i
```

Now, to run the project on port `3000`, run:

```
$ npm start
```

Go to `http://localhost:3000` to view the app.

## Built With

- ReactJS
