document.addEventListener("DOMContentLoaded", function () {
    document
        .getElementById("subscribeLink")
        .addEventListener("click", function () {
            chrome.tabs.create({
                url: "https://github.com/PrakashSinghRawat-git/shop-smart/#readme",
            });
        });
});
