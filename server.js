const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve your HTML
app.use(express.static(path.join(__dirname, "public")));

// Example API route (VIP access)
app.post("/pay", (req, res) => {
    const { phone, amount, method } = req.body;

    console.log("Payment request:", phone, amount, method);

    // Fake success (later we connect real API)
    res.json({
        success: true,
        message: "Payment received. VIP unlocked!"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
