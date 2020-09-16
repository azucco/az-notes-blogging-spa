import headerComponent from './header.component';
require('./header.module.scss');

export default angular
    .module('headerModule', [])
    .component('headerComponent', headerComponent())
    .name