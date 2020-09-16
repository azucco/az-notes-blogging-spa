import ngSanitize from 'angular-sanitize';
import noteTitleModule from '../noteTitle/noteTitle.module';
import noteComponent from './note.component';

export default angular
    .module('noteModule', [ngSanitize, noteTitleModule])
    .component('noteComponent', noteComponent())
    .name