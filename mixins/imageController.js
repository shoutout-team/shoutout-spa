import endpoints from '~/store/utils/endpoints.js'

export default {
  methods: {
    // upload Image
    async change (e, imageKey, objectKey) {
      this.imageLoading = true
      const file = e.target.files[0]
      const filename = file.name
      if (!file) { return }
      const content = await readFile(file)
      try {
        const ep = objectKey === 'company' ? 'PICTURE_ENDPOINT' : 'AVATAR_ENDPOINT'
        const response = await this.$axios.$post(endpoints[ep], { asset: content, filename })
        this[imageKey] = content
        this[objectKey] = {
          ...this[objectKey],
          ...response
        }
        this.imageLoading = false
      } catch {
        this.failure = 'Problem beim Bildupload. Bitte beachte dass die maximale Bildgröße 2mb beträgt.'
        this.imageLoading = false
      }

      // if (Array.isArray(this[storePlace])) {
      //   this[storePlace].push({
      //     alt: 'preview',
      //     src: content
      //   })
      //   this.currentImage = this.images[this.images.length - 1]
      // } else {
      //   this[storePlace] = {
      //     src: content,
      //     alt: storePlace
      //   }
      // }
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
