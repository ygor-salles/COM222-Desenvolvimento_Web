const API = "http://localhost:4000";

const story = []


const handleRemoveById = async (id) => {
  try {
    const res = await fetch(`${API}/delete`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: "DELETE",
      body: JSON.stringify({
        id
      })
    });
  } catch (error) {
    alert("Alguma coisa deu errada!");
  }
  finally {
    document.location.reload(true)
  }
};

const getAllInfos = async () => {
  const container = document.getElementById("container");
  try {
    const res = await fetch(`${API}/all`);
    const resJson = await res.json();

    const containerDivs = resJson?.map((element, index) => {
      return `
        <div class="card" style="padding:10px">
          <h4> ${element.aeroporto}</h4>
          <p>Cidade: ${element.cidade}</p>
          <button onclick="handleRemoveById('${element._id}')">Excluir</button>
        </div>
        `;
    });

    container.innerHTML = containerDivs;
  } catch (error) {
    alert("Alguma coisa deu errada ao buscar os dados no banco!");
  }
};

getAllInfos();

const handleSubmit = async () => {
  try {
    const airport = document.getElementById("airport").value;
    const city = document.getElementById("city").value;

    const res = await fetch(`${API}/create`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: "POST",
      body: JSON.stringify({
        city,
        aeroport: airport,
      }),
    });

    getAllInfos();
  } catch (error) {
    alert("Alguma coisa deu errada!");
  }
};

const handleSearch = async () => {
  try {
    const container = document.getElementById("weather");
    const airport = document.getElementById("aeroport").value;

    const res = await fetch(`${API}/weather`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: "POST",
      body: JSON.stringify({
        aeroporto: airport,
      }),
    });

    const resJson = await res.json();

    const containerDiv = `<div class="card">
    <h1>${(resJson.main.temp - 273.15).toFixed(2)}º</h1>
    <p>${resJson.weather[0].description}</p>
    <p>${resJson.name}</p>
  </div>`;

    container.innerHTML = containerDiv;
  } catch (error) {
    alert("Alguma coisa deu errada!");
  }
};
