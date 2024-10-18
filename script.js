document.addEventListener("DOMContentLoaded", function() {
  const accountContents = document.querySelector('.account-contents');
  const passwordContents = document.querySelector('.password-contents');
  const accountButton = document.querySelector("#accountButton");
  const passwordButton = document.querySelector("#passwordButton");

  if (accountContents && passwordContents && accountButton && passwordButton) {
    accountContents.style.display = 'block';
    passwordContents.style.display = 'none';
    accountButton.classList.add("bg", "active");
    passwordButton.classList.remove("bg", "active");

    accountButton.addEventListener("click", function() {
      toggleItem("account-contents");
    });

    passwordButton.addEventListener("click", function() {
      toggleItem("password-contents");
    });
  } else {
    console.error("One or more elements not found");
  }
});

function toggleItem(item) {
  const accountContents = document.querySelector('.account-contents');
  const passwordContents = document.querySelector('.password-contents');
  const accountButton = document.querySelector("#accountButton");
  const passwordButton = document.querySelector("#passwordButton");

  if (item === "account-contents") {
    accountContents.style.display = 'block';
    passwordContents.style.display = 'none';
    accountButton.classList.add("bg", "active");
    passwordButton.classList.remove("bg", "active");
  } else if (item === "password-contents") {
    accountContents.style.display = 'none';
    passwordContents.style.display = 'block';
    accountButton.classList.remove("bg", "active");
    passwordButton.classList.add("bg", "active");
  }
}