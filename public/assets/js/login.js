async function loginFormHandler(event) {
  event.preventDefault();

  const login = document.querySelector("#userName").value.trim();
  const password = document.querySelector("#pinNum").value.trim();

  if (login && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        login,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/index/");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
