module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "admin",
  database: "tarefas",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
