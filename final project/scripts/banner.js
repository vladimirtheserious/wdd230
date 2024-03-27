document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("banner");
    const closeBannerBtn = document.getElementById("banner-btn");

    const showBannerOnDays = [1, 2, 3];

    const currentDate = new Date();
    const currentDay = currentDate.getDay();

    if (showBannerOnDays.includes(currentDay)) {
        banner.classList.remove("hidden");
    }

    closeBannerBtn.addEventListener("click", () => {
        banner.classList.add("hidden");
    });
});