// Calculator Names
const MORTGAGE = 'Mortgage';
const LOAN = 'Loan';
const INTEREST = 'Interest';
const RETURN_ON_INVESTMENT = 'ROI';
const SALARY = 'Salary';

// Calculators HTML
const MORTGAGE_HTML = `
<h3 class="calculator-title">Mortgage</h3>
<form class="calculator-form">
  <div class="input-text">
    <label for="home-price">Home Price</label>
    <input id="home-price" type="text" placeholder="$300000.00">
  </div>
  <div class="input-text">
    <label for="returned">Down Payment</label>
    <input id="down-payment" type="text" placeholder="20%">
  </div>
  <div class="input-text">
    <label for="term">Loan Term</label>
    <input id="term" type="text" placeholder="30 years">
  </div>
  <div class="input-text">
    <label for="interest">Interest Rate</label>
    <input id="interest" type="text" placeholder="3.00%">
  </div>
</form>
<button class="btn-calculate">
  <p>Calculate</p>
</button>
`;

const LOAN_HTML = `
<h3 class="calculator-title">Loan</h3>
<form class="calculator-form">
  <div class="input-text">
    <label for="amount">Loan Amount</label>
    <input id="amount" type="text" placeholder="$100000.00">
  </div>
  <div class="input-text">
    <label for="term">Loan Term</label>
    <input id="term" type="text" placeholder="10 years">
  </div>
  <div class="input-text">
    <label for="interest">Interest Rate</label>
    <input id="interest" type="text" placeholder="5.00%">
  </div>
</form>
<button class="btn-calculate">
  <p>Calculate</p>
</button>
`;

const INTEREST_HTML = `
<h3 class="calculator-title">Interest</h3>
<form class="calculator-form">
  <div class="input-text">
    <label for="principal">Starting Principal</label>
    <input id="principal" type="text" placeholder="$20000.00">
  </div>
  <div class="input-text">
    <label for="contribution">Annual Contribution</label>
    <input id="contribution" type="text" placeholder="$5000.00">
  </div>
  <div class="input-text">
    <label for="interest">Interest Rate</label>
    <input id="interest" type="text" placeholder="5.00%">
  </div>
  <div class="input-text">
    <label for="after">After</label>
    <input id="after" type="text" placeholder="5 years">
  </div>
  <div class="input-text">
    <label for="tax">Tax Rate</label>
    <input id="tax" type="text" placeholder="0%">
  </div>
  <div class="input-text">
    <label for="inflation">Inflation Rate</label>
    <input id="inflation" type="text" placeholder="2%">
  </div>
</form>
<button class="btn-calculate">
  <p>Calculate</p>
</button>
`;

const RETURN_ON_INVESTMENT_HTML = `
<h3 class="calculator-title">Return on Investment</h3>
<form class="calculator-form">
  <div class="input-text">
    <label for="invested">Amount Invested</label>
    <input id="invested" type="text" placeholder="$1000.00">
  </div>
  <div class="input-text">
    <label for="returned">Amount Returned</label>
    <input id="returned" type="text" placeholder="$2500.00">
  </div>
  <div class="input-text">
    <label for="invested">Investment Length</label>
    <input id="invested" type="text" placeholder="2.5">
  </div>
</form>
<button class="btn-calculate">
  <p>Calculate</p>
</button>
`;

const SALARY_HTML = `
<h3 class="calculator-title">Salary</h3>
<form class="calculator-form">
  <div class="input-text">
    <label for="amount">Salary Amount</label>
    <input id="amount" type="text" placeholder="$30 per hour">
  </div>
  <div class="input-text">
    <label for="hours">Hours per Week</label>
    <input id="hours" type="text" placeholder="40">
  </div>
  <div class="input-text">
    <label for="days">Days per Week</label>
    <input id="days" type="text" placeholder="5">
  </div>
  <div class="input-text">
    <label for="holidays">Holidays per Year</label>
    <input id="holidays" type="text" placeholder="10">
  </div>
  <div class="input-text">
    <label for="vacations">Vacations per Year</label>
    <input id="vacations" type="text" placeholder="15">
  </div>
  <div class="input-text">
    <label for="inflation">Inflation Rate</label>
    <input id="inflation" type="text" placeholder="2%">
  </div>
</form>
<button class="btn-calculate">
  <p>Calculate</p>
</button>
`;