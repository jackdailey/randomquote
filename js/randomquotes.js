function generateQuote() {
    const quotes = [
        {
            quote: "Hasta la vista, baby",
            author: "Terminator"
        },
        {
            quote: "Bond, James Bond",
            author: "James Bond"
        },
        {
            quote: "Chewie, we’re home",
            author: "Han Solo"
        },
        {

            quote: "To infinity and beyond",
            author: "Buzz Lightyear"
        },
        {
            quote: "Houston, we have a problem",
            author: "Apollo 13"
        }
    ];

    let currentQuote = Math.floor(Math.random() * quotes.length);
    // console.log(currentQuote);

    document.getElementById('quotation').innerHTML = "&quot;" + quotes[currentQuote].quote + "&quot;";
    document.getElementById('author').innerHTML = "-" + quotes[currentQuote].author;

}

window.onload = function() {
    generateQuote('generate').addEventListener('click', generateQuote);
    generateQuote();
}
