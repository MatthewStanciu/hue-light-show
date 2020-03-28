require('dotenv').config()
const huejay = require('huejay')
const http = require('http')

const client = new huejay.Client({
  host: process.env.HOST,
  username: process.env.USERNAME
})

client.lights.getAll().then(lights => {
	lights.forEach(light => console.log(`Light [${light.id}]: ${light.name}`))
})

/*client.lights.getById(4).then(light => {
	light.brightness = 254
  light.xy = [(Math.random() * 0.7), (Math.random() * 0.8)]
	light.saturation = 254
	light.transitionTime = 3
	
	return client.lights.save(light)
})
.then(light => {
	console.log(`Updated light [${light.id}]`);
})
.catch(error => {
	console.log('Something went wrong');
	console.log(error.stack);
});*/

function updateLights() {
	client.lights.getById(3).then(light => {
		light.brightness = Math.floor((Math.random() * 254) + 50)
		light.xy = [(Math.random() * 0.7), (Math.random() * 0.8)]
		light.saturation = Math.floor((Math.random() * 254) + 50)
		light.transitionTime = Math.floor((Math.random() * 5) + 3)
		
		return client.lights.save(light)
	})
	client.lights.getById(4).then(light => {
		light.brightness = Math.floor((Math.random() * 254) + 50)
		light.xy = [(Math.random() * 0.7), (Math.random() * 0.8)]
		light.saturation = Math.floor((Math.random() * 254) + 50)
		light.transitionTime = Math.floor((Math.random() * 5) + 3)
		
		return client.lights.save(light)
	})
	client.lights.getById(5).then(light => {
		light.brightness = Math.floor((Math.random() * 254) + 50)
		light.xy = [(Math.random() * 0.7), (Math.random() * 0.8)]
		light.saturation = Math.floor((Math.random() * 254) + 50)
		light.transitionTime = Math.floor((Math.random() * 5) + 3)
		
		return client.lights.save(light)
	})
	client.lights.getById(6).then(light => {
		light.brightness = Math.floor((Math.random() * 254) + 50)
		light.xy = [(Math.random() * 0.7), (Math.random() * 0.8)]
		light.saturation = Math.floor((Math.random() * 254) + 50)
		light.transitionTime = Math.floor((Math.random() * 5) + 3)
		
		return client.lights.save(light)
	})
	client.lights.getById(7).then(light => {
		light.brightness = Math.floor((Math.random() * 254) + 50)
		light.xy = [(Math.random() * 0.7), (Math.random() * 0.8)]
		light.saturation = Math.floor((Math.random() * 254) + 50)
		light.transitionTime = Math.floor((Math.random() * 5) + 3)
		
		return client.lights.save(light)
	})
}

setInterval(() => updateLights(), 3000)

http.createServer().listen(3000)