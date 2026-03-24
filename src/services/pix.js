// João Victor de Jesus Augusto PD015

export async function createPix(total) {
  const res = await fetch("http://localhost:3001/pix/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: Math.round(total * 100),
      customer: {
        name: "Cliente Teste",
        email: "teste@email.com",
        cellphone: "(31) 99999-9999",
        taxId: "123.456.789-00",
      },
    }),
  });

  return res.json();
}

export async function checkPix(id) {
  const res = await fetch(`http://localhost:3001/pix/status/${id}`);
  return res.json();
}

export async function simulatePix(id) {
  const res = await fetch(`http://localhost:3001/pix/simulate/${id}`, {
    method: "POST",
  });

  return res.json();
}