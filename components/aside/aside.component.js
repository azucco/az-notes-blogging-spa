export default function asideComponent() {
    return {
        template: require('./aside.component.html'),
        controller: asideController,
        controllerAs: 'a',
        bindings: {
            tags: '<',
            onSelectTag: "&",
            selectedTags: '<'
        }
    }
}

class asideController {
};