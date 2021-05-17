async function signupFormHandler(event) {
  event.preventDefault();

  const login = document.querySelector("#userName-signup").value.trim();
  const password = document.querySelector("#pinNum-signup").value.trim();

  if (login && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
