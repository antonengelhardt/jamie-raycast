import { Toast, closeMainWindow, open, showToast } from "@raycast/api";

export default async function Command() {
  const url = "jamie://stop-meeting";
  await closeMainWindow();
  try {
    open(url);
    showToast({
      style: Toast.Style.Success,
      title: "Started new meeting",
    });
  } catch (error) {
    showToast({
      style: Toast.Style.Failure,
      title: "Failed to start meeting",
    });
  }
}
