import GOOGLE_API_KEY from '../src/api.js'
import axios from 'axios'

const mapUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key='

const form = document.querySelector('form')!
const addressInput = document.getElementById('address')! as HTMLInputElement

function searchAdress(event: Event) {
  event.preventDefault()
  const enteredAdress = addressInput.value

  axios.get(`${mapUrl}${GOOGLE_API_KEY}`)
}

form.addEventListener('submit')