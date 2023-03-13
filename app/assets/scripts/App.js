import '../styles/styles.css'
import { MobileMenu } from './modules/MobileMenu.js'
import { RevealOnScroll } from './modules/RevealOnScroll'
import { StickyHeader } from './modules/StickyHeader'
import { Modal } from './modules/_Modal'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
new Modal()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let mobileMenu = new MobileMenu()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let stickyHeader = new StickyHeader()
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75)
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60)


// eslint-disable-next-line no-undef
if (module.hot) {
    // eslint-disable-next-line no-undef
    module.hot.accept()
}