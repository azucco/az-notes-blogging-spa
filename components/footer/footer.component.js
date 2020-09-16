export default function footerComponent() {
    return {
        template: require('./footer.component.html'),
        controller: footerController,
        controllerAs: 'f'
    }
}

class footerController {

    constructor() {

    }
};