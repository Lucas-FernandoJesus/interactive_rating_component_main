// Selecionar todos os elementos com a classe "option_number"
const optionElements = document.querySelectorAll(".option_number");

optionElements.forEach(option => {
  option.addEventListener('click', () => {
    // Remover a classe ativa de todas as opções
    optionElements.forEach(opt => {
      opt.classList.remove("active");
    });

    // Adicionar a classe ativa ao elemento clicado
    option.classList.add("active");
  });
});

const submitElements = document.querySelectorAll(".submit");

submitElements.forEach(submit => {
  submit.addEventListener('click', () => {
    // Remover a classe ativa de todas as opções
    submitElements.forEach(opt => {
      opt.classList.remove("active");
    });

    // Adicionar a classe ativa ao elemento clicado
    submit.classList.add("active");
  });
});
