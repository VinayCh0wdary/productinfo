sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.mindset.cs.productinfo.controller.batch", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.mindset.cs.productinfo.view.batch
		 */
		onInit: function () {

		},
		onOrder: function () {
			var Router = this.getOwnerComponent().getRouter();
			Router.navTo("tar_order");

		},
		onPress: function (oEvent) {

			// add filter for search
			var aFilters = [];
			//var sQuery = oEvent.getSource().getValue();
			var sQuery = String(this.getView().byId("input20").getValue());
			this.getView().byId("text20").setValue(sQuery);

			if (sQuery && sQuery.length > 0) {
				var filter = new sap.ui.model.Filter("Batch", sap.ui.model.FilterOperator.Contains, sQuery);
				aFilters.push(filter);
			}
			var oList = this.byId("table0");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilters, "Application");

		

		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.mindset.cs.productinfo.view.batch
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.mindset.cs.productinfo.view.batch
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.mindset.cs.productinfo.view.batch
		 */
		//	onExit: function() {
		//
		//	}

	});

});