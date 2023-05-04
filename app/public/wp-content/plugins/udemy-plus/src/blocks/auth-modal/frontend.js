document.addEventListener("DOMContentLoaded", () => {
  const openModalButton = document.querySelectorAll(".open-modal");
  const modelElement = document.querySelector(
    ".wp-block-udemy-plus-auth-modal"
  );
  const modalCloseElement = document.querySelectorAll(
    ".modal-overlay, .modal-btn-close"
  );

  openModalButton.forEach((el) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();

      modelElement.classList.add("modal-show");
    });
  });

  modalCloseElement.forEach((el) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();

      modelElement.classList.remove("modal-show");
    });
  });

  const tabs = document.querySelectorAll(".tabs a");
  const signinForm = document.querySelector("#signin-tab");
  const signupForm = document.querySelector("#signup-tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();

      tabs.forEach((currentTab) => {
        currentTab.classList.remove("active-tab");
      });

      e.currentTarget.classList.add("active-tab");
      const activeTab = e.currentTarget.getAttribute("href");

      if (activeTab == "#signin-tab") {
        signinForm.style.display = "block";
        signupForm.style.display = "none";
      } else {
        signinForm.style.display = "none";
        signupForm.style.display = "block";
      }
    });
  });

  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const signupFieldset = signupForm.querySelector("fieldset");
    signupFieldset.setAttribute("disabled", true);

    const signupStatus = signupForm.querySelector("#signup-status");
    signupStatus.innerHTML = `
        <div class="modal-status modal-status-info">
            Please wait! We are creating your account!
        </div>
        `;

    const formData = {
      username: signupForm.querySelector("#su-name").value,
      email: signupForm.querySelector("#su-email").value,
      password: signupForm.querySelector("#su-password").value,
    };

    console.log(up_auth_rest.signup);

    const response = await fetch(up_auth_rest.signup, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const responseJSON = await response.json();

    if (responseJSON.status === 2) {
      signupStatus.innerHTML = `
        <div class="modal-status modal-status-success">
          Success Your Account has been created!
        </div>
      `;

      location.reload();
    } else {
      signupFieldset.removeAttribute("disabled");
      signupStatus.innerHTML = `
        <div class="modal-status modal-status-danger">
          Unable to create account
        </div>
      `;
    }
  });
});
