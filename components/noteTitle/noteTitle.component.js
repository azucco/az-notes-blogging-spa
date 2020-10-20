export default function noteTitleComponent() {
    return {
        template: require('./noteTitle.component.html'),
        controller: noteTitleController,
        controllerAs: 'nt',
        bindings: {
            title: '<',
            id: '<',
            published: '<',
            initialize: '&?' 
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
                if(this.initialize !== undefined){
                    this.initialize();
                }else{
                    this.location.path('/');
                }
            });
    }

    publish(id) { 
        this.ResourcesService.publishNote.fetch({
            id: id,
            published: !this.published
        }).$promise.then(() => {
            if(this.initialize !== undefined){
                this.initialize();
            }else{
                this.location.path('/');
            }
        });
    }

};