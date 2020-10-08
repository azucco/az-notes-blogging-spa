export default class ResourcesService {
    /* @ngInject */
    constructor($resource) {
        this.resource = $resource;
        this.init();
    }

    init() {

        this.getNotes = this.resource(`http://localhost:3000/notes/:tags`,
            {
            },
            {
                fetch: { isArray: true }
            });

        this.getNote = this.resource(`http://localhost:3000/note/:id`,
            {
                id: '@id'
            },
            {
                fetch: {
                    method: 'GET',
                }
            });

        this.saveNote = this.resource(`http://localhost:3000/note/`,
            {
                title: "@title",
                description: "@description",
                markdown: "@markdown"
            },
            {
                fetch: {
                    method: 'POST',
                }
            });

        this.updateNote = this.resource(`http://localhost:3000/note/:id`,
            {
                id: "@id",
                title: "@title",
                description: "@description",
                markdown: "@markdown"
            },
            {
                fetch: {
                    method: 'PUT',
                }
            });
        
        this.publishNote = this.resource(`http://localhost:3000/note/publish/:id`,
            {
                id: "@id",
                published: "@published"
            },
            {
                fetch: {
                    method: 'PUT',
                }
            });

        this.deleteNote = this.resource(`http://localhost:3000/note/:id`,
            {
                id: "@id"
            },
            {
                fetch: {
                    method: 'DELETE',
                }
            });
           
        this.getTags = this.resource(`http://localhost:3000/tags`,
            {},
            {
                fetch: { isArray: true }
            });    

    }
}
