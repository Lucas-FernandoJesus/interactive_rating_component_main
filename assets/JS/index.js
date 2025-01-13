// Selecionar todos os elementos com a classe "option_number" e o botão de submit
const optionElements = document.querySelectorAll(".option_number");
const submitButton = document.getElementById("select_option_btn");
const content = document.querySelector(".content");

let selectedRating = null; // Armazena a avaliação selecionada

// Adicionar evento de clique a cada opção
optionElements.forEach(option => {
  option.addEventListener('click', () => {
    // Remover a classe ativa de todas as opções
    optionElements.forEach(opt => {
      opt.classList.remove("active");
    });

    // Adicionar a classe ativa ao elemento clicado
    option.classList.add("active");

    // Atualizar o valor da avaliação selecionada
    selectedRating = option.textContent.trim();
  });
});

// Adicionar evento de clique ao botão de submit
submitButton.addEventListener("click", () => {
  // Verificar se uma avaliação foi selecionada
  if (selectedRating) {
    // Substituir o conteúdo atual pela nova seção
    content.innerHTML = `
      <section class="content_congratulations">
        <img src="./assets/images/illustration-thank-you.svg" class="img_thanks" alt="img_thanks">
        <h4 class="alert">
          You selected ${selectedRating} out of 5
        </h4>
        <h1 class="title">
          Thank you!
        </h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need more support, 
          don’t hesitate to get in touch!
        </p>
      </section>
    `;
  } else {
    // Alerta caso nenhuma opção tenha sido selecionada
    alert("Please select a rating before submitting.");
  }
});
