import noteTitleComponent from './noteTitle.component';
import ResourcesService from '../../services/resources.service.js';
require('./noteTitle.module.scss');

export default angular
    .module('noteTitleModule', [])
    .component('noteTitleComponent', noteTitleComponent())
    .service('ResourcesService', ResourcesService)
    .name // perche name???