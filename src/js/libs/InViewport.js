export default class InViewport {
    observeInstance = false;
    constructor(csApp, activeClass = 'in-viewport', selector = '.js-viewport') {
        this.activeClass = activeClass;
        this.selector = selector;
        this.init();
        csApp.addAction('beforeDomScripts', () => { this.update() });
    }

    init() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: .25
        };
        this.observeInstance = new IntersectionObserver(
            (e) => this.handleIntersection(e),
            options
        );
        this.update();
    }
    update() {
        if (!this.observeInstance) {
            throw 'The observer is not created';
        }
        if (this.observeInstance) {
            this.observeInstance.disconnect()
        }
        this.$els = document.querySelectorAll(this.selector);
        if (!this.$els && this.$els.length === 0)
            return

        this.$els.forEach(element => {
            this.observeInstance.observe(element)
        })
    }
    handleIntersection(entries) {
        // Loop through all the observed elements
        for (let entry of entries) {
            // Check if the element is intersecting the viewport
            entry.target.classList[entry.isIntersecting ? 'add' : 'remove'](this.activeClass);
        }
    }
}
