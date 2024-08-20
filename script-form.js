document.addEventListener("DOMContentLoaded", function () {
  var cardImage = document.getElementById("cardImage");
  var popup = document.getElementById("popup");
  var overlay = document.getElementById("overlay");
  var closeButton = document.getElementById("closeButton");
  var sendButton = document.getElementById("sendButton");

  cardImage.addEventListener("click", function () {
    overlay.style.display = "block";
    popup.style.display = "block";
    setTimeout(function () {
      overlay.style.opacity = "1";
    }, 10);
  });

  closeButton.addEventListener("click", function () {
    overlay.style.opacity = "0";
    setTimeout(function () {
      overlay.style.display = "none";
      popup.style.display = "none";
    }, 300);
  });

  // Закрытие попапа при клике вне его
  window.addEventListener("click", function (event) {
    if (event.target === overlay) {
      overlay.style.opacity = "0";
      setTimeout(function () {
        overlay.style.display = "none";
        popup.style.display = "none";
      }, 300);
    }
  });

  // Закрытие попапа при клике на sendButton
  sendButton.addEventListener("click", function () {
    overlay.style.opacity = "0";
    setTimeout(function () {
      overlay.style.display = "none";
      popup.style.display = "none";
    }, 300);
  });
});
