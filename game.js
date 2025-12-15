//! generate random number between 1-20: multip with 20 and use ceil.

let random = Math.ceil(Math.random() * 20)
console.log(random)

let message = document.querySelector(`.msg`);

let myScore = 10
let topScore = 0;

//* after clicking CHECK button.

// document.querySelector(`.check`).onclick = () =>{} this works too...
document.querySelector(`.check`).addEventListener(`click`, () => {
    const guess = document.querySelector(`.guess`).value;
    //*icinin bos olup olmadigini kontrol etme
    if (!guess) {
        message.textContent = `Enter a Number`
    } else if (guess == random) {
        message.textContent = `WELL DONE 🥳...`
        document.querySelector(`body`).style.backgroundColor = `green`;
        document.querySelector(`.number`).textContent = `${random}`;
        document.querySelector(`.check`).disabled = true;
        //! top score update

            if (myScore > topScore) {
                topScore = myScore
                document.querySelector(`.top-score`).textContent = topScore
            }
    } else {
        //? tahmin yanlis ise : score azalt, 
        if (myScore > 1) { //1 den asagi dusmemeli son hakta tekrar hata yaparsam else dusmem gerekiyor ki kaybedeyim
            myScore--;
            document.querySelector(`.my-score`).textContent = myScore
            guess < random ? message.textContent = `Increase` : message.textContent = `Decrease`
        }
        else {
            message.textContent = `Game Over 😔`
            document.querySelector(`body`).style.backgroundColor = `red`
            document.querySelector(`.my-score`).textContent = 0
            document.querySelector(`.check`).disabled = true;


        }
    }
})


//* after pressing again button
document.querySelector(`.again`).onclick = () => {
    random = Math.ceil(Math.random() * 20)
    console.log(random)
    message.textContent = `New Game Starting Again`
    document.querySelector(`body`).style.backgroundColor = `#2d3436`
    document.querySelector(`.number`).textContent = `?`
    document.querySelector(`.guess`).value = ``;
    myScore = 10;
    document.querySelector(`.my-score`).textContent = myScore
    document.querySelector(`.check`).disabled = false;

}  