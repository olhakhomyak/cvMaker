(function () {
    "use strict";

    angular
        .module("main.constants", [])
        .constant("constants", {

            'API_URL':              'http://localhost:8000/',

            'GENERAL': {
                'SAVE':             'Save',
                'EDIT':             'Edit',
                'CLOSE':            'Close',
                'NAME':             'Name',
                'NO_INFORMATION':   'No information',
                'CURRENT_INFORMATION': 'Current information'
            },

            'NAVIGATION': {
                'YOUR_PROFILE':     'Your profile',
                'MAIN':             'Main',
                'RESUME':           'Resume',
                'EDUCATION':        'Education',
                'EXPERIENCE':       'Experience',
                'ADD_A_NEW_SECTION':'Add a new section',
                'LOGOUT':           'Logout'
            },

            'MAIN_PAGE': {
                'PHONE':            'Phone',
                'EMAIL':            'Email'
            },

            'RESUME': {
                'RESUME':           'Resume'
            },

            'EDUCATION': {
                'EDUCATION':        'Education',
                'SCHOOL_NAME':      'School name',
                'COURSE':           'Course',
                'START_DATE':       'Start date',
                'END_DATE':         'End date'
            },

            'EXPERIENCE': {
                'JOB_TITLE':         'Job title',
                'COMPANY_NAME':      'Company name',
                'START_DATE':       'Start date',
                'END_DATE':         'End date'
            }
        })
})();