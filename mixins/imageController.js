export default {
  methods: {
    // upload Image
    async change (e, storePlace = 'images') {
      const file = e.target.files[0]
      if (!file) { return }
      const content = await readFile(file)

      if (Array.isArray(this[storePlace])) {
        this[storePlace].push({
          alt: 'preview',
          src: content
        })
        this.currentImage = this.images[this.images.length - 1]
      } else {
        this[storePlace] = {
          src: content,
          alt: storePlace
        }
      }
    },

    // remove Image
    dropImage (key) {
      this.images.splice(key, 1)
      this.currentImage = this.images.length > 0 ? this.images[this.images.length - 1] : this.defaultImage
    }
  }
}

// make sure to upload file correctly
const readFile = (inputFile) => {
  const temporaryFileReader = new FileReader()
  return new Promise((resolve, reject) => {
    temporaryFileReader.onerror = () => {
      temporaryFileReader.abort()
      reject(new DOMException('Problem parsing input file.'))
    }
    temporaryFileReader.onload = () => {
      resolve(temporaryFileReader.result)
    }
    temporaryFileReader.readAsDataURL(inputFile)
  })
}
