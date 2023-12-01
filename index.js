function balanceRank(quantityVictory, quantityLoses) {
  let calculationRank = quantityVictory - quantityLoses;
  return calculationRank;
}

function calculateRank() {
  const quantityVictory = parseInt(document.getElementById('quantityVictory').value);
  const quantityLoses = parseInt(document.getElementById('quantityLoses').value);

  let MMR = balanceRank(quantityVictory, quantityLoses);
  let level = "";

  switch (true) {
    case MMR <= 10:
      level = "Ferro";
      break;

    case MMR >= 11 && MMR <= 20:
      level = "Bronze";
      break;

    case MMR >= 21 && MMR <= 50:
      level = "Prata";
      break;

    case MMR >= 51 && MMR <= 80:
      level = "Ouro";
      break;

    case MMR >= 81 && MMR <= 90:
      level = "Diamante";
      break;

    case MMR >= 91 && MMR <= 100:
      level = "Lendário";
      break;

    case MMR >= 101:
      level = "Imortal";
      break;
  }

  console.log(
    "O Herói tem saldo de vitórias de " + MMR + " partidas e está no rank " + level
  );

  document.getElementById('result').innerHTML = `O Herói tem saldo de vitórias de ${MMR} partidas e está no rank ${level}`;
}
