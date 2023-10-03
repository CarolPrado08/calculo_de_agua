

function calcular() {
    var peso = parseFloat(document.getElementById("num_1").value);
    var div = document.getElementById("resp");

    if (isNaN(peso) || peso <= 0) {
        div.innerHTML = `<h2>Insira um valor válido para o peso!</h2>`;
        div.style.display = "block";
        return;
    }

    var litros = Math.round((peso * 35)) / 1000 .toFixed(2);

    div.innerHTML = `<h2>Seu peso é: ${peso}</h2><p>E você precisa beber: ${litros} litros de água</p>`;
    div.style.display = "block";
}
     
    
