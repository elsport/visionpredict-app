// 💰 PAY FUNCTION
function pay(method) {
    const phone = document.getElementById("phone").value;

    fetch("/pay", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ phone, method })
    })
    .then(res => res.json())
    .then(data => {
        alert(data.message);

        if (data.success) {
            window.location.href = "/vip.html";
        }
    });
}

// 🔐 CHECK VIP
function checkVIP() {
    const phone = document.getElementById("phone").value;

    fetch("/check-vip", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ phone })
    })
    .then(res => res.json())
    .then(data => {
        if (data.vip) {
            document.getElementById("vipContent").style.display = "block";
        } else {
            alert("❌ No VIP access or expired");
        }
    });
}
