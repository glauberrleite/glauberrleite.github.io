/* =========================================================
   Lista de sugestões de presentes (estática).
   Para alterar, edite este arquivo: uma entrada por presente.
   - nome:     texto exibido
   - emoji:    ícone exibido ao lado do nome
   - grupo:    coluna onde o item aparece (ver GIFTS_GROUPS abaixo)
   - link:     URL da loja (ou "" para item sem link)
   - comprado: true quando alguém já comprou (aparece tachado)
   A ordem aqui não importa: o site embaralha cada coluna a cada visita.
   ========================================================= */

// Texto de introdução exibido acima da lista (uma frase por item)
const GIFTS_INTRO = [
  "Sugestões pensadas para a fase de descobertas do Alef (mas não precisa se limitar à lista): brinquedos musicais, livrinhos e coisas pra brincar no chão. 🎶",
  "Alef está crescendo bastante, se for comprar uma roupinha, sugerimos que seja de 2 anos.",
];

// Colunas da lista, na ordem em que aparecem no site
const GIFTS_GROUPS = [
  { id: "roupas", titulo: "Roupas 2 anos", emoji: "👕" },
  { id: "calcados", titulo: "Calçados 21-22", emoji: "👟" },
  { id: "brinquedos", titulo: "Brinquedos coloridos e interativos", emoji: "🧸" },
];

const GIFTS = [
  // Roupas
  { nome: "Roupa de banho infantil com chapéu", emoji: "🩳", grupo: "roupas", link: "", comprado: false },
  { nome: "Casaco com capuz", emoji: "🧥", grupo: "roupas", link: "", comprado: false },
  { nome: "Conjunto moletom", emoji: "👕", grupo: "roupas", link: "", comprado: false },
  { nome: "Pijama tamanho", emoji: "😴", grupo: "roupas", link: "", comprado: false },
  { nome: "Bermuda", emoji: "🩳", grupo: "roupas", link: "", comprado: false },
  { nome: "Camiseta sem manga", emoji: "🎽", grupo: "roupas", link: "", comprado: false },
  { nome: "Camisa", emoji: "👔", grupo: "roupas", link: "", comprado: false },
  { nome: "Calça", emoji: "👖", grupo: "roupas", link: "", comprado: false },

  // Calçados
  { nome: "Tênis branco", emoji: "👟", grupo: "calcados", link: "", comprado: false },
  { nome: "Tênis marrom", emoji: "👟", grupo: "calcados", link: "", comprado: false },
  { nome: "Sandália papete", emoji: "🩴", grupo: "calcados", link: "", comprado: false },
  { nome: "Crocs", emoji: "🥿", grupo: "calcados", link: "", comprado: false },

  // Brinquedos
  { nome: "Quadricíclo", emoji: "🏍️", grupo: "brinquedos", link: "", comprado: false },
  { nome: "Bicicleta Bebe azul", emoji: "🚲", grupo: "brinquedos", link: "", comprado: true },
  { nome: "Coleção de livros com som", emoji: "📖", grupo: "brinquedos", link: "", comprado: false },
  { nome: "Brinquedo de praia", emoji: "🏖️", grupo: "brinquedos", link: "", comprado: false },
  { nome: "Lego BEBE", emoji: "🧩", grupo: "brinquedos", link: "", comprado: false },
  { nome: "Brinquedos de montar para 1 ano", emoji: "🧱", grupo: "brinquedos", link: "", comprado: false },
];
