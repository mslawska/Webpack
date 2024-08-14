import "./scss/app.scss";

import { CsApp } from './js/CsApp';
import { docReady } from './js/libs/misc';
import InterfaceLazyLoad from './js/libs/InterfaceLazyLoad';

const csapp = new CsApp();
csapp.addPlugin('lazyLoad', new InterfaceLazyLoad(csapp));

csapp.addAction('domScripts', (that) => {
    console.log('event na domScript');
})


docReady(() => {
    csapp.ready();
});
