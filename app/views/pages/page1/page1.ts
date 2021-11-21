import { navigatePage2 } from "~/shared/navigation";

export function onNavigatingTo() {

}

export function navRootFrame() {
  navigatePage2('root-frame');
}

export function navContentFrame() {
  navigatePage2('content-frame');
}