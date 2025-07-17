const element = document.getElementById('config-container');

if (element) {
  element.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('category-option')) {
      const selectedCategory = target.textContent;
      console.log('Selected category:', selectedCategory);
    } else if (target.classList.contains('questions-option')) {
      const selectedQuestions = target.textContent;
      console.log('Selected number of questions:', selectedQuestions);
    }
  });
}