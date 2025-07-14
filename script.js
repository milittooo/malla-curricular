const malla = {
  "1er Año": {
    "Arquitectura de ordenadores personales": {
      estado: "habilitada",
      correlativas: []
    },
    "Comunicación I": {
      estado: "habilitada",
      correlativas: []
    },
    "Filosofía": {
      estado: "habilitada",
      correlativas: []
    },
    "Pedagogía": {
      estado: "habilitada",
      correlativas: []
    },
    "Práctica I": {
      estado: "habilitada",
      correlativas: []
    },
    "Sistemas Operativos": {
      estado: "habilitada",
      correlativas: []
    },
    "Taller de Aprendizaje Basado en Problemas": {
      estado: "habilitada",
      correlativas: []
    },
    "Taller de Oralidad, Lectura y Escritura": {
      estado: "habilitada",
      correlativas: []
    },
    "Teología I": {
      estado: "habilitada",
      correlativas: []
    },
    "Software Ofimático I": {
      estado: "habilitada",
      correlativas: []
    }
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
    "Práctica II": {
      estado: "bloqueada",
      correlativas: ["Práctica I"]
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
    }
  }
};
