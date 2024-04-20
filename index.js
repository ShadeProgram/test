var messageIndex = 0;
var messages = [
  "",
  "Sveiki!",
  "Néih hóu!",
  "Halo!"
];

document.getElementById("Selesai").addEventListener("click", function() {
  if (messageIndex < messages.length - 1) {
    messageIndex++;
    document.getElementById("teks").innerText = messages[messageIndex];
  } else {
    window.open("homepage.html");
  }
});
