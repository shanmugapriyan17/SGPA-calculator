const subjectsContainer = document.querySelector('.subjects-container');
const addSubjectBtn = document.getElementById('add-subject');
const calculateBtn = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

function createSubjectRow() {
  const row = document.createElement('div');
  row.classList.add('subject-row');
  row.innerHTML = `
    <input type="text" placeholder="Subject Name" required>
    <input type="number" placeholder="Credits" min="0" required>
    <select required>
      <option value="">Grade</option>
      <option value="10">O</option>
      <option value="9">A+</option>
      <option value="8">A</option>
      <option value="7">B+</option>
      <option value="6">B</option>
      <option value="5">C</option>
      <option value="0">F</option>
    </select>
    <button class="remove">×</button>
  `;
  subjectsContainer.appendChild(row);

  row.querySelector('.remove').addEventListener('click', () => row.remove());
}

// Add initial row
createSubjectRow();

addSubjectBtn.addEventListener('click', createSubjectRow);

calculateBtn.addEventListener('click', () => {
  let totalCredits = 0;
  let weightedSum = 0;
  const rows = document.querySelectorAll('.subject-row');
  rows.forEach(row => {
    const credit = parseFloat(row.children[1].value);
    const grade = parseFloat(row.children[2].value);
    if (!isNaN(credit) && !isNaN(grade)) {
      totalCredits += credit;
      weightedSum += credit * grade;
    }
  });
  const sgpa = totalCredits ? (weightedSum / totalCredits).toFixed(2) : 0;
  resultDiv.textContent = `Your SGPA: ${sgpa}`;
});
