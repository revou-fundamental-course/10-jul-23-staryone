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

document.getElementById('bmiForm').addEventListener('reset', (e) => {
  e.preventDefault();

  const resultDisplay = document.getElementById('resultDisplay');
  resultDisplay.innerHTML = ``;

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
    return `
    Jika BMI Anda kurang dari 18.5, 
    konsultasikan dengan dokter atau ahli gizi. 
    Tingkatkan asupan kalori dengan makanan bergizi dan 
    lakukan latihan fisik teratur.
    `;
  } else if(category === 'Normal'){
    return 'Pertahankan pola makan seimbang dan lakukan latihan fisik teratur.';
  } else if(category === 'Gemuk'){
    return `Kurangi makanan tinggi lemak, gula, dan garam. 
    Fokus pada makanan sehat dengan serat tinggi dan tingkatkan aktivitas fisik.`;
  } else {
    return `Konsultasikan dengan dokter atau ahli gizi. 
    Rencanakan program penurunan berat badan yang sehat dengan 
    perbaikan pola makan dan 
    peningkatan aktivitas fisik secara bertahap.`;
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