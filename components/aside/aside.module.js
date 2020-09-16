import asideComponent from './aside.component';
import ResourcesService from '../../services/resources.service.js';
require('./aside.module.scss');

export default angular
    .module('asideModule', [])
    .component('asideComponent', asideComponent())
    .service('ResourcesService', ResourcesService)
    .name