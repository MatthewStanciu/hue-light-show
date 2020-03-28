require('dotenv').config()
const huejay = require('huejay')
const http = require('http')

const client = new huejay.Client({
  host: process.env.HOST,
  username: process.env.USERNAME
})

function updateLight(lightId) {
	client.lights.getById(lightId).then(light => {
		light.brightness = Math.floor((Math.random() * 254) + 50)
		light.xy = [(Math.random() * 0.7), (Math.random() * 0.8)]
		light.saturation = Math.floor((Math.random() * 254) + 50)
		light.transitionTime = Math.floor((Math.random() * 5) + 3)
		
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

http.createServer().listen(3000)