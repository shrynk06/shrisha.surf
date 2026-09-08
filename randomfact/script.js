async function randomFact() {

    const factElement = document.getElementById("thing");

    factElement.textContent = "Fetching useless information...";

    try {

        const response = await fetch(
            "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en"
        );

        if (!response.ok) {
            throw new Error("API request failed");
        }

        const data = await response.json();

        factElement.textContent = data.text;

    } catch (error) {

        console.error(error);

        factElement.textContent =
            "The fact machine is currently dead.";

    }
}

randomFact();