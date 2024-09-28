function checkHeaderScrollbar() {
    const tableBody = document.getElementById("data-body");
    const tableHeader = document.getElementById("data-header");

    if (tableBody && tableBody.scrollHeight > tableBody.clientHeight) {
        // Scrollbar is present in the header element
        tableHeader.classList.add("has-scrollbar");
    } else {
        // No scrollbar in the header element
        tableHeader.classList.remove("has-scrollbar");
    }
}

// Check when the page loads and when the window resizes
window.addEventListener("load", checkHeaderScrollbar);
window.addEventListener("resize", checkHeaderScrollbar);
