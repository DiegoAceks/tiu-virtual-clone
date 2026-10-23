
"use strict";

// Datos de demostración
const DATOS = {
  nombre: "ADRÍAN ARAM H*** G***",
  codigo: "202514843",
  banner: "N0537159",
  carrera: "INGENIERÍA DE SOFTWARE",
  campus: "Campus San Miguel"
};

const DIAS = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado"
];

const MESES = [
  "Ene", "Feb", "Mar", "Abr", "May", "Jun",
  "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
];

const pad = numero => String(numero).padStart(2, "0");

function actualizarDatos() {
  const campos = {
    nombre: DATOS.nombre,
    codigo: DATOS.codigo,
    banner: DATOS.banner,
    carrera: DATOS.carrera,
    campus: DATOS.campus
  };

  for (const [id, valor] of Object.entries(campos)) {
    const elemento = document.getElementById(id);

    if (elemento) {
      elemento.textContent = valor;
    } else {
      console.warn(`No se encontró el elemento HTML: #${id}`);
    }
  }
}

function actualizarReloj() {
  const ahora = new Date();

  const reloj = document.getElementById("clock");
  const fecha = document.getElementById("date");

  if (reloj) {
    reloj.textContent =
      `${pad(ahora.getHours())}:` +
      `${pad(ahora.getMinutes())}:` +
      `${pad(ahora.getSeconds())}`;
  }

  if (fecha) {
    fecha.textContent =
      `${DIAS[ahora.getDay()]}, ` +
      `${ahora.getDate()} ` +
      `${MESES[ahora.getMonth()]} ` +
      `${ahora.getFullYear()}`;
  }
}

function iniciarDemostracion() {
  actualizarDatos();
  actualizarReloj();
  window.setInterval(actualizarReloj, 1000);
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    iniciarDemostracion,
    { once: true }
  );
} else {
  iniciarDemostracion();
}
