import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json());

  // API Route for GhostPay
  app.post("/api/create-transaction", async (req, res) => {
    try {
      const { amount, cpf, name, email } = req.body;

      const response = await axios.post(
        "https://api.ghostspay.com/v1/transactions",
        {
          amount: Math.round(amount * 100), // GhostPay usually expects cents
          payment_method: "pix",
          customer: {
            name: name || "Cliente Pix",
            email: email || "cliente@exemplo.com",
            document: {
              number: cpf.replace(/\D/g, ""),
              type: "cpf"
            }
          },
          app_id: process.env.GHOSTPAY_APP_ID
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.GHOSTPAY_SECRET_KEY}`,
            "Content-Type": "application/json"
          }
        }
      );

      res.json(response.data);
    } catch (error: any) {
      console.error("GhostPay Error:", error.response?.data || error.message);
      res.status(500).json({ error: "Failed to create transaction" });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
