define(function() {

    var config = {
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