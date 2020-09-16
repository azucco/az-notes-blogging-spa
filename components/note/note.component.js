import noteTemplate from './note.component.html';
import MarkdownIt from 'markdown-it'; // Non andrebbe passato come injection nel modulo?

export default function noteComponent() {
    return {
        template: noteTemplate,
        controller: noteController,
        controllerAs: 'n'
    }
}

class noteController {
    
    /* @ngInject */
    constructor($resource, $routeParams) {
        this.resource = $resource;
        this.noteId = $routeParams.noteId;
        this.init();
    }

    async init() {
        const note = this.resource(`http://localhost:3000/note/${this.noteId}`);
        note.get()
        .$promise.then((note) => { // capire perchè???????? this arrow function
            this.note = note;
            const md = new MarkdownIt({
                html: true,
                linkify: true,
                typographer: true
              });
            this.htmlNote = md.render(note.markdown);
          });
    }
};