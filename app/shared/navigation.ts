import { Frame, NavigationEntry } from '@nativescript/core';
import { ROUTES } from './routes';

export function navigate(
  navTarget: string | NavigationEntry,
  otherFrame?: Frame
) {
  const navFrame = otherFrame
    ? otherFrame
    : Frame.getFrameById('content-frame');
  console.log(navFrame);
  if (typeof navTarget === 'object') {
    console.log('navigate ' + navTarget.moduleName);
    navFrame.navigate(navTarget);
  } else if (typeof navTarget === 'string') {
    console.log('navigate ' + navTarget);
    navFrame.navigate(navTarget);
  }
}

export function navigatePage2(frameId: string) {
  const frame = Frame.getFrameById(frameId);
  navigate(ROUTES.page2, frame);
}