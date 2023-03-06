import { throttle, debounce } from "lodash"

export class RevealOnScroll {
    constructor(els, thresholdPercent) {
        this.thresholdPercent = thresholdPercent
        this.itemsToReveal = els
        this.browserHeight = window.innerHeight
        this.hideInitially()
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)
        this.events()
    }

    events() {
        window.addEventListener('scroll', this.scrollThrottle)
        window.addEventListener('resize', debounce(() => {
            console.log("Resize just run")
            this.browserHeight = window.innerHeight
            }, 333)
        )
    }

    calcCaller(){
        console.log("Scroll Function")
            this.itemsToReveal.forEach(el => {
            if (el.isRevealed == false){
                this.calulateIfScrolledTo(el)
            }
        })
    }

    calulateIfScrolledTo(el) {
        if (window.scrollY + this.browserHeight > el.offsetTop){
            console.log("ellement calculated")
            let scrollPercent = (el.getBoundingClientRect().top / this.browserHeight) * 100
            if(scrollPercent < this.thresholdPercent) {
                el.classList.add('reveal-item--is-visible')
                el.isRevealed = true
                if (el.isLastItem){
                    window.removeEventListener('scroll', this.scrollThrottle)
                }
            }
        }
    }

    hideInitially() {
        this.itemsToReveal.forEach(el => {
            el.classList.add('reveal-item')
            el.isRevealed = false
        })
        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true
        }
}