document.getElementById('current-year').innerHTML = String(
  new Date().getFullYear()
)

const about = document.getElementById('about').getBoundingClientRect().top
const services = document.getElementById('services').getBoundingClientRect().top
const contact = document.getElementById('contact').getBoundingClientRect().top

document.getElementById('link-home').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
document.getElementById('link-about').addEventListener('click', () => {
  window.scrollTo({ top: about, behavior: 'smooth' })
})
document.getElementById('link-services').addEventListener('click', () => {
  window.scrollTo({ top: services, behavior: 'smooth' })
})
document.getElementById('link-contact').addEventListener('click', () => {
  window.scrollTo({ top: contact, behavior: 'smooth' })
})
