$(document).ready(function () {
    $(document).on("keypress", function(e) {
        if (e.which == 13) {
            let url = "";
            fetch(url)
                .then(response => {
                    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
                    return response.json();
                })
                .then(data => console.log(data))
                .catch(error => console.error("Fetch failed:", error));
        }
    });
});
