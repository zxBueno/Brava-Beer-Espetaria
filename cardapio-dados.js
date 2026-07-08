// ============================================================
// cardapio-dados.js — Dados do cardápio da Brava Beer Espetaria.
//
// COMO EDITAR:
// - Para mudar um preço ou descrição, edite o produto direto aqui.
// - Para adicionar um produto novo, copie um bloco { nome: ... } e
//   cole dentro da categoria certa, na lista "produtos".
// - Para criar uma categoria nova (ex: "Sobremesas"), copie um bloco
//   inteiro { nome: "Categoria", produtos: [...] } e cole na lista
//   CARDAPIO abaixo.
// - Uma categoria pode ter "produtos" direto (lista simples) OU
//   "subcategorias" (uma lista de grupos, cada um com seu próprio nome
//   e sua própria lista de "produtos") — veja o exemplo em "Bebidas".
// - Para tirar um produto do cardápio sem apagar, adicione
//   "disponivel: false" nele (veja exemplo comentado abaixo).
// - Para um preço único, use "preco". Para mais de um preço (ex:
//   Dose/Garrafa), use "variacoes". Para itens sem preço fixo, use
//   "consultar: true" no lugar de "preco".
// ============================================================

const CARDAPIO = [
  {
    nome: 'Espetos',
    produtos: [
      {
        nome: 'Espeto Bovino',
        descricao: 'Carne bovina macia, temperada na medida certa.',
        preco: 11.00,
      },
      {
        nome: 'Espeto de Kafta S/ Queijo',
        descricao: 'Carne moída temperada com especiarias, sem queijo.',
        preco: 10.00,
      },
      {
        nome: 'Espeto de Kafta C/ Queijo',
        descricao: 'Carne moída temperada com especiarias, com queijo.',
        preco: 11.00,
      },
      {
        nome: 'Medalhão Bovino',
        descricao: 'Medalhão de carne bovina, suculento e saboroso.',
        preco: 15.00,
      },
      {
        nome: 'Espeto de Linguiça Grossa',
        descricao: 'Linguiça Grossa, sem pimenta.',
        preco: 10.00,
      },
      {
        nome: 'Espeto de Linguiça Apimentada',
        descricao: 'Linguiça apimentada, para quem gosta de um sabor mais intenso.',
        preco: 10.00,
      },
      {
        nome: 'Espeto de Peito de Frango',
        descricao: 'Peito de frango temperado.',
        preco: 10.00,
      },
      {
        nome: 'Espeto de Coxa de Frango',
        descricao: 'Coxa de frango temperada.',
        preco: 10.00,
      },
      {
        nome: 'Espeto de Coração',
        descricao: 'Excelente espeto de coração de frango.',
        preco: 10.00,
      },
      {
        nome: 'Espeto de Medalhão de Frango',
        descricao: 'Medalhão de frango, suculento e saboroso.',
        preco: 13.00,
      },
      {
        nome: 'Espeto de Mussarela Defumada',
        descricao: 'Mussarela defumada, que derrete na boca.',
        preco: 13.00,
      },
      {
        nome: 'Espeto de Queijo Coalho',
        descricao: 'Queijo coalho, grelhado na brasa.',
        preco: 13.00,
      },
      {
        nome: 'Espeto de Pão de Alho',
        descricao: 'Pão de alho, crocante e saboroso.',
        preco: 10.00,
      },
      // Exemplo de produto temporariamente indisponível (não aparece no site):
      // {
      //   nome: 'Espeto de Cordeiro',
      //   descricao: 'Cordeiro temperado com ervas finas.',
      //   preco: 22.00,
      //   disponivel: false,
      // },
    ],
  },
  {
    nome: 'Carnes Nobres',
    produtos: [
      {
        nome: 'Picanha',
        consultar: true,
      },
      {
        nome: 'Bife Ancho',
        consultar: true,
      },
      {
        nome: 'Contra Filé',
        consultar: true,
      },
      {
        nome: 'Chorizo',
        consultar: true,
      },
    ],
  },
  {
    nome: 'Porções',
    produtos: [
      {
        nome: 'Batata Frita',
        descricao: 'Porção generosa, crocante por fora e macia por dentro.',
        preco: 27.00,
      },
      {
        nome: 'Frango à Passarinho',
        descricao: 'Frango temperado, frito na hora.',
        preco: 30.00,
      },
    ],
  },
  {
    nome: 'Bebidas',
    // Esta categoria usa "subcategorias" em vez de "produtos" direto,
    // pra agrupar por tipo de bebida. Para adicionar uma subcategoria nova,
    // copie um bloco { nome: '...', produtos: [...] } e cole na lista abaixo.
    subcategorias: [
      {
        nome: 'Cervejas',
        produtos: [
          { nome: 'Original 269ml', preco: 6.00 },
          { nome: 'Original 600ml', preco: 14.00 },
          { nome: 'Heineken 269ml', preco: 7.00 },
          { nome: 'Heineken 600ml', preco: 16.00 },
          { nome: 'Corona 330ml', preco: 10.00 },
          { nome: 'Stella Puro Gold 473ml', preco: 10.00 },
          { nome: 'Michelob Ultra 330ml', preco: 10.00 },
        ],
      },
      {
        nome: 'Refrigerantes, sucos e água',
        produtos: [
          { nome: 'Água S/ Gás', preco: 4.00 },
          { nome: 'Água C/ Gás', preco: 6.00 },
          { nome: 'Coca-Cola Lata', preco: 7.00 },
          { nome: 'Coca-Cola Lata (Zero)', preco: 7.00 },
          { nome: 'Guaraná Lata', preco: 6.00 },
          { nome: 'Guaraná Lata (Zero)', preco: 6.00 },
          { nome: 'Fanta Lata (Uva ou Laranja)', preco: 6.00 },
          { nome: 'Água Tônica Lata', preco: 7.00 },
          { nome: 'Suco Lata (Morango, Laranja e Maracujá)', preco: 9.00 },
        ],
      },
      {
        nome: 'Caipirinhas',
        produtos: [
          { nome: 'Caipirinha de Velho Barreiro', preco: 15.00 },
          { nome: 'Caipirinha de Vodka', descricao: 'Vodka Smirnoff', preco: 25.00 },
        ],
      },
      {
        nome: 'Energéticos',
        produtos: [
          { nome: 'Red Bull', descricao: 'Original ou Tropical', preco: 15.00 },
          { nome: 'Red Bull', descricao: 'Laranja com Melancia', preco: 17.00 },
        ],
      },
      {
        nome: 'Destilados',
        produtos: [
          {
            nome: 'Seleta Ouro',
            variacoes: [
              { nome: 'Dose', preco: 10.00 },
              { nome: 'Garrafa', preco: 80.00 },
            ],
          },
          {
            nome: 'Tequila José Cuervo Gold',
            variacoes: [
              { nome: 'Dose', preco: 18.00 },
              { nome: 'Garrafa', preco: 180.00 },
            ],
          },
          {
            nome: 'Campari',
            variacoes: [
              { nome: 'Dose', preco: 15.00 },
              { nome: 'Garrafa', preco: 90.00 },
            ],
          },
          {
            nome: 'Velho Barreiro',
            variacoes: [
              { nome: 'Dose', preco: 7.00 },
            ],
          },
          {
            nome: 'Amarula',
            variacoes: [
              { nome: 'Dose', preco: 20.00 },
              { nome: 'Garrafa', preco: 180.00 },
            ],
          },
          {
            nome: 'Gin Tanqueray',
            variacoes: [
              { nome: 'Dose', preco: 25.00 },
              { nome: 'Garrafa', preco: 160.00 },
            ],
          },
          {
            nome: 'Smirnoff Vodka',
            variacoes: [
              { nome: 'Dose', preco: 15.00 },
              { nome: 'Garrafa', preco: 60.00 },
            ],
          },
          {
            nome: 'Ciroc',
            variacoes: [
              { nome: 'Dose', preco: 45.00 },
              { nome: 'Garrafa', preco: 320.00 },
            ],
          },
          {
            nome: 'Smirnoff Ice',
            preco: 9.00,
          },
          {
            nome: 'Licor 43',
            variacoes: [
              { nome: 'Dose', preco: 25.00 },
              { nome: 'Garrafa', preco: 240.00 },
            ],
          },
          {
            nome: 'Double Black Licor',
            variacoes: [
              { nome: 'Dose', preco: 40.00 },
              { nome: 'Garrafa', preco: 360.00 },
            ],
          },
          {
            nome: 'Gin Beefeater Tradicional',
            variacoes: [
              { nome: 'Dose', preco: 15.00 },
              { nome: 'Garrafa', preco: 130.00 },
            ],
          },
          {
            nome: 'Gin Beefeater Pink',
            variacoes: [
              { nome: 'Dose', preco: 18.00 },
              { nome: 'Garrafa', preco: 135.00 },
            ],
          },
        ],
      },
      {
        nome: 'Whisky',
        produtos: [
          {
            nome: 'Jack Daniels',
            variacoes: [
              { nome: 'Dose', preco: 25.00 },
              { nome: 'Garrafa', preco: 210.00 },
            ],
          },
          {
            nome: 'Jack Daniels Green Apple',
            variacoes: [
              { nome: 'Dose', preco: 25.00 },
              { nome: 'Garrafa', preco: 210.00 },
            ],
          },
          {
            nome: "Buchanan's",
            variacoes: [
              { nome: 'Dose', preco: 35.00 },
              { nome: 'Garrafa', preco: 290.00 },
            ],
          },
          {
            nome: 'Red Label',
            variacoes: [
              { nome: 'Dose', preco: 15.00 },
              { nome: 'Garrafa', preco: 130.00 },
            ],
          },
          {
            nome: 'Black Label',
            variacoes: [
              { nome: 'Dose', preco: 30.00 },
              { nome: 'Garrafa', preco: 270.00 },
            ],
          },
          {
            nome: 'Gold Label',
            variacoes: [
              { nome: 'Dose', preco: 45.00 },
              { nome: 'Garrafa', preco: 400.00 },
            ],
          },
        ],
      },
      {
        nome: 'Vinhos',
        produtos: [
          {
            nome: 'Alamos Malbec',
            descricao: 'Vinho Tinto Argentino',
            variacoes: [
              { nome: 'Garrafa', preco: 120.00 },
            ],
          },
          {
            nome: 'D.V. Catena',
            descricao: 'Vinho Tinto Argentino',
            variacoes: [
              { nome: 'Garrafa', preco: 140.00 },
            ],
          },
          {
            nome: 'Cordero con Piel de Lobo',
            descricao: 'Vinho Tinto Espanhol',
            variacoes: [
              { nome: 'Garrafa', preco: 80.00 },
            ],
          },
          {
            nome: 'Prófugo',
            descricao: 'Vinho Tinto Português',
            variacoes: [
              { nome: 'Garrafa', preco: 80.00 },
            ],
          },
        ],
      },
      {
        nome: 'Outros',
        produtos: [
          { nome: 'Balde com Latinhas', consultar: true },
          { nome: 'Drinks no Copão', consultar: true },
          { nome: 'Combo Vodka', consultar: true },
          { nome: 'Combo Whisky', consultar: true },
          { nome: 'Gelo Sabores', preco: 5.00 },
        ],
      },
    ],
  },
  // {
   // nome: 'Sobremesas',
    // produtos: [
      // {
        // nome: 'Abacaxi na Brasa',
        // descricao: 'Abacaxi grelhado com canela e um toque de mel.',
        // preco: 12.00,
      // },
      // {
        // nome: 'Petit Gateau',
        // descricao: 'Bolo de chocolate quente com sorvete de creme.',
       // preco: 16.00,
      // },
    // ],
  // },
];