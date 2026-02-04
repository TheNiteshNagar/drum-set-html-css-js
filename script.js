// define audio at global so audio won't have to load when event happen
const audio1 = new Audio('./public/audio-1.mp3')
const audio2 = new Audio('./public/audio-2.mp3')
const audio3 = new Audio('./public/audio-3.mp3')
const audio4 = new Audio('./public/audio-4.mp3')
const audio5 = new Audio('./public/audio-5.mp3')
const audio6 = new Audio('./public/audio-6.mp3')
const audio7 = new Audio('./public/audio-7.mp3')
const audioUwu = new Audio('./public/audio-uwu.mp3')


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
      audio1.currentTime = 0
      audio1.play()
      break;
    case 's':
      audio2.currentTime = 0
      audio2.play()
      break;
    case 'd':
      audio3.currentTime = 0
      audio3.play()
      break;
    case 'f':
      audio4.currentTime = 0
      audio4.play()
      break;
    case 'j':
      audio5.currentTime = 0
      audio5.play()
      break;
    case 'k':
      audio6.currentTime = 0
      audio6.play()
      break;
    case 'l':
      audio7.currentTime = 0
      audio7.play()
      break;
    case 'uwu':
      audioUwu.currentTime = 0
      audioUwu.play()
      break

    default:
      break;
  }
}


// add full screen button 
document.querySelector('.fullscreen-button').addEventListener('click', () => {
  if(document.fullscreenElement) {
    document.exitFullscreen()
  } else {
    document.body.requestFullscreen()
  }
})