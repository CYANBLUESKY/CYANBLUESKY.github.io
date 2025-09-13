// 장바구니 기능
const cartItems = [];
const cartSection = document.querySelector("#cart p");
const addButtons = document.querySelectorAll(".product-item button");

addButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const productName = button.parentElement.querySelector("h3").innerText;
        const productPrice = button.parentElement.querySelector("p:nth-of-type(2)").innerText;
        cartItems.push({ name: productName, price: productPrice });
        renderCart();
    });
});

function renderCart() {
    if (cartItems.length === 0) {
        cartSection.innerText = "현재 장바구니가 비어 있습니다.";
    } else {
        cartSection.innerHTML = cartItems
            .map((item, idx) => `${idx + 1}. ${item.name} - ${item.price}`)
            .join("<br>");
    }
}

// 스무스 스크롤
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// 연락처 폼 유효성 검사
const contactForm = document.querySelector("#contact form");
contactForm.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (!name || !email || !message) {
        alert("모든 항목을 입력해주세요.");
        return;
    }

    if (!validateEmail(email)) {
        alert("올바른 이메일 주소를 입력해주세요.");
        return;
    }

    alert("메시지가 성공적으로 전송되었습니다!");
    contactForm.reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}
