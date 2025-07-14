const malla = {
  "1er Año": {
    "Arquitectura de ordenadores personales": { estado: "habilitada", correlativas: [] },
    "Comunicación I": { estado: "habilitada", correlativas: [] },
    "Filosofía": { estado: "habilitada", correlativas: [] },
    "Pedagogía": { estado: "habilitada", correlativas: [] },
    "Práctica I": { estado: "habilitada", correlativas: [] },
    "Sistemas Operativos": { estado: "habilitada", correlativas: [] },
    "Taller de Aprendizaje Basado en Problemas": { estado: "habilitada", correlativas: [] },
    "Taller de Oralidad, Lectura y Escritura": { estado: "habilitada", correlativas: [] },
    "Teología I": { estado: "habilitada", correlativas: [] },
    "Software Ofimático I": { estado: "habilitada", correlativas: [] }
  },
  "2do Año": {
    "Comunicación II": {
      estado: "bloqueada",
      correlativas: ["Sistemas Operativos", "Comunicación I"]
    },
    "Didáctica General": {
      estado: "bloqueada",
      correlativas: ["Pedagogía"]
    },
    "Teología II": {
      estado: "bloqueada",
      correlativas: []
    },
    "Lógica y Programación": {
      estado: "bloqueada",
      correlativas: ["Sistemas Operativos"]
       },
    "Sujetos del Aprendizaje": {
      estado: "bloqueada",
      correlativas: ["Pedagogía"]
    },
    "Tecnologías de la Información y la Comunicación I": {
      estado: "bloqueada",
      correlativas: []
    },
    "Software Ofimático II": {
      estado: "bloqueada",
      correlativas: ["Software Ofimático I"]
    },
    "Aplicaciones de internet": {
      estado: "bloqueada",
      correlativas: ["Sistemas Operativos", "Arquitectura de ordenadores personales"]
    },
    "Psicología Educacional": {
      estado: "bloqueada",
      correlativas: ["Pedagogía"]
    }
  }
};

const estados = ["bloqueada", "habilitada", "aprobada"];
const contenedor = document.getElementById("malla");

function inicializarMalla() {
  for (const [anio, materias] of Object.entries(malla)) {
    for (const [nombre, datos] of Object.entries(materias)) {
      if (datos.correlativas.length === 0 && datos.estado === "bloqueada") {
        datos.estado = "habilitada";
      }
    }
  }
}

function renderMalla() {
  contenedor.innerHTML = "";

  for (const [anio, materias] of Object.entries(malla)) {
    const titulo = document.createElement("h2");
    titulo.textContent = anio;
    contenedor.appendChild(titulo);

    const grupo = document.createElement("div");
    grupo.style.display = "grid";
    grupo.style.gridTemplateColumns = "repeat(auto-fit, minmax(180px, 1fr))";
    grupo.style.gap = "1rem";

    for (const [nombre, datos] of Object.entries(materias)) {
      const div = document.createElement("div");
      div.className = `materia ${datos.estado}`;
      div.textContent = nombre;

      if (datos.estado === "habilitada") {
        div.onclick = () => {
          datos.estado = "aprobada";
          actualizarCorrelativas();
          renderMalla();
        };
      }

      grupo.appendChild(div);
    }

    contenedor.appendChild(grupo);
  }
}

function actualizarCorrelativas() {
  for (const [anio, materias] of Object.entries(malla)) {
    for (const [nombre, datos] of Object.entries(materias)) {
      if (datos.estado === "bloqueada") {
        const desbloqueada = datos.correlativas.every((req) =>
          Object.values(malla).some((grupo) => grupo[req]?.estado === "aprobada")
        );

        if (desbloqueada) {
          datos.estado = "habilitada";
        }
      }
    }
  }
}

inicializarMalla();
renderMalla();
