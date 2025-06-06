function startExperience() {
  document.querySelector("header").style.display = "none";
  document.getElementById("content").style.display = "block";
  renderQuiz();
}

const preguntas = [
  {
    pregunta: "¿Cuál valor promueve el trabajo en equipo?",
    opciones: ["Ética", "Solidaridad", "Servicio", "Responsabilidad"],
    respuesta: "Solidaridad",
  },
  {
    pregunta: "¿Qué valor implica cumplir lo prometido?",
    opciones: ["Ética", "Responsabilidad", "Servicio", "Respeto"],
    respuesta: "Responsabilidad",
  },
  {
    pregunta: "¿Cuál valor guía nuestras decisiones morales?",
    opciones: ["Ética", "Servicio", "Solidaridad", "Eficiencia"],
    respuesta: "Ética",
  },
  {
    pregunta: "¿Qué valor refleja la atención a los usuarios?",
    opciones: ["Solidaridad", "Responsabilidad", "Servicio", "Transparencia"],
    respuesta: "Servicio",
  }
];

function renderQuiz() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";
  preguntas.forEach((q, index) => {
    const div = document.createElement("div");
    div.innerHTML = `<p><strong>${q.pregunta}</strong></p>`;
    q.opciones.forEach(opcion => {
      div.innerHTML += `
        <label>
          <input type="radio" name="q${index}" value="${opcion}" />
          ${opcion}
        </label><br>
      `;
    });
    container.appendChild(div);
  });
}

function submitQuiz() {
  let score = 0;
  preguntas.forEach((q, i) => {
    const seleccionada = document.querySelector(`input[name="q${i}"]:checked`);
    if (seleccionada && seleccionada.value === q.respuesta) {
      score++;
    }
  });
  document.getElementById("resultado").style.display = "block";
  document.getElementById("score").innerText = `¡Obtuviste ${score} de ${preguntas.length} respuestas correctas!`;
}
