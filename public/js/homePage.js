document
  .querySelector("#create_name")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const { name } = event.target;

    const response = await fetch("/new_name", {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
  });
