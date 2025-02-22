const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/navbar", (req, res) => {
  res.json({
    links: [
      { path: "/", label: "Home" },
      { path: "/about", label: "About Us" },
      { path: "/services", label: "Services" },
      { path: "/contact", label: "Contact Us" },
    ],
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
