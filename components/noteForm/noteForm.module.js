import noteFormComponent from './noteForm.component';
import ResourcesService from '../../services/resources.service';

export default angular
    .module('noteFormModule', [])
    .component('noteFormComponent', noteFormComponent())
    .service('ResourcesService', ResourcesService)
    .name