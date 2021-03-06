export default class appController {
    /* @ngInject */
    constructor(ResourcesService, $location) {
        this.title = "aznotes";
        this.ResourcesService = ResourcesService;
        this.location = $location;
    }

    $onInit() { // spunto per articolo
        this.init();
    }

    async init() {
        this.ResourcesService.getNotes.fetch({}).$promise.then(notes => {
            this.notes = notes;
            this.notes.forEach(note => note.visible = true);
        })
        this.ResourcesService.getTags.fetch({}).$promise.then(tags => {
            this.tags = tags.map(tag => {
                const tagObj = {
                    value: tag,
                    visible: true
                };
                return tagObj;
            })
        })
        this.selectedTags = [];
    }

    onSelectTag(tag){
        if(this.selectedTags.indexOf(tag) === -1){ // .some() ?
            this.selectedTags.push(tag);
        }else{
            this.selectedTags.splice(this.selectedTags.indexOf(tag), 1);
        }
        this.filterListByTags(this.selectedTags);
    }

    filterListByTags(selectedTags) {
        let i = 0;
        let visibleTags = [];

        this.notes.forEach(note => {
            note.visible = selectedTags.every(tag => note.tags.includes(tag)) ? true : false;
            if(note.visible === true){
                let currentTags = i === 0 ? note.tags : note.tags.filter(tag => !visibleTags.includes(tag));
                visibleTags = i === 0 ? currentTags : visibleTags.concat(currentTags);
                i++;
            }
        });

        // filter tags
        this.tags.forEach(tag => tag.visible = visibleTags.indexOf(tag.value) === -1 ? false : true);
    }

    onSearchType(string){
        this.notes.forEach(note => {
            const match = note.title.includes(string) || note.description.includes(string) || this.isMatch(note.tags, string);
            note.visible = match ? true : false;
        })
    }

    isMatch(tags, string){
        tags.forEach(tag => {
            console.log(tag);
            console.log(string);
            if(tag.includes(string)){
                console.log(true)
                return true;
            }
        })
        return false;
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