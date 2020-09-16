export default function headerComponent() {
    return {
        template: require('./header.component.html'),
        controller: headerController,
        controllerAs: 'h'
    }
}

class headerController {

    constructor() {

    }
};