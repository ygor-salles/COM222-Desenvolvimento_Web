function openPresent(event) {
    const image = event.currentTarget;
    image.src = 'https://media.giphy.com/media/27ppQUOxe7KlG/giphy.gif';
    image.removeEventListener('click', openPresent);
  }
  
  const image = document.querySelector('img');
  image.addEventListener('click', openPresent);