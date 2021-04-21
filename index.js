window.onload = () => {
  cancelReloadOfForm();
  startProgressBar();
  makeClickGiveNow();
  makeInputMask();
  shareMessageOfTwitterAndFacebook();
  saveDonationForLater();
};
function cancelReloadOfForm() {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => event.preventDefault());
}
function animateOfProgressBar(from, time = 20) {
  const elem = document.getElementById("donation__progress--value");
  let width = elem.style.width.replace("%", "");
  var id = setInterval(frame, time);
  function frame() {
    if (width == from || width >= 100) {
      clearInterval(id);
      return;
    }
    width++;
    elem.style.width = width + "%";
  }
}
function startProgressBar() {
  animateOfProgressBar(68);
}

function makeInputMask() {
  const element = document.getElementById("donation__input-value");
  IMask(element, {
    mask: "${000}",
  });
}
// Can do % of input and total
function makeClickGiveNow() {
  const element = document.getElementById("donation__button-givenow");
  element.onclick = function () {
    animateOfProgressBar(100, 40);
  };
}

function shareMessageOfTwitterAndFacebook() {
  const element = document.getElementById(
    "donation__footer-button-tellfriends"
  );
  element.onclick = () =>
    showMessage("Shared Yay, I donated! on Facebook and Twitter.", "3000");
}

function saveDonationForLater() {
  const element = document.getElementById(
    "donation__footer-button-saveforlater"
  );
  element.onclick = () => showMessage("Donation saved!", "3000");
}

function showMessage(text, time) {
  Toastify({
    text: text,
    duration: time,
  }).showToast();
}
