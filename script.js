const button = document.querySelector('.button')
const container = document.querySelector('.container')
const localCounter = document.querySelector('.counter')
const FIRST_AUDIO_URL = './audio/kuruto.mp3'
const AUDIO_URL_1 = './audio/kuru1.mp3'
const AUDIO_URL_2 = './audio/kuru2.mp3'

let firstSquish = true

let counter = localStorage.getItem('counter')
localCounter.textContent = localStorage.getItem('counter')

button.addEventListener('click', () => {
  const getRandomAudioAndImage = Math.floor(Math.random() * 3 + 1)

  animationKuru(getRandomAudioAndImage)
  playAudio(getRandomAudioAndImage)
  localStorageCounter()
})

function animationKuru(getRandomAudioAndImage) {
  const image = new Image()

  if (getRandomAudioAndImage == 1) {
    image.src = './img/gif/hertaa1.gif'
  } else {
    image.src = './img/gif/hertaa2.gif'
  }

  let id = null
  const elem = document.createElement('img')
  elem.style.position = 'absolute'
  elem.style.right = '-500px'
  elem.style.zIndex = '-10'
  elem.style.bottom = '0'
  elem.src = image.src
  container.appendChild(elem)

  let pos = -500
  const limit = window.innerWidth + 500
  id = setInterval(() => {
    if (pos >= limit) {
      clearInterval(id)
      elem.remove()
    } else {
      pos += 21
      elem.style.right = pos + 'px'
    }
  }, [12])
}

function playAudio(getRandomAudioAndImage) {
  if (firstSquish) {
    firstSquish = false
    playAudioWithUrl(FIRST_AUDIO_URL)
    return
  } else if (getRandomAudioAndImage == 1) {
    playAudioWithUrl(AUDIO_URL_1)
  } else {
    playAudioWithUrl(AUDIO_URL_2)
  }
}

function playAudioWithUrl(audioUrl) {
  const audio = new Audio(audioUrl)
  audio.play()
}

function localStorageCounter() {
  counter = counter || '0'
  counter++

  localStorage.setItem('counter', counter)
  localCounter.textContent = localStorage.getItem('counter')
}
