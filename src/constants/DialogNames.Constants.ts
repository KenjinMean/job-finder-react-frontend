type dialogName = {
  exitConfirmationDialog: string;
};

const dialogs: dialogName = {
  exitConfirmationDialog: "exitConfirmationDialog",
};

export const dialogNames: Record<keyof dialogName, string> = Object.fromEntries(
  Object.entries(dialogs).map(([key, value]) => [
    key as keyof dialogName,
    value,
  ])
) as Record<keyof dialogName, string>;
