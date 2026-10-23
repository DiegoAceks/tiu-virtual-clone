// ====== Datos de la demostración ======
const DATOS = {
  nombre: "ADRÍAN ARAM H*** G***",
  codigo: "202514843",
  banner: "N0537159",
  carrera: "Ingeniería de Software",
  campus: "Campus San Miguel",
};
// ======================================

const DIAS = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const MESES = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
const pad = (n) => String(n).padStart(2, "0");

function tick() {
  const d = new Date();
  document.getElementById("clock").textContent =
    `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  document.getElementById("date").textContent =
    `${DIAS[d.getDay()]}, ${d.getDate()} ${MESES[d.getMonth()]} ${d.getFullYear()}`;
}

document.getElementById("nombre").textContent = DATOS.nombre;
document.getElementById("codigo").textContent = DATOS.codigo;
document.getElementById("banner").textContent = DATOS.banner;
document.getElementById("carrera").textContent = DATOS.carrera;
document.getElementById("campus").textContent = DATOS.campus;

tick();
setInterval(tick, 1000);
