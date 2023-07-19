document.getElementById('bmiForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const gender = document.getElementById('gender').value;

  if (!isNaN(height) && !isNaN(weight) && height>0 && weight>0) {
    const bmi = calculateBMI(height, weight);
    const category = getBMICategory(bmi, gender);
    const summary = getSummaryCategory(category);

    displayBMIResult(bmi, category, summary);
  } else {
    alert('Please enter valid height and weight.');
  }
});

const calculateBMI = (height, weight) => {
  const heightInMeters = height / 100;
  return weight / (heightInMeters * heightInMeters);
};

const getBMICategory = (bmi, gender) => {
  if (gender === 'male') {
    if (bmi < 18.5) return 'Kurus';
    if (bmi >= 18.5 && bmi < 25) return 'Normal';
    if (bmi >= 25 && bmi < 30) return 'Gemuk';
    return 'Obesitas';
  } else {
    if (bmi < 18.5) return 'Kurus';
    if (bmi >= 18.5 && bmi < 24.9) return 'Normal';
    if (bmi >= 25 && bmi < 30) return 'Gemuk';
    return 'Obesitas';
  }
};

const getSummaryCategory = (category) => {
  if(category === 'Kurus'){
    return '';
  } else if(category === 'Normal'){
    return '';
  } else if(category === 'Gemuk'){
    return '';
  } else {
    return '';
  }
};

const displayBMIResult = (bmi, category, summary) => {
  const resultDisplay = document.getElementById('resultDisplay');
  resultDisplay.innerHTML = `
    <p>BMI Anda: <strong>${bmi.toFixed(2)}</strong></p>
    <p>Kategori: <strong>${category}</strong></p>
    <p>Penjelasan: <br>${summary} </p>
  `;
};