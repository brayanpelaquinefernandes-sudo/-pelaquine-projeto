const curiosidades = [
    "O Brasil está entre os maiores exportadores de soja do mundo.",
    "O agronegócio representa grande parte do PIB brasileiro.",
    "A tecnologia no campo aumenta a produtividade das plantações.",
    "O Brasil tem um dos solos mais férteis do planeta em várias regiões.",
    "A agricultura familiar é essencial para o abastecimento interno."
];

function mostrarCuriosidade() {
    const texto = document.getElementById("textoCurioso");
    const indice = Math.floor(Math.random() * curiosidades.length);
    texto.innerHTML = curiosidades[indice];
}
