/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('HelloBindingWorld.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',

        'HelloBindingWorld.view.main.MainController',
        'HelloBindingWorld.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    title: 'Hello, Binding World!',

    items: [
        {
            xtype: 'container',
            html: 'Hello, Binding World!'
        }
    ]
});
