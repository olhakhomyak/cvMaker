(function () {
    'use strict';

    angular.module('cvMakerApp')
        .factory('cvMaker', cvMaker);

    function cvMaker($resource, constants) {

        var $ctrl = this,
        API_URL = constants.API_URL;

        return {
            userData: userData,
            userAuth: {
                id: 5
            },
            currentItem: {
                type: null,
                school: {
                    id: null
                },
                job: {
                    id: null
                }
            }
        };

        function userData(params) {
            return $resource('', {}, {
                get: {
                    method: "GET",
                    params: {id: this.userAuth.id},
                    url: API_URL + "main/:id"
                },
                saveSchool: {
                    method: "POST",
                    params: {params: params, user_id: this.userAuth.id},
                    url: API_URL + "school/save"
                },
                removeSchool: {
                    method: 'DELETE',
                    params: {id: this.currentItem.school.id},
                    url: API_URL + "school/destroy/:id"
                },
                saveJob: {
                    method: "POST",
                    params: {params: params, user_id: this.userAuth.id},
                    url: API_URL + "job/save"
                },
                removeJob: {
                    method: 'DELETE',
                    params: {id: this.currentItem.job.id},
                    url: API_URL + "job/destroy/:id"
                },
                savePersonalData: {
                    method: 'POST',
                    params: {params: params, user_id: this.userAuth.id},
                    url: API_URL + "main/resume/save"
                },
                removeResume: {
                    method: 'DELETE',
                    params: {user_id: this.userAuth.id, dataType: 'resume'},
                    url: API_URL + "main/destroy"
                }
            });
        }
    }

})();