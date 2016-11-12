import { Title } from '@angular/platform-browser'

// Wrapper around the built in Tittle service
export function setTitle(title: string) {
  let titleService = new Title();
  return titleService.setTitle(`Kudiobox | ${title}`);
}
