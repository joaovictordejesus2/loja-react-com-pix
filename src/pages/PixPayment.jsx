//João Victor de Jesus Augusto PD015
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export default function PixPayment() {
  const { total } = useCart();

  const [pix, setPix] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/pix", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        amount: Math.round(total * 100) // centavos
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log("PIX DATA:", data);

        setPix(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro PIX:", err);
        setLoading(false);
      });
  }, [total]);

  if (loading) {
    return <p>Gerando PIX...</p>;
  }

  if (!pix) {
    return <p>Erro ao gerar pagamento.</p>;
  }

  return (
    <div className="container">
      <h2>Pagamento via PIX</h2>

      <p>Valor: R$ {total.toFixed(2)}</p>

      {/* QR Code */}
      <img src={pix.brCodeBase64} alt="QR Code PIX" />

      {/* Código copia e cola */}
      <textarea value={pix.brCode} readOnly style={{ width: "100%" }} />

      <p>Aguardando pagamento...</p>
    </div>
  );
}