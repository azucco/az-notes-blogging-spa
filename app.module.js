import angular from 'angular'; // oggetto globale
import ngRoute from 'angular-route';
import ngResource from 'angular-resource';
import headerModule from './components/header/header.module';
import footerModule from './components/footer/footer.module';
import asideModule from './components/aside/aside.module';
import noteModule from './components/note/note.module';
import noteListModule from './components/noteList/noteList.module';
import noteFormModule from './components/noteForm/noteForm.module';
import appController from './app.controller';
import ResourcesService from './services/resources.service.js';
import 'bootstrap/dist/css/bootstrap.css';
import './_global.scss';

angular
    .module('mainApp', [ngRoute, ngResource, headerModule, footerModule, asideModule, noteListModule, noteModule, noteFormModule]) // metodo module('moduleName', [dependencies, ...])
    .controller('appController', appController)
    .service('ResourcesService', ResourcesService)
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                template: '<note-list-component on-select-tag="a.onSelectTag(tag)" notes="a.notes" initialize="a.init()"></note-list-component>'
            })
            .when('/new', {
                template: '<note-form-component initialize="a.init()"></note-form-component>'
            })
            .when('/edit/:noteId', {
                template: '<note-form-component initialize="a.init()"></note-form-component>'
            })
            .when('/:noteId', {
                template: '<note-component></note-component>'
            })
            .otherwise('/');
    }])
    .config(['$resourceProvider', function ($resourceProvider) {
        // Don't strip trailing slashes from calculated URLs
        $resourceProvider.defaults.stripTrailingSlashes = false;
    }])
    .config(['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $locationProvider.hashPrefix('');
    }])