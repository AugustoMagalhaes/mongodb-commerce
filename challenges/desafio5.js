db.produtos.find(
  {
    $or: [{ curtidas: 36 }, { vendidos: 85 }],
  },
  { nome: true, curtidas: true, vendidos: true, _id: false },
);
