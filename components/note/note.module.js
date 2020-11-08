import ngSanitize from 'angular-sanitize';
import noteTitleModule from '../noteTitle/noteTitle.module';
import noteComponent from './note.component';
import ResourcesService from '../../services/resources.service';

export default angular
    .module('noteModule', [ngSanitize, noteTitleModule])
    .component('noteComponent', noteComponent())
    .service('ResourcesService', ResourcesService)
    .name
