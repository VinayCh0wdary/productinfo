sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/mindset/cs/productinfo/model/models",
	"./localService/mockserver"
], function (UIComponent, Device, models, mockServer) {
	"use strict";
	mockServer.init();
	return UIComponent.extend("com.mindset.cs.productinfo.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});