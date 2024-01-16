// Importowanie modułu Express
const express = require("express");

// Tworzenie instancji aplikacji Express
const app = express();

// Ustawienie portu, na którym będzie nasłuchiwał serwer
const port = 3000;

// Middleware do parsowania JSON-owych ciał żądań
app.use(express.json());

// Prosty route (ścieżka) dla głównej strony
app.get("/", (req, res) => {
  res.send("Witaj w Dritter!");
});

// Uruchomienie serwera na określonym porcie
app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});
