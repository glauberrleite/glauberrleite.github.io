# 1º Ano do Alef · site da festa

Site estático de página única (SPA por rolagem) para o aniversário de 1 ano do Alef Leite Santos.

- **Data:** 10 de outubro de 2026, 18h30
- **Local:** Buffet Planeta Mágico, Maceió/AL

## Estrutura

```
alef-1-ano/
├── index.html         página única
├── css/style.css      estilos (paleta da identidade visual)
├── js/main.js         navegação, contagem regressiva, linha do tempo, lightbox e lista de presentes
├── js/presentes.js    dados da lista de sugestões de presentes
├── alef-1-ano.ics     evento para o calendário
├── img/hero.jpg       foto da capa (celular)
├── img/hero-wide.jpg  foto da capa (telas largas)
├── img/meses/NN.jpg   fotos de 1 a 11 meses
└── img/tema/          ilustrações da identidade da festa
```

## Editar a lista de presentes

A lista é estática e fica em `js/presentes.js`, uma entrada por presente:

```js
const GIFTS = [
  { nome: "Piano infantil", emoji: "🎹", grupo: "brinquedos", link: "", comprado: false },
  { nome: "Bicicleta", emoji: "🚲", grupo: "brinquedos", link: "", comprado: true },
  { nome: "Roupinha tamanho 2 anos", emoji: "👕", grupo: "roupas", link: "", comprado: false },
];
```

- `grupo` define em qual das três colunas o item aparece. As colunas ficam em `GIFTS_GROUPS`, no mesmo arquivo: `roupas`, `calcados` e `brinquedos`. Item sem grupo (ou com grupo desconhecido) aparece numa coluna extra, sem título.

- `emoji` é o ícone mostrado ao lado do nome (se faltar, o site usa um ícone genérico).
- `comprado: true` deixa o item tachado, sem link, e o envia para o fim da lista.
- A ordem dos itens é embaralhada a cada visita, para que todos tenham a mesma visibilidade.
- O texto acima da lista está em `GIFTS_INTRO`, no mesmo arquivo.

## Editar as legendas dos meses

Estão no início de `js/main.js`, na lista `MONTHS`.

## Publicar no GitHub Pages

1. Crie um repositório (por exemplo `alef-1-ano`) e envie **o conteúdo desta pasta** para a raiz dele.
2. No GitHub: *Settings → Pages → Build and deployment → Source: Deploy from a branch*, branch `main`, pasta `/ (root)`.
3. O site fica em `https://SEU-USUARIO.github.io/alef-1-ano/`.

Se quiser usar um domínio próprio (o `.ics` já aponta para `glauberrleite.com/alef-1-ano`), configure em *Settings → Pages → Custom domain*.

## Testar localmente

Basta abrir o `index.html` no navegador. O mapa embutido e as fontes precisam de internet.
