/*global define*/
define(function () {

    'use strict';

    return {
        paths: {
            FAOSTAT_UI_XYZ: 'start',
            faostat_ui_xyz: '../../'
        },
        shim: {
            bootstrap: {
                deps: ['jquery']
            }
        }
    };

});