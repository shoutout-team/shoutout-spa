const IBAN = require('iban')

export default {
  data () {
    return {
      paypalRule: [
        v => this.validatePaypalLink(v) || 'Bitte gib einen gültigen PaypalMe link ein'
      ],
      gofoundmeRule: [
        v => this.validateGoFoundMeLink(v) || 'Bitte gib einen gültigen GoFoundMe link ein'
      ],
      ibanRule: [
        v => this.validateIBAN(v) || 'Die eingegebene IBAN ist ungültig'
      ],
      websiteRule: [
        v => this.validateWebsiteURL(v) || 'Bitte prüfe deine Website URL'
      ],
      facebookRules: [
        v => this.validateFacebookURL(v) || 'Bitte prüfe deinen Facebook Link'
      ],
      instagramRules: [
        v => this.validateInstagramURL(v) || 'Bitte prüfe deinen Instagram Link'
      ],
      nameRules: [
        v => !!v || 'Pflichtfeld'
      ],
      passwordRules: [
        v => !!v || 'Pflichtfeld',
        v => v.length >= 8 || 'Passwort muss aus mindestens 8 Zeichen bestehen'
      ],
      emailRules: [
        v => !!v || 'Pflichtfeld',
        v => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-Mail Adresse muss gültig sein'
      ]
    }
  },
  methods: {
    validateGoFoundMeLink (gofoundme) {
      const re = /^(https?:\/\/)?((w{3}\.)?)gofundme\.com\/\S*$/
      return re.test(gofoundme) || gofoundme === ''
    },
    validatePaypalLink (paypal) {
      const re = /^(https?:\/\/)?((w{3}\.)?)paypal\.me\/\S*$/
      return re.test(paypal) || paypal === ''
    },
    validateIBAN (iban) {
      return IBAN.isValid(iban) || iban === ''
    },
    validateFacebookURL (facebookURL) {
      const re = /^(https?:\/\/)?((w{3}\.)?)facebook.com\/.*/
      return re.test(facebookURL) || facebookURL === ''
    },
    validateInstagramURL (instagramURL) {
      const re = /^\s*(http:\/\/)?instagram\.com\/[a-z\d-_]{1,255}\s*$/i
      return re.test(instagramURL) || instagramURL === ''
    },
    validateWebsiteURL (website) {
      const re = /(?:(?:https?|ftp):\/\/|\b(?:[a-z\d]+\.))(?:(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))?\))+(?:\((?:[^\s()<>]+|(?:\(?:[^\s()<>]+\)))?\)|[^\s`!()[\]{};:'".,<>?«»“”‘’]))?/
      return re.test(website) || website === ''
    }
  }
}
