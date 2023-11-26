const shortenUrlButton = document.getElementById("shorten-btn");
const longUrl = document.getElementById("longUrl");
const shortenUrl = document.getElementById("shortenResult");
const baseURL = "http://localhost:3001/shorten/";

shortenUrlButton.addEventListener("click", async () => {
    // e.preventDefault();
    try {
        if (longUrl.value !== '') {
            const request = await fetch("http://localhost:3001/api/v1/shortURL", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                crossDomain: true,
                body: JSON.stringify({ longURL: longUrl.value }),
            });
            const shorturl = await request.json();
            console.log(shorturl);
            shortenUrl.style.visibility = "visible";
            shortenUrl.href = baseURL + `${shorturl.shortId}`
            shortenUrl.innerText = baseURL + `${shorturl.shortId}`
        }
        else alert("No URL provided");
    } catch (error) {
        console.error(error);
    }

})