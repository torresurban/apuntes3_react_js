//const Club = require('./Club')
const LigaItaliana = require('./LigaItaliana')
const Partidos = require('./Partidos')
const Jugadores = require('./Jugadores')

console.log("un equipo tiene muchos jugadores"); //Equipo = LigaItaliana
  LigaItaliana.hasMany(Jugadores, {
    foreignKey: "fk_equipo",
  });

  console.log("un jugador pertenece a un equipo");
  Jugadores.belongsTo(LigaItaliana, {
    foreignKey: "fk_equipo",
  });

  console.log("un partido le pertenece a un equipo jugando en casa");
  Partidos.belongsTo(LigaItaliana, {
    as: "EquipoCasa",
    foreignKey: "fk_equipo_casa",
  });

  console.log("un partido le pertenece a un equipo jugando fuera");
  Partidos.belongsTo(LigaItaliana, {
    as: "EquipoFuera",
    foreignKey: "fk_equipo_fuera",
  });

  console.log("un equipo tiene muchos partidos jugando de local");
  LigaItaliana.hasMany(Partidos, {
    as: "PartidosLocal",
    foreignKey: "fk_equipo_casa",
  });

  console.log("un equipo tiene muchos partidos jugando de visitante");
  LigaItaliana.hasMany(Partidos, {
    as: "PartidosVisitante",
    foreignKey: "fk_equipo_fuera",
  });

module.exports = {
    LigaItaliana,
    Partidos,
    Jugadores,
    
}