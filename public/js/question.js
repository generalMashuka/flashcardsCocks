const formQ = document.querySelector('.formQ')
formQ.addEventListener('submit', async (event) => {
  event.preventDefault();
  const form = event.target;
  const answer = event.target.answer.value;
  const data = form.closest('.card');
  const id = Number(data.dataset.id);
  console.log(answer);
  const response = await fetch('/topic/submit-answer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ answer, id }),
  });
  const rightAns = await response.json()


  // const notesEl = document.getElementById('');

  if (answer === rightAns.question) {
    formQ.insertAdjacentHTML('afterbegin', 'ВЕРНО');
  } else {
    formQ.insertAdjacentHTML('afterbegin', `НЕВЕРНО, правильный ответ: ${rightAns.question}`);
  }

  
})
