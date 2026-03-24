# João Victor de Jesus Augusto PD015

# 🛒 Loja Virtual em React - Loja Desenvolve

Uma aplicação de **Loja Virtual** desenvolvida em **React** com integração de pagamento via **PIX (AbacatePay)**.

---

## 🚀 Funcionalidades

* 📦 Listagem de produtos via API
* 🔍 Busca de produtos com debounce
* 🗂️ Filtro por categorias
* 📄 Paginação de produtos
* 🛍️ Carrinho de compras:

  * Adicionar e remover itens
  * Alterar quantidade
  * Cálculo automático do total
* 💳 Pagamento via PIX
* 🌙 Modo escuro (Dark Mode) com persistência no LocalStorage
* 🔁 Navegação entre páginas com React Router
* ✨ Animações simples com CSS
* 📱 Interface responsiva

---

## 💳 Integração com PIX

O projeto possui integração com API de pagamento via PIX, permitindo:

* Gerar QR Code para pagamento
* Exibir código copia e cola
* Mostra aguardo do pagamento

---

## 🧱 Tecnologias Utilizadas

* ⚛️ React
* 🌐 React Router DOM
* 🧠 Context API
* 🎨 CSS
* 📡 Fetch API (consumo de API REST)
* ⚡ Vite
* 🟢 Node.js + Express (Backend)

---

## 📁 Estrutura do Projeto

```
/backend
 ├── server.js
 ├── package.json

/src
 ├── components/
 │   ├── Header.jsx
 │   ├── ProductCard.jsx
 │   ├── CategoryFilter.jsx
 │   ├── Pagination.jsx
 │   └── CartItem.jsx

 ├── pages/
 │   ├── Home.jsx
 │   ├── ProductDetails.jsx
 │   ├── Cart.jsx
 │   └── PixPayment.jsx

 ├── context/
 │   ├── CartContext.jsx
 │   └── ThemeContext.jsx

 ├── services/
 │   └── api.js

 ├── App.jsx
 ├── main.jsx 
 └── index.css
```

---

## 🧠 Conceitos Aplicados

* Componentização no React
* Hooks (`useState`, `useEffect`, `useContext`)
* Context API (Carrinho e Tema)
* Paginação no front-end
* Busca com debounce
* Integração com API externa
* Backend intermediário (Node.js)

---

## ▶️ Como Rodar o Projeto

### 🔧 Backend

1. Acesse a pasta:

```bash
cd backend
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor:

```bash
node server.js
```

---

### 💻 Frontend

1. Acesse a raiz do projeto:

```bash
cd ..
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o projeto:

```bash
npm run dev
```

4. Abra no navegador:

```
http://localhost:5173
```

---

## 🛒 Fluxo da Aplicação

### 🏠 Home

* Lista produtos da API
* Busca por nome
* Filtro por categoria
* Paginação

### 📄 Detalhes do Produto

* Exibe informações completas
* Permite adicionar ao carrinho

### 🛍️ Carrinho

* Lista produtos adicionados
* Atualiza quantidade
* Calcula total

### 💳 PIX

* Gera QR Code
* Gera código copia e cola

---

## 🌙 Tema Escuro (Dark Mode)

* Gerenciado via Context API
* Persistido no LocalStorage
* Aplicado via classe `dark`

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com foco em:

* Desenvolvimento com React
* Consumo de APIs
* Simulação de e-commerce
* Boas práticas de front-end e organização

---

## 👨‍💻 Autor

Projeto desenvolvido por **João Victor de Jesus Augusto** para fins de estudo e prática em desenvolvimento web.
