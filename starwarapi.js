let container = document.getElementById("container");

async function searchCont() {
  let query = document.getElementById("query").value;
  if (query.length < 2) {
    return false;
  }

  let res = await fetch(`https://swapi.dev/api/people/?search=${query}`);

  let data = await res.json();

  appendData(data);
}

function throttleFunction() {
  searchCont();
}

function appendData({ results }) {
  container.innerHTML = null;
  console.log(results);
  results.forEach(({ name }) => {
    let div = document.createElement("div");
    div.setAttribute("class", "sing");
    div.addEventListener("click", function () {
      let input = document.getElementById("query");
      input.innerText = null;
      input.value = `${name}`;
    });
    div.innerText = name;
    container.append(div);
  });
}
