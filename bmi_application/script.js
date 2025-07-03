const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const calculateBtn = document.getElementById("calculate-btn");
const resultCard = document.getElementById("result-card");
const bmiValue = document.getElementById("bmi-value");
const bmiCategory = document.getElementById("bmi-category");

calculateBtn.addEventListener("click", () => {
  const weight = parseFloat(weightInput.value);
  const heightCm = parseFloat(heightInput.value);

  if (!weight || !heightCm) {
    alert("Please enter valid weight and height.");
    return;
  }

  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);
  const bmiRounded = bmi.toFixed(1);

  let categoryText = "";
  if (bmi < 18.5) {
    categoryText = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    categoryText = "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    categoryText = "Overweight";
  } else {
    categoryText = "Obesity";
  }

  bmiValue.textContent = bmiRounded;
  bmiCategory.textContent = categoryText;
  resultCard.style.display = "block";
});
