export default class ResourcesService {

  /* @ngInject */
  constructor($resource) {
    this.resource = $resource;
    this.init();
  }

  init() {

    const API_URL = ' https://aznote.herokuapp.com';

    this.getNotes = this.resource(`${API_URL}/notes/:tags`, {}, {
      fetch: {
        isArray: true
      }
    });

    this.getNote = this.resource(`${API_URL}/note/:id`, {
      id: '@id'
    }, {
      fetch: {
        method: 'GET',
      }
    });

    this.saveNote = this.resource(`${API_URL}/note/`, {
      title: "@title",
      description: "@description",
      markdown: "@markdown"
    }, {
      fetch: {
        method: 'POST',
      }
    });

    this.updateNote = this.resource(`${API_URL}/note/:id`, {
      id: "@id",
      title: "@title",
      description: "@description",
      markdown: "@markdown"
    }, {
      fetch: {
        method: 'PUT',
      }
    });

    this.publishNote = this.resource(`${API_URL}/note/publish/:id`, {
      id: "@id",
      published: "@published"
    }, {
      fetch: {
        method: 'PUT',
      }
    });

    this.deleteNote = this.resource(`${API_URL}/note/:id`, {
      id: "@id"
    }, {
      fetch: {
        method: 'DELETE',
      }
    });

    this.getTags = this.resource(`${API_URL}/tags`, {}, {
      fetch: {
        isArray: true
      }
    });

  }
}
