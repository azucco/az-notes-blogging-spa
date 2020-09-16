export default class appController {
    /* @ngInject */
    constructor(ResourcesService) {
        this.title = "aznotes";
        this.ResourcesService = ResourcesService;
    }

    async $onInit() { // spunto per articolo
        this.fetchTag();
        this.fetchNotes();
    }

    async fetchTag() {
        this.tags = await this.ResourcesService.getTags.fetch({});
    }

    /**
     * @param {Array} selectedTags 
     */
    async fetchNotes(selectedTags) {
        if (selectedTags !== undefined && selectedTags.length > 0) {
            this.notes = await this.ResourcesService.getNotesByTags.fetch({
                'tag': selectedTags
            });
        } else {
            this.notes = await this.ResourcesService.getNotes.fetch({});
        }
    }

    /**
     * @param {Array} selectedTags 
     */
    buildQueryString(selectedTags) {
        let i = 0;
        const selectedTagsQueryString = selectedTags.map(tag => {
            const prefix = i === 0 ? '?' : '&';
            i++;
            return `${prefix}tag=${tag}`
        })
        return selectedTagsQueryString;
    }
}
/**
 * In particolare un controller non deve:

    1) Manipolare il DOM, questo compito è riservato alle direttive (nella prorpietà "link")
    2) Formattare l’input, per questo compito è opportuno utilizzare i form Angular
    3) Formattare l’output, questo è compito dei filtri
    4) Condividere dati con altri controller, per questo compito è opportuno creare dei servizi
    5) Implementare funzionalità generali, l’implementazione di funzionalità che non riguardano direttamente l’interazione tra dati e view deve essere fatta nei servizi

 */