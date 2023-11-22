export function validateForm() {
  const form = document.getElementById("form__callback");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateForm()) {
      const formData = new FormData(form);

      fetch("https://echo.htmlacademy.ru/", {
        method: "POST",
        body: formData
      })
        .then(response => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.text();
        })
        .then(data => {
          console.log("Success:", data);
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
  });

  function validateForm() {
    const nameInput = document.getElementById("form__name");
    const phoneInput = document.getElementById("form__phone");
    const checkbox = document.getElementById("form__checkbox");

    if (!nameInput.value.trim()) {
      alert("Пожалуйста, введите ваше имя.");
      return false;
    }

    if (!phoneInput.value.trim()) {
      alert("Пожалуйста, введите ваш телефон.");
      return false;
    }

    if (!checkbox.checked) {
      alert("Пожалуйста, подтвердите ваше согласие с правилами обработки данных.");
      return false;
    }
    return true;
  }

}
