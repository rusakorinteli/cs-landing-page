//validation
export function validationForm() {
  let form = document.getElementById("formelement");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let errors = {};

    //username

    let usernameValue = document.getElementById("name").value;

    if (usernameValue == "") {
      errors.name = "name field can not be empty";
    }
    console.log(errors);

    this.querySelectorAll(".error-texts").forEach((el) => {
      el.textContent = "";
    });

    for (let item in errors) {
      console.log(item);

      let errorTextElement = document.getElementById("error_" + item);

      console.log(errorTextElement);

      if (errorTextElement) {
        errorTextElement.textContent = errors[item];
      }
    }

    //message

    let messageValue = document.getElementById("message").value;

    if (messageValue == "") {
      errors.message = "message field can not be empty";
    }
    console.log(errors);

    this.querySelectorAll(".error-texts").forEach((el) => {
      el.textContent = "";
    });

    for (let item in errors) {
      console.log(item);

      let errorTextElement = document.getElementById("error_" + item);

      console.log(errorTextElement);

      if (errorTextElement) {
        errorTextElement.textContent = errors[item];
      }
    }

    if (Object.keys(errors).length === 0) {
      this.submit();
    }
  });

  //email regex

  let email = document.getElementById("emailfield");

  function validation() {
    let emailValue = document.getElementById("emailfield").value;
    let textError = document.getElementById("error-email");
    let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (emailValue.match(emailPattern)) {
      textError.textContent = "Your Email is Valid";
      textError.style.color = "green";
    } else {
      textError.textContent = "Your Email is Invalid";
      textError.style.color = "red";
    }

    if (emailValue == "") {
      textError.innerHTML = "";
    }
  }

  email.addEventListener("keyup", validation);
}
