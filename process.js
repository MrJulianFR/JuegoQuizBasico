const botonCorregir = document.querySelector('.question-buttom');
const resultado = document.querySelector('#resultado')


botonCorregir.addEventListener('click', mostrarResultado)



function mostrarResultado(event){
    event.preventDefault();
    let puntos = 0;
    let total = 3;
    let respuestas = ["1", "2", "2"]

    let form = document.forms['questions'];

    for(let i = 1; i <= total; i++){
        if(form['question'+i].value == null || form['question'+i].value == ""){
            alert("Responde la pregunta " + i);
            return false;
        }else{
            if(form['question'+i].value == respuestas[i-1]){
                puntos++
            }   
        }

    }
    resultado.innerText = puntos;
    puntos = 0;
    return false;

}
