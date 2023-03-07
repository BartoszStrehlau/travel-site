import { throttle } from "lodash";

export class StickyHeader {
    constructor() {
        this.siteHeader = document.querySelector('.site-header');
        this.events();
    }

    events() {
        window.addEventListener('scroll', throttle(() => this.runOnScroll(), 200))
    }

    runOnScroll(){
        if (window.scrollY > 60) {
            this.siteHeader.classList.add('site-header--darker');
        } else {
            this.siteHeader.classList.remove('site-header--darker');
        }
    }
}