addEventListener("DOMContentLoaded", async () => {
  let form = document.querySelector("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let username = e.target[0].value;
    let password = e.target[1].value;

    let {
      data: { token },
    } = await axios.post("https://fakestoreapi.com/auth/login", {
      username,
      password,
    });
    console.log(token);
    localStorage.setItem("token", token);
    window.location.replace("/");
    e.target.reset();
  });
});
