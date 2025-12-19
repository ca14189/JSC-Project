import { toast, TypeOptions } from "react-toastify";

// declare proper types for params
const notify = (message: string, type: TypeOptions) => {
  toast(message, { type });
};

export default class Notifier {
  static success(message: string) {
    notify(message, "success");
  }
  static info(message: string) {
    notify(message, "info");
  }
  static warning(message: string) {   
    notify(message, "warning");
  }
  static error(message: string) {
    notify(message, "error");
  }
}
