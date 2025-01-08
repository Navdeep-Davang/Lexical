
declare global {
  interface HTMLElement {
    onbeforematch?: () => void;
  }
}

export function setDomHiddenUntilFound(dom: HTMLElement): void {
  dom.setAttribute('data-hidden-until-found', 'true');
  dom.hidden = true;
}

export function domOnBeforeMatch(dom: HTMLElement, callback: () => void): void {
  
  dom.onbeforematch = callback;
}
