document.querySelector('audio').volume = '0.04';
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('nine')) {
    document.querySelector('input').value += 9;
    return;
  }
  if (event.target.classList.contains('eight')) {
    document.querySelector('input').value += 8;
    return;
  }
  if (event.target.classList.contains('seven')) {
    document.querySelector('input').value += 7;
    return;
  }
  if (event.target.classList.contains('six')) {
    document.querySelector('input').value += 6;
    return;
  }
  if (event.target.classList.contains('five')) {
    document.querySelector('input').value += 5;
    return;
  }
  if (event.target.classList.contains('four')) {
    document.querySelector('input').value += 4;
    return;
  }
  if (event.target.classList.contains('three')) {
    document.querySelector('input').value += 3;
    return;
  }
  if (event.target.classList.contains('two')) {
    document.querySelector('input').value += 2;
    return;
  }
  if (event.target.classList.contains('one')) {
    document.querySelector('input').value += 1;
    return;
  }
  if (event.target.classList.contains('zero')) {
    document.querySelector('input').value += 0;
    return;
  }
  if (event.target.classList.contains('clear')) {
    document.querySelector('input').value = '';
    return;
  }
  if (event.target.classList.contains('parenthesesL')) {
    document.querySelector('input').value += '(';
    return;
  }
  if (event.target.classList.contains('parenthesesR')) {
    document.querySelector('input').value += ')';
    return;
  }
  if (event.target.classList.contains('divide')) {
    document.querySelector('input').value += '/';
    return;
  }
  if (event.target.classList.contains('multiply')) {
    document.querySelector('input').value += '*';
    return;
  }
  if (event.target.classList.contains('plus')) {
    document.querySelector('input').value += '+';
    return;
  }
  if (event.target.classList.contains('minus')) {
    document.querySelector('input').value += '-';
    return;
  }
  if (event.target.classList.contains('point')) {
    document.querySelector('input').value += '.';
    return;
  }
  if (event.target.classList.contains('del')) {
    document.querySelector('input').value = document.querySelector('input').value.slice(0, -1);
    return;
  }
  if (event.target.classList.contains('equal')) {
    let result = eval(document.querySelector('input').value);
    document.querySelector('input').value = result;
    if (document.querySelector('input').value.includes('Infinity') || document.querySelector('input').value.includes('NaN') || document.querySelector('input').value.includes('undefined')) {
      document.querySelector('input').value = '';
      Swal.fire({
        title: 'Error!',
        text: 'Make only valid calculations!',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  }
})
