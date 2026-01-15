import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { amount, cpf, name, email } = req.body;
    
    // Usando variáveis de ambiente para segurança
    const GHOSTPAY_SECRET_KEY = process.env.GHOSTPAY_SECRET_KEY;
    const GHOSTPAY_APP_ID = process.env.GHOSTPAY_APP_ID;
    
    if (!GHOSTPAY_SECRET_KEY || !GHOSTPAY_APP_ID) {
      return res.status(500).json({ error: 'Configuração de pagamento ausente' });
    }
    
    const authHeader = `Basic ${Buffer.from(`${GHOSTPAY_SECRET_KEY}:`).toString('base64')}`;
    
    const response = await axios.post(
      "https://api.ghostspaysv2.com/functions/v1/transactions",
      {
        app_id: GHOSTPAY_APP_ID,
        amount: Math.round(amount * 100),
        paymentMethod: "PIX",
        customer: {
          name: name || "Cliente Pix",
          email: email || "cliente@exemplo.com",
          document: cpf.replace(/\D/g, ""),
          phone: "11999999999"
        },
        items: [
          {
            title: "Participação Pix do Milhão",
            unitPrice: Math.round(amount * 100),
            quantity: 1
          }
        ]
      },
      {
        headers: {
          Authorization: authHeader,
          "Content-Type": "application/json",
          "accept": "application/json"
        }
      }
    );

    const data = response.data;
    const pixCode = data.pix?.qrcode || data.qrcode || "";
    
    const formattedResponse = {
      ...data,
      qr_code: pixCode,
      copy_paste: pixCode
    };

    return res.status(200).json(formattedResponse);
  } catch (error: any) {
    console.error("GhostPay Error:", error.response?.data || error.message);
    return res.status(500).json({ 
      error: "Failed to create transaction", 
      details: error.response?.data || error.message 
    });
  }
}
