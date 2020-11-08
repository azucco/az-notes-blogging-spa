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
  constructor(ResourcesService, $routeParams) {
    this.ResourcesService = ResourcesService;
    this.noteId = $routeParams.noteId;
    this.init();
  }

  async init() {
    this.ResourcesService.getNote.fetch({
      id: this.noteId
    }).$promise.then(note => {
      this.note = note;
      const md = new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true
      });
      this.htmlNote = md.render(note.markdown);
    })
  }
};
