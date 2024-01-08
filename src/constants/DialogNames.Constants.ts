import PopUpExampleDialogComponent from "../components/dialogs/PopUpExampleDialog.Component";
import ExitConfirmationDialogComponent from "../components/dialogs/ExitConfirmationDialog.Component";

type DialogName = {
  exitConfirmationDialog: { name: string; component: React.ComponentType<any> };
  PopUpExampleDialog: { name: string; component: React.ComponentType<any> };
};

const dialogs: DialogName = {
  exitConfirmationDialog: {
    name: "exitConfirmationDialog",
    component: ExitConfirmationDialogComponent,
  },
  PopUpExampleDialog: {
    name: "PopUpExampleDialog",
    component: PopUpExampleDialogComponent,
  },
};

type DialogNamesType = {
  [key in keyof DialogName]: { name: string; component: React.ComponentType<any> };
};
const dialogNames: DialogNamesType = dialogs;

export { dialogNames };