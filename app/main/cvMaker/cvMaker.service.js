(function () {
    'use strict';

    angular.module('main.cvMaker')
        .constant('API_URL', 'http://localhost:8000/')
        .factory('cvMaker', cvMaker);

    function cvMaker($resource, API_URL) {

        return {
            userData: userData,
            userAuth: {
                id: 2
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
                    params: {params: params},
                    url: API_URL + "school/update"
                },
                removeSchool: {
                    method: 'DELETE',
                    params: {id: this.currentItem.school.id},
                    url: API_URL + "school/destroy/:id"
                },
                saveJob: {
                    method: "POST",
                    params: {params: params},
                    url: API_URL + "job/update"
                },
                removeJob: {
                    method: 'DELETE',
                    params: {id: this.currentItem.job.id},
                    url: API_URL + "job/destroy/:id"
                },
                savePersonalData: {
                    method: 'PUT',
                    params: {id: this.userAuth.id, params: params},
                    url: API_URL + "main/:id"
                }
            });
        }
    }

})();