const btn = document.querySelector(".talk");
const content = document.querySelector(".content");
const inputText = document.getElementById("inputText");

btn.addEventListener("click", () => {
  readOutLoud(inputText.value);
});

// btn.addEventListener("click", () => {
//   recongnition.start();
// });

function readOutLoud(text) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = text;

  //   if (text.includes("how are you")) {
  //     const finalText = greetings[Math.floor(Math.random() * greetings.length)];
  //     speech.text = finalText;
  //     content.textContent = finalText;
  //   }

  speech.volume = 1;
  speech.rate = 0.3;
  speech.pitch = 10;

  window.speechSynthesis.speak(speech);
}
