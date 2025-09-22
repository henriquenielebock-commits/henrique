document.getElementById("formTabuada").addEventListener("submit", function(event){
    // impedir o envio do formulario
    event.preventDefault();
    const numero = parseInt(document.getElementById("numero").value);
    const resultadoDiv = document.getElementById("resultado");

    if(isNaN(numero)){
        resultadoDiv.innerHTML = "<p>Por favor, insira um número valido!</p>";
        return;
    }

    let tabuadaHTML = `<h3> Tabuada do ${numero}</h3> <ul>`;
    for (let i = 1; i <=10; i++){
        tabuadaHTML += `<li> ${numero} X ${i} = ${numero * i} </li>`;
    }
    tabuadaHTML += `</ul>`;
    resultadoDiv.innerHTML = tabuadaHTML;

});

