export default function noteListComponent() {
    return {
        template: require('./noteList.component.html'),
        controller: noteListController,
        controllerAs: 'nl',
        bindings: {
            notes: '<',
            onSelectTag: '&',
            initialize: '&'
        }
    }
}

class noteListController {

    /* @ngInject */
    constructor(ResourcesService, $filter, $routeParams) {
        this.ResourcesService = ResourcesService;
        this.filter = $filter;
        this.routeParams = $routeParams;
    }

};