// USE BROWSER

async function getData(id) {
  const usersName = document.getElementById("users-name");
  const getNameButton = document.getElementById("get-name-users");
  const fetchData = await fetch(id);
  const data = await fetchData.json();
  getNameButton.addEventListener("click", function () {
    setTimeout(() => {
      try {
        const dataName = data.map((i) => {
          console.log(i.name);
          return i.name;
        });
        usersName.innerHTML = dataName.join(", ");
      } catch (error) {
        console.log(`${error} Sorry data not found`);
      }
    }, 1000);
  });
}
getData("https://jsonplaceholder.typicode.com/users");
// getData("https://jsonplaceholder.typicode.com/sers");
