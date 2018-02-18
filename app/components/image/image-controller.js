function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?

	var imageService = new ImageService()


	function getImage() {
		imageService.getImage(image => {
			document.body.style.background = `url(${image.large_url})`
			document.body.style.backgroundRepeat = 'no-repeat'
			document.body.style.backgroundSize = 'cover'
			console.log("here")

		})
	}

	getImage()

}


