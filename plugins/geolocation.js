export default (success, failure) => {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(success, failure)
  }
}
