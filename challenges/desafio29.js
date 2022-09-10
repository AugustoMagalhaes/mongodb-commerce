db.produtos.updateMany(
  { descricao: { $exists: true } },
  { $rename: {
      descricao: "descricaoSite",
    },
  },
);

db.produtos.find(
  {},
  { _id: false, nome: true, descricaoSite: true },
);