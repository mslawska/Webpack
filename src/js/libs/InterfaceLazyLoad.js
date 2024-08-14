import LazyLoad from "vanilla-lazyload";

export default class InterfaceLazyLoad {
    lazyLoadInstance = [];
    constructor(csApp) {
        this.lazyLoadInstance = new LazyLoad({
            elements_selector: "[data-src]",
            load_delay: 100,
            callback_reveal: (el) => {
                if (el.complete && el.naturalWidth !== 0) {
                    el.classList.remove('loading')
                }
            }
        });
        csApp.addAction('beforeDomScripts', () => { this.lazyLoadInstance.update() });
    }
}
