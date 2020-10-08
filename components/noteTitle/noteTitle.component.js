export default function noteTitleComponent() {
    return {
        template: require('./noteTitle.component.html'),
        controller: noteTitleController,
        controllerAs: 'nt',
        bindings: {
            title: '<',
            id: '<',
            published: '<',
            removeNote: '&?' // spunto per articolo
        }
    }
}

class noteTitleController {

    /* @ngInject */
    constructor(ResourcesService, $location) {
        this.ResourcesService = ResourcesService;
        this.location = $location;
    }

    delete(id) {
        this.ResourcesService.deleteNote.fetch({ id: id })
            .$promise.then(() => {
                if(this.removeNote !== undefined){
                    this.removeNote();
                }else{
                    this.location.path('/');
                }
            });
    }

    publish(id) { 
        this.ResourcesService.publishNote.fetch({
            id: id,
            published: !this.published
        }).$promise;
    }

};