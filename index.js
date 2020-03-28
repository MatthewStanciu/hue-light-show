require('dotenv').config()
const huejay = require('huejay')

const client = new huejay.Client({
  host: process.env.HOST,
  username: process.env.USERNAME
})

function updateLight(lightId) {
	client.lights.getById(lightId).then(light => {
		light.brightness = Math.floor((Math.random() * 204) + 50) // random number between 50 and 254
		light.xy = [(Math.random() * 0.7), (Math.random() * 0.8)]
		light.saturation = Math.floor((Math.random() * 204) + 50)
		light.transitionTime = Math.floor((Math.random() * 2) + 3) // between 3 and 5
		
		return client.lights.save(light)
	})
}

setInterval(() => {
	client.lights.getAll().then(lights => {
		lights.forEach(light => {
			if (light >= 3) updateLight(light)
		})
	})
}, 3000)