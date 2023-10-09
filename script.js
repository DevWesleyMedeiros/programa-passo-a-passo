window.onload = function(){
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
function elementHtmltextAreaGenerator(){
    let textarea = document.createElement("textarea");
    textarea.setAttribute("cols", 20);
    textarea.setAttribute("rows", 10);
    textarea.setAttribute("class", "text_area");
    textarea.setAttribute("readonly", "")
    textarea.setAttribute("disabled", "")
    textarea.setAttribute("name", "text_area")
    textarea.setAttribute("placeholder", "Escreva seu passo");
    textarea.style.cursor = "not-allowed"
    return textarea;
}
function elementHtmlDivCheckBoxAreaGenerator(){
    let buttonNext = elementHtmlButtonCreatorNextStep()
    let buttonEdit = elementHtmlButtonEditGenerator()
    let inputElement = elementHtmlInputAreaGenerator()
    let labelElement = elementHtmlLabelAreaGenerator()
    let divCheckbox = document.createElement("div")
    divCheckbox.setAttribute("class", "btn_checkbox")
    divCheckbox.appendChild(inputElement)
    divCheckbox.appendChild(labelElement)
    divCheckbox.appendChild(buttonEdit)
    divCheckbox.appendChild(buttonNext)
    return divCheckbox
}
function elementHtmlButtonEditGenerator(){
    let button = document.createElement("button")
    button.setAttribute("class", "edit_textarea")
    button.textContent = "Editar passo"
    return button
}
function elementHtmlButtonCreatorNextStep(){
    let button = document.createElement("button")
    button.setAttribute("class", "button_creator_next_step")
    button.textContent = "Criar Passo"
    return button
}
function elementHtmlInputAreaGenerator(){
    let input = document.createElement("input")
    input.setAttribute("type", "checkbox")
    return input
}
function elementHtmlLabelAreaGenerator(){
    let label = document.createElement("label")
    label.innerText = "Finalizar Passo"
    return label
}

function elementHtmlPGenerator(step){
    let tagP = document.createElement("p")
        tagP.innerText = `PASSO ${step}`
        return tagP
}

btnEditTextArea.addEventListener("click", ()=>{
    let textAreaElement = elementHtmltextAreaGenerator()
    textAreaElement.removeAttribute("disabled")
    textAreaElement.removeAttribute("readonly")
    textAreaElement.style.cursor = "text"
})

btnCreatorNextStep.addEventListener("click", ()=>{
    if(inputCheckbox.checked){
        elementHtmldivGenerator();
    }else{
        alert("Você precisa finalizar o passo")
    }
})
}