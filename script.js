const materias = [
  { nombre: "Matemática I", estado: "aprobada" },
  { nombre: "Historia TIC", estado: "aprobada" },
  { nombre: "Sistemas Operativos", estado: "cursando" },
  { nombre: "Filosofía", estado: "pendiente" },
  { nombre: "Pedagogía", estado: "pendiente" },
];

const estados = ["pendiente", "cursando", "aprobada", "trauma"];

const contenedor = document.getElementById("malla");

materias.forEach((materia, i) => {
  const div = document.createElement("div");
  div.textContent = materia.nombre;
  div.classList.add("materia", materia.estado);
  
  div.onclick = () => {
    const actual = estados.indexOf(materia.estado);
    const siguiente = (actual + 1) % estados.length;
    materia.estado = estados[siguiente];

    div.className = "materia " + materia.estado;
  };

  contenedor.appendChild(div);
});
