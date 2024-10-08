const subscribeBtn = document.querySelector("[data-subscribe-btn]");

subscribeBtn.addEventListener("click", () => {
    let event;

    if (subscribeBtn.classList.contains("subscription")) {
        subscribeBtn.classList.remove("subscription");
        subscribeBtn.textContent = "ПОДПИСАТЬСЯ";
        event = new CustomEvent("subscription", { detail: { isSubscribed: false }});
    } else {
        subscribeBtn.classList.add("subscription");
        subscribeBtn.textContent = "ОТПИСАТЬСЯ";
        event = new CustomEvent("subscription", { detail: { isSubscribed: true }});
    }

    window.dispatchEvent(event);
})

