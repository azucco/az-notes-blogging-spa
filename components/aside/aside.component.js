export default function asideComponent() {
    return {
        template: require('./aside.component.html'),
        controller: asideController,
        controllerAs: 'a',
        bindings: {
            tags: '<',
            getNoteListByTags: "&"
        }
    }
}

class asideController {

    constructor(ResourcesService) {
        this.ResourcesService = ResourcesService;
    }

    async $onInit() {
        this.selectedTags = [];
    }

    onSelectTag(tag){
        if(this.selectedTags.indexOf(tag) === -1){ // sum?
            this.selectedTags.push(tag);
            this.getNoteListByTags({selectedTags: this.selectedTags});
        }   
    }
};