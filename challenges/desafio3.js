db.produtos
  .find({}, { nome: true, vendidos: true, _id: false })
  .sort({ vendidos: -1 })
  .limit(1);
