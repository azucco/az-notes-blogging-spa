export default function noteFormComponent() {
    return {
        template: require('./noteForm.component.html'),
        controller: noteFormController,
        controllerAs: 'nf',
        bindings: {
            updateTag: '&'
        }
    }
}

class noteFormController {

    /* @ngInject */ // spunto per articolo
    constructor(ResourcesService, $location, $routeParams, $scope) {
        this.ResourcesService = ResourcesService;
        this.location = $location;
        this.routeParams = $routeParams;
        this.scope = $scope;
        this.init();
    }

    save() {
        if (this.scope.noteForm.$dirty === true) {
            if (this.note.id === undefined) {
                this.ResourcesService.saveNote.fetch({
                    title: this.note.title,
                    description: this.note.description,
                    markdown: this.note.markdown,
                    tags: this.explodeTags(this.note.tagsString)
                })
                    .$promise.then((note) => {
                        if (note._id !== undefined) {
                            this.updateTag();
                            this.location.path('/');
                        }
                    });
            } else {
                this.ResourcesService.updateNote.fetch({
                    id: this.note.id,
                    title: this.note.title,
                    description: this.note.description,
                    markdown: this.note.markdown,
                    tags: this.explodeTags(this.note.tagsString)
                })
                    .$promise.then((note) => {
                        if (note._id !== undefined) {
                            this.updateTag();
                            this.location.path(`/${note._id}`);
                        }
                    });
            }
        }

    }

    init() {
        this.note = {};
        this.note.id = this.routeParams.noteId;

        if (this.note.id !== undefined) {
            this.ResourcesService.getNote.fetch({
                id: this.note.id
            })
                .$promise.then((note) => {
                    this.note.title = note.title;
                    this.note.description = note.description;
                    this.note.markdown = note.markdown;
                    this.note.tagsString = this.implodeTags(note.tags);
                    this.note.tags = note.tags;
                });
        }
    }

    /**
     * @param {String} tagsString 
     * @return {Array}
     */
    explodeTags(tagsString) {
        let tags = tagsString.split(',');
        return tags
            .map(tag => tag.trim())
            .filter(tag => tag !== '');
    }

    /**
     * @param {Array} tags
     * @return {String}
     */
    implodeTags(tags) {
        const tagsString = tags.join(', ');
        return tagsString;
    }
};