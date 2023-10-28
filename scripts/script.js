const btnCreatorNextStep = document.querySelector(".button_creator_next_step")
const inputCheckbox = document.querySelector(".checkbox")
const divMainFatherAreaTexto = document.querySelector(".area_texto")
const btnEditTextArea = document.querySelector(".edit_textarea")

let stepCounter = 2
function elementHtmldivGenerator(){
    let divCheckbox = elementHtmlDivCheckBoxAreaGenerator(stepCounter)
    let TextArea = elementHtmltextAreaGenerator()
    let tagp = elementHtmlPGenerator(stepCounter)
    let divFieldText = document.createElement("div")
    divFieldText.setAttribute("class", "field_text")
    divFieldText.appendChild(tagp)
    divFieldText.appendChild(TextArea)
    divFieldText.appendChild(divCheckbox)
    divMainFatherAreaTexto.appendChild(divFieldText)
    stepCounter++
}
//Cria um elemento textarea
function elementHtmltextAreaGenerator(){
    let textarea = document.createElement("textarea");
    textarea.setAttribute("cols", 20);
    textarea.setAttribute("rows", 10);
    textarea.setAttribute("class", "text_area");
    textarea.setAttribute("placeholder", "Escreva seu passo");
    return textarea;
}
function elementHtmlDivCheckBoxAreaGenerator(){
    let divCheckbox = document.createElement("div")
    return divCheckbox
}
// Cria um contador para cada caixa
function elementHtmlPGenerator(step){
    let tagP = document.createElement("p")
        tagP.innerText = `PASSO ${step}`
        return tagP
}

// Usando Jquery para manipular //
$('.checkbox').on('click', function() {
    if (inputCheckbox.checked) {
        let inputtextarea = $('textarea');
        inputtextarea.attr('disabled', "").css('cursor', 'not-allowed');
    }
});
$('.button_creator_next_step').on('click', function() {
    let checkbox = $('input[type=checkbox]');
    if (checkbox.prop("checked")) {
        elementHtmldivGenerator();
    } else {
        alert("Você precisa finalizar o passo");
    }
});
$('.edit_textarea').on('click', function() {
    if (!inputCheckbox.checked) {
        let inputtextarea = $('textarea');
        inputtextarea.removeAttr('disabled').css('cursor', 'text');
    } else {
        alert("Para editá-lo, desmarque o checkbox");
    }
});
