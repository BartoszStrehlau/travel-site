import '../styles/styles.css'
import 'lazysizes'
import { MobileMenu } from './modules/MobileMenu.js'
import { RevealOnScroll } from './modules/RevealOnScroll'
import { StickyHeader } from './modules/StickyHeader'



new MobileMenu()
new StickyHeader()
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75)
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60)
let modal

document.querySelectorAll('.open-modal').forEach(el => {
	el.addEventListener('click', (event) => {
		event.preventDefault();

		if(typeof modal == 'undefined'){
			import(/* webpackChunkName: "getInTouch" */ './modules/Modal').then(x => {
				modal = new x.Modal()
				setTimeout(() => modal.openTheModal(), 20)
			}).catch(() => console.log("There was a problem importing the Modal module"))
		}else{
			modal.openTheModal()
		}
	})
})

// eslint-disable-next-line no-undef
if (module.hot) {
   // eslint-disable-next-line no-undef
   module.hot.accept()
}