import '../styles/styles.css'
import { MobileMenu } from './modules/MobileMenu.js'
import { RevealOnScroll } from './modules/RevealOnScroll'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let mobileMenu = new MobileMenu()
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75)
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60)


// eslint-disable-next-line no-undef
if (module.hot) {
    // eslint-disable-next-line no-undef
    module.hot.accept()
}