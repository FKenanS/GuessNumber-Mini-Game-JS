//* pc ye sayı tutturduk 1-20 arasında olabilmesi için 20 ile çarpıp yukarı (ceil) yuvarladık

let rastgeleSayi = Math.ceil(Math.random() * 20);
console.log(rastgeleSayi);

let message = document.querySelector(".msg");

let myScore = 10;
let enYuksekSkor = 0;

//* her check butonuna basınca olacaklar

//    document.querySelector(".check").onclick=()=>{}
document.querySelector(".check").addEventListener("click", () => {
  const tahmin = document.querySelector(".guess").value;

  //?tahmin girilmeden check e basılmasın
  if (!tahmin) {
    message.textContent = "lütfen bir tahmin giriniz";
  } else if (tahmin == rastgeleSayi) {
    //?tahmin doğruysa

    message.textContent = "Tebrikler Bildiniz..🎉";
    document.querySelector("body").style.backgroundColor = "green";

    document.querySelector(".number").textContent = rastgeleSayi;

    document.querySelector(".check").disabled = true;

    //!!!!!!! enYüksekSkor u güncelle

    if (myScore > enYuksekSkor) {
      enYuksekSkor = myScore;

      document.querySelector(".top-score").textContent = enYuksekSkor;
    }
  } else {
    //?tahmin yanlışsa
    //?myScore 1 den aşağı düşmemeli, 1 hakkım varken yine yanlış tahminde bulunursam else e düşmeliyim
    if (myScore > 1) {
      myScore--;

      document.querySelector(".my-score").textContent = myScore;

      tahmin > rastgeleSayi
        ? (message.textContent = "Azalt")
        : (message.textContent = "Arttir");
    } else {
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".my-score").textContent = 0;

      message.textContent = "Oyunu kaybettiniz";
      document.querySelector(".check").disabled = true;
    }
  }
});

//* Again butonuna basınca olacaklar
document.querySelector(".again").onclick = () => {
  rastgeleSayi = Math.ceil(Math.random() * 20);
  console.log(rastgeleSayi);
  message.textContent = "Oyun yeni oyuncu için tekrar başlıyor";

  document.querySelector("body").style.backgroundColor = "#2d3436";

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";

  myScore = 10;

  document.querySelector(".my-score").textContent = myScore;
  document.querySelector(".check").disabled = false;
};


