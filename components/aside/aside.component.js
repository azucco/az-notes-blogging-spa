export default function asideComponent() {
    return {
        template: require('./aside.component.html'),
        controller: asideController,
        controllerAs: 'a',
        bindings: {
            tags: '<',
            filterListByTags: "&"
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
        if(this.selectedTags.indexOf(tag) === -1){ // .some() ?
            this.selectedTags.push(tag);
        }else{
            this.selectedTags.splice(this.selectedTags.indexOf(tag), 1);
        }  
        this.filterListByTags({selectedTags: this.selectedTags});
    }
};