db.produtos.find(
  {
    $and: [{ vendidos: { $ne: 50 } }, { tags: { $exists: false } }],
  },
  { nome: true, vendidos: true, _id: false },
);
