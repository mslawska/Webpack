import {
    vhCalc,
} from './libs/misc';

export class CsApp {
    isMobile = false;
    navInstance = false;
    plugins = {};
    hooks = {
        beforeDomScripts: [],
        ready: [],
        domScripts: [],
        resizeHandler: [],
        scrollHandler: [],
        afterLoad: [],
        beforLoad: [],
    };
    constructor() {
        vhCalc();
    }

    beforeDomScripts() {
        this.doAction('beforeDomScripts');
    }

    domScripts() {
        this.doAction('domScripts');
    }

    ready() {
        this.resizeHandler();
        this.scrollHandler();
        window.addEventListener("resize", () => { this.resizeHandler() });
        window.addEventListener("scroll", () => { this.scrollHandler() });
        this.doAction('domScripts')
        setTimeout(() => {
            document.body.classList.add('ready');
            this.doAction('ready'); //Once
        }, 100);
    }

    resizeHandler() {
        this.isMobile = window.innerWidth < 769;
        this.doAction('resizeHandler');
    }

    scrollHandler() {
        this.doAction('scrollHandler');
    }

    /* list of hooks
       beforeDomScripts
       ready
       domScripts
       resizeHandler
       scrollHandler
       beforLoad
    */
    addAction(actionName, func) {
        this.hooks[actionName].push(func);
    }
    //All Action content point on this function
    doAction(actionName) {
        if (!this.hooks[actionName] || this.hooks[actionName].length === 0) return;
        this.hooks[actionName].forEach((action) => {
            action(this);
        });
    }
    //Add active plugin
    addPlugin(plugiName, instance) {
        if (this.plugins[plugiName]) {
            throw ('plugin "' + plugiName + '" is already registered');
        }
        this.plugins[plugiName] = instance;
    }
 
}
