export default function asideComponent() {
    return {
        template: require('./aside.component.html'),
        controller: asideController,
        controllerAs: 'a',
        bindings: {
            tags: '<',
            onSelectTag: "&",
            selectedTags: '<',
            onSearchType: '&'
        }
    }
}

class asideController {

    $onInit(){
        this.searchString = '';
    }
};