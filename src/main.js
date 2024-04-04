// Para pegar um elemento do HTML com o Javascript, use:
//  document.getElementById("ID DO ELEMENTO")
// O evento de interesse para essa atividade é o "submit" do formulário.
// Os elementos <input>  guardam o valor do texto digitado neles no atributo `.value`.
// Lembre-se de que não queremos que o formulário seja enviado, para isso você deve usar o `e.preventDefault()`


const form = document.getElementById("adicionarPerguntaForm");
const input_pergunta = document.getElementById("perguntaTextoInput");
const lista_perguntas = document.getElementById("questionarioList");

form.addEventListener('submit', (e) => {
    console.log("Formulário enviado!");
    e.preventDefault();

    texto_pergunta = input_pergunta.value;
    input_pergunta.value = "";
    nova_pergunta = document.createElement("li");

    nova_pergunta.innerText = texto_pergunta;

    lista_perguntas.appendChild(nova_pergunta);

})