import imgCheck from "../img/TADDUME_CHULITO.png";

const priceList = [];
priceList.push({
  plan: "Básico",
  checks: [
    { subject: "Matemáticas", img: imgCheck },
    { subject: "Lectura", img: imgCheck },
    { subject: "Actividades", img: imgCheck },
  ],
  price: "$100.000",
});
priceList.push({
  plan: "Smart",
  checks: [
    { subject: "Matemáticas", img: imgCheck },
    { subject: "Lectura", img: imgCheck },
    { subject: "Física", img: imgCheck },
    { subject: "Química", img: imgCheck },
    { subject: "Estadística", img: imgCheck },
    { subject: "Actividades", img: imgCheck },
  ],
  price: "$200.000",
});
priceList.push({
  plan: "Grupo de 4",
  checks: [
    { subject: "Matemáticas", img: imgCheck },
    { subject: "Lectura", img: imgCheck },
    { subject: "Física", img: imgCheck },
    { subject: "Química", img: imgCheck },
    { subject: "Estadística", img: imgCheck },
    { subject: "Actividades", img: imgCheck },
  ],
  price: "$400.000",
});
priceList.push({
  plan: "Instituciones",
  checks: [
    { subject: "Matemáticas", img: imgCheck },
    { subject: "Lectura", img: imgCheck },
    { subject: "Física", img: imgCheck },
    { subject: "Química", img: imgCheck },
    { subject: "Estadística", img: imgCheck },
    { subject: "Actividades", img: imgCheck },
  ],
  price: "Contáctanos",
});

export { priceList };
