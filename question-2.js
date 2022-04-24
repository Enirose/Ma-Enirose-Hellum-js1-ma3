const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=6a74d4b1b1cd47409fb69f998eb9cccc";
const container = document.querySelector(".container");
const resultContainer = document.querySelector(".results");


async function callRawG() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        const facts = results.results;

        resultContainer.innerHTML = ""

        for (i = 0; i < facts.length; i++) {

            if (i === 8) {
                break;
            }

            resultContainer.innerHTML +=
                `<div>
                <p>${facts[i].name}</p>
                <p>${facts[i].rating}</p>
                <p>${facts[i].tags.length}</p>
                </div>`
        }

    } catch (error) {
        console.log("An error occured");
        resultContainer.innerHTML = "An error occured";
    }
}

callRawG()