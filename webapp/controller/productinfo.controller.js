sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.mindset.cs.productinfo.controller.productinfo", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.mindset.cs.productinfo.view.productinfo
		 */
		onInit: function () {

		},
		onBatch:function(){
		var Router = 	this.getOwnerComponent().getRouter();
		  Router.navTo("tar_batch");
			
		},
		onPress: function (oEvent) {

			// add filter for search
			var aFilters = [];
			//var sQuery = oEvent.getSource().getValue();
			var sQuery = this.getView().byId("input0").getValue();
			var sQuery1 = this.getView().byId("box01").getValue();
			var sQuery2 = this.getView().byId("input25").getValue();
			var sQuery3 = this.getView().byId("input24").getValue();

			// if (sQuery && sQuery.length > 0) {
			// 	var filter = new sap.ui.model.Filter("CFN", sap.ui.model.FilterOperator.Contains, sQuery);
			// 	aFilters.push(filter);
			//         }

			if (sQuery && sQuery.length > 0) {
				if (sQuery1 && sQuery1.length > 0) {
				var filter1 = new sap.ui.model.Filter("Division", sap.ui.model.FilterOperator.Contains, sQuery1);
				aFilters.push(filter1);
			}
				var filter = new sap.ui.model.Filter("CFN", sap.ui.model.FilterOperator.Contains, sQuery);
				aFilters.push(filter);
			}
			
			if (sQuery2 && sQuery2.length > 0) {
				var filter2 = new sap.ui.model.Filter("Plant", sap.ui.model.FilterOperator.Contains, sQuery2);
				aFilters.push(filter2);
			}
			if (sQuery3 && sQuery3.length > 0) {
				var filter3 = new sap.ui.model.Filter("Batch", sap.ui.model.FilterOperator.Contains, sQuery3);
				aFilters.push(filter3);
			}

			var oList = this.byId("table0");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilters, "Application");

		}
		

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.mindset.cs.productinfo.view.productinfo
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.mindset.cs.productinfo.view.productinfo
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.mindset.cs.productinfo.view.productinfo
		 */
		//	onExit: function() {
		//
		//	}

	});

});