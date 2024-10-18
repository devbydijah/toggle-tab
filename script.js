// Function to toggle between account and password views
function toggleItem(itemClass) {
  const accountContents = document.querySelector('.account-contents');
  const passwordContents = document.querySelector('.password-contents');
  const accountButton = document.querySelector("#accountButton");
  const passwordButton = document.querySelector("#passwordButton");

  if (itemClass === 'account-contents') {
    accountContents.style.display = 'block';
    passwordContents.style.display = 'none';
    accountButton.classList.add("active");
    passwordButton.classList.remove("active");
  } else if (itemClass === 'password-contents') {
    accountContents.style.display = 'none';
    passwordContents.style.display = 'block';
    accountButton.classList.remove("active");
    passwordButton.classList.add("active");
  }
}

// The account view is displayed by default
document.addEventListener("DOMContentLoaded", function() {
  const accountContents = document.querySelector('.account-contents');
  const passwordContents = document.querySelector('.password-contents');
  const accountButton = document.querySelector("#accountButton");
  const passwordButton = document.querySelector("#passwordButton");

  if (accountContents && passwordContents && accountButton && passwordButton) {
    accountContents.style.display = 'block';
    passwordContents.style.display = 'none';
    accountButton.classList.add("bg");
    accountButton.classList.add("active");

    passwordButton.classList.remove("bg");

    // Add event listeners to the buttons
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