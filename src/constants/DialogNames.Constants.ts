import DialogConfirmationUtil from "../components/utils/DialogConfirmation.Util"
import UserInfoEditModalComponent from "../components/modals/user/UserInfoEdit.Modal.Component";

type DialogName = {
  exitConfirmationDialog: { name: string; component: React.ComponentType<any> };
  anotherDialog: { name: string; component: React.ComponentType<any> };
};

const dialogs: DialogName = {
  exitConfirmationDialog: {
    name: "exitConfirmationDialog",
    component: DialogConfirmationUtil,
  },
  anotherDialog: {
    name: "anotherDialog",
    component: UserInfoEditModalComponent,
  },
};

type DialogNamesType = {
  [key in keyof DialogName]: { name: string; component: React.ComponentType<any> };
};
const dialogNames: DialogNamesType = dialogs;

export { dialogNames };