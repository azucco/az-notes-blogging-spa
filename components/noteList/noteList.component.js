export default function noteListComponent() {
    return {
        template: require('./noteList.component.html'),
        controller: noteListController,
        controllerAs: 'nl',
        bindings: {
            updateTag: '&',
            notes: '<',
            onSelectTag: '&'
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

    removeNote(id) {
        this.notes = this.filter('filter')(this.notes, {_id: `!${id}`}); // spunto per articolo
        this.updateTag();
    }


};