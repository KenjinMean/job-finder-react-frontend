import PopUpExampleDialogComponent from "../components/dialogs/NotImplementedDialog.Component";
import NotImplementedDialogComponent from "../components/dialogs/NotImplementedDialog.Component";
import ExitConfirmationDialogComponent from "../components/dialogs/ExitConfirmationDialog.Component";

type DialogName = {
  exitConfirmationDialog: { name: string; component: React.ComponentType<any> };
  popUpExampleDialog: { name: string; component: React.ComponentType<any> };
  notImplementedDialog: { name: string; component: React.ComponentType<any> };
};

const dialogs: DialogName = {
  exitConfirmationDialog: {
    name: "exitConfirmationDialog",
    component: ExitConfirmationDialogComponent,
  },
  popUpExampleDialog: {
    name: "popUpExampleDialog",
    component: PopUpExampleDialogComponent,
  },
  notImplementedDialog : {
    name: "notImplementedDialog", 
    component: NotImplementedDialogComponent,
  }
};

type DialogNamesType = {
  [key in keyof DialogName]: { name: string; component: React.ComponentType<any> };
};
const dialogNames: DialogNamesType = dialogs;

export { dialogNames };