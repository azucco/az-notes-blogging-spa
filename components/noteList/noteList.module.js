import noteTitleModule from '../noteTitle/noteTitle.module';
import noteListComponent from './noteList.component';
import ResourcesService from '../../services/resources.service';
require('./noteList.module.scss');

export default angular
    .module('noteListModule', [noteTitleModule])
    .component('noteListComponent', noteListComponent())
    .service('ResourcesService', ResourcesService)
    .name