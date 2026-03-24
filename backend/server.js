// João Victor de Jesus Augusto PD015

import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const TOKEN = "abc_dev_zZ4wcxR3nLEQs2musnqhHCwn";

app.post("/pix", async (req, res) => {
  try {
    const { amount } = req.body;

    const response = await fetch("https://api.abacatepay.com/v1/pixQrCode/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${TOKEN}`
      },
      body: JSON.stringify({
        amount: amount,
        description: "Compra na loja",
        expiresIn: 3600
      })
    });

    const data = await response.json();

    console.log("RESPOSTA API:", data); 

    if (data.error) {
      return res.status(400).json(data);
    }

    res.json(data.data);

  } catch (error) {
    console.error("ERRO PIX:", error);
    res.status(500).json({ error: "Erro ao gerar PIX" });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});