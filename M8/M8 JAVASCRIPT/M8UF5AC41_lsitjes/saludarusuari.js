function enviarSalutacio() {
    var nom = document.querySelector("#nom").value;
    var cognom = document.querySelector("#cognom").value;

    var mostrar = document.getElementById("mostrar");
    mostrar.innerHTML = `
      <p>HOLA ${nom} ${cognom}, GRÀCIES PER OMPLIR EL FORMULARI </p>
    `;
}