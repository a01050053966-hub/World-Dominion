let money = 0;
let power = 10;
let country = "";

function startGame() {
  country = document.getElementById("countrySelect").value;

  document.getElementById("menu").style.display = "none";
  document.getElementById("game").style.display = "block";

  document.getElementById("countryName").innerText = "국가: " + country;
  updateUI();
}

function earnMoney() {
  money += 10;
  updateUI();
}

function upgrade() {
  if (money >= 20) {
    money -= 20;
    power += 5;
  } else {
    alert("돈 부족");
  }
  updateUI();
}

function attack() {
  let enemy = Math.floor(Math.random() * 20);

  if (power > enemy) {
    money += 30;
    alert("승리!");
  } else {
    money -= 10;
    alert("패배...");
  }

  updateUI();
}

function updateUI() {
  document.getElementById("money").innerText = money;
  document.getElementById("power").innerText = power;
}
