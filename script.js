const drums = document.querySelectorAll('.drum');

for (const drum of drums) {
  drum.addEventListener('click', onScreenButtonClick)
}


window.addEventListener('keydown', onKeyboardButtonClick)


// on screen button click function
function onScreenButtonClick() {
  let keyName = this.id;
  if (keyName === 'uwu') {
    setTimeout(() => {
      document.querySelector('.uwu-girl').classList.add('uwu-girl-show')
    }, 1);
  }
  playAudio(keyName);

  setTimeout(() => {
    document.querySelector('.uwu-girl').classList.remove('uwu-girl-show')
  }, 500);

}

// on keyboard button click function
function onKeyboardButtonClick(e) {
  let keyName = e.key
  if (keyName === ';') {
    keyName = 'uwu' // Keyname can't be ';' so turn into uwu 😍
    setTimeout(() => {
      document.querySelector('.uwu-girl').classList.add('uwu-girl-show')
    }, 1);
  }

  const addClassName = document.querySelector(`#${keyName}`)
  addClassName.classList.add('drum-pressed')

  playAudio(keyName)

  // remove animation after 100mili second
  setTimeout(() => {
    addClassName.classList.remove('drum-pressed')
  }, 100)

  // remove uwu girl after some time 😍
  setTimeout(() => {
    document.querySelector('.uwu-girl').classList.remove('uwu-girl-show')
  }, 500);
}


// function to play song-audio
function playAudio(keyName) {
  switch (keyName) {
    case 'a':
      audio = new Audio('./public/audio-1.mp3')
      audio.play()
      break;
    case 's':
      audio = new Audio('./public/audio-2.mp3')
      audio.play()
      break;
    case 'd':
      audio = new Audio('./public/audio-3.mp3')
      audio.play()
      break;
    case 'f':
      audio = new Audio('./public/audio-4.mp3')
      audio.play()
      break;
    case 'j':
      audio = new Audio('./public/audio-5.mp3')
      audio.play()
      break;
    case 'k':
      audio = new Audio('./public/audio-6.mp3')
      audio.play()
      break;
    case 'l':
      audio = new Audio('./public/audio-7.mp3')
      audio.play()
      break;
    case 'uwu':
      audio = new Audio('./public/audio-uwu.mp3')
      audio.play()
      break

    default:
      break;
  }
}
