const grid = document.getElementById("container");

function addCard(code, tag) {
  grid.innerHTML += `
    <div class="card">
      <div class="content">
        <img class="logo" src="./aws_logo.png" />
        <h2>$25 Credit</h2>
        <p class="code">${code}</p>
        <p>aws.com/awscredits</p>
        <p>Questions? <img class="twitter" src="./twitter.png"></img> YOURTWITTER</p>
      </div>
      <p class="row-tag">${tag}</p>
    </div>
  `;
}


// Step 1: set startingRow to the value of the excel row where you started to highlight
let startingRow = 1;

// Step 2: paste the block of codes between the backticks
const codesBlock = `
`;

const PageSize = 8;
let pageBreakCount = 1;

const codes = codesBlock.split(/\r?\n/).filter(code => code.length > 1);
for (let code of codes) {
  addCard(code, startingRow);
  startingRow++;
  pageBreakCount++;

  if (pageBreakCount > PageSize) {
    grid.innerHTML += `
      <div class="page-break"></div>
    `;
    pageBreakCount = 1;
  }
}
