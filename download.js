/*
 * ZePOS Download Page
 * Mengatur tahun footer dan interaksi tombol download.
 */

document.addEventListener("DOMContentLoaded", () => {

    // Tahun copyright otomatis
    const yearElement = document.getElementById("currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Interaksi tombol download
    const downloadButtons = document.querySelectorAll("[data-download]");

    downloadButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const platform = button.dataset.download;

            const label = platform === "android"
                ? "Android"
                : "Windows";

            button.classList.add("is-clicked");

            button.setAttribute(
                "aria-label",
                `Mengunduh ZePOS untuk ${label}`
            );

            window.setTimeout(() => {
                button.classList.remove("is-clicked");
                button.removeAttribute("aria-label");
            }, 1200);

        });

    });

});