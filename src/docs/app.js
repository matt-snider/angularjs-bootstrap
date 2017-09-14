import angular from 'angular';


let app = {
    template: `
        <div>
            <h1> Documentation </h1>

            <p> This is the documentation app </h1>
        </div>
    `,
};


export default
    angular.module('bootstrap.docs', [])
        .component('app', app)
        .name;
