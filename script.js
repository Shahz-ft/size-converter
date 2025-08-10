document.getElementById("sizeForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const gender = document.getElementById("gender").value;
    const chest = parseFloat(document.getElementById("chest").value);
    const waist = parseFloat(document.getElementById("waist").value);

    let hmSize = "";
    let zaraSize = "";

    if (gender === "men") {
        // Example Men’s Size Chart
        if (chest <= 38) { hmSize = "S"; zaraSize = "S"; }
        else if (chest <= 40) { hmSize = "M"; zaraSize = "M"; }
        else if (chest <= 44) { hmSize = "L"; zaraSize = "L"; }
        else { hmSize = "XL"; zaraSize = "XL"; }
    } 
    else if (gender === "women") {
        // Example Women’s Size Chart
        if (chest <= 34) { hmSize = "S"; zaraSize = "S"; }
        else if (chest <= 36) { hmSize = "M"; zaraSize = "M"; }
        else if (chest <= 40) { hmSize = "L"; zaraSize = "L"; }
        else { hmSize = "XL"; zaraSize = "XL"; }
    }

    document.getElementById("results").innerHTML = `
        <h3>Results:</h3>
        <p><strong>H&M:</strong> ${hmSize}</p>
        <p><strong>Zara:</strong> ${zaraSize}</p>
    `;
});
