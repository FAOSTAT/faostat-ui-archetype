/* global define */
define(function() {

    'use strict';

    var config;
    config = {
        paths: {
            FAOSTAT_UI_XYZ: 'faostat-ui-xyz',
            faostat_ui_xyz: '../'
        },
        shim: {
            bootstrap: {
                deps: ['jquery']
            }
        }
    };

    return config;

});