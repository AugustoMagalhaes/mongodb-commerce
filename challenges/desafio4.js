db.produtos
  .find(
    {
      vendidos: { $gt: 50, $lt: 100 },
    },
    { nome: true, vendidos: true, _id: false },
  )
  .sort({ vendidos: 1 });
