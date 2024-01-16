import React from "react";
import LinkEditUiComponent from "../UI/LinkEdit.Ui.Component";
import { useOpenDialog } from "../../hooks/useOverlayFunctions";
import { dialogNames } from "../../constants/DialogNames.Constants";

export default function UserExperienceComponent() {
  const openDialog = useOpenDialog();
  return (
    <section className="relative w-full p-5 overflow-hidden border sm:rounded-lg bg-background-gray200 border-border-100 text-content-black">
      <h2 className="text-2xl font-semibold">Experience</h2>

      <div className="absolute flex items-center gap-1 right-5 top-5">
        <LinkEditUiComponent
          onClick={() => openDialog(dialogNames.notImplementedDialog.name)}
        />
      </div>
    </section>
  );
}
