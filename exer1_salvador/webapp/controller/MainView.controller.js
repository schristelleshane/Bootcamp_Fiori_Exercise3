sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("com.training.exer1salvador.controller.MainView", {

        //Declare oTextBundle Globally
        oTextBundle: null,

        onInit() {
            this.oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
        },

        fnDisplayMsg: function (sMsg){
            MessageToast.show(sMsg);
        },

        onAddItem: function (){
            var sMsg = this.oTextBundle.getText("addButtonMsg");
            this.fnDisplayMsg(sMsg);
        },

        onChangeMOP: function (oEvent) {
            var sSelectedKey = oEvent.getParameter("selectedItem").getProperty("key");
            var oMobileLabel = this.getView().byId("idLblPhone");
            var oMobileInput = this.getView().byId("idInputPhone");
            var oCreditLabel = this.getView().byId("idLblCreditDets");
            var oCreditInput = this.getView().byId("idInputCreditDets");

            if (sSelectedKey === "GCASH"){
                // show the mobile field
                oMobileLabel.setVisible(true);
                oMobileInput.setVisible(true);
                var sMsg = this.oTextBundle.getText("mopGcashMsg");
                this.fnDisplayMsg(sMsg);
            } else {
                oMobileLabel.setVisible(false);
                oMobileInput.setVisible(false);
            }

            if (sSelectedKey === "CC"){
                // show the CC details field
                oCreditLabel.setVisible(true);
                oCreditInput.setVisible(true);
                var sMsg = this.oTextBundle.getText("mopCreditMsg");
                this.fnDisplayMsg(sMsg);
            } else {
                oCreditLabel.setVisible(false);
                oCreditInput.setVisible(false);
            }

            if (sSelectedKey === "COD"){
                var sMsg = this.oTextBundle.getText("mopCodMsg");
                this.fnDisplayMsg(sMsg);
            }
        },

        onPressCheckout: function (){
            var oInputFNameValue = this.getView().byId("idInptFName").getValue();
            var oInputLNameValue = this.getView().byId("idInptLName").getValue();

            // Check if first name is blank
            if (oInputFNameValue === "" || oInputLNameValue === ""){
                var sMsg = this.oTextBundle.getText("reqFieldMsg");
                this.fnDisplayMsg(sMsg);                          
            }
        }
    });
});