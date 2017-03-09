import { Ng2VoxxedPage } from './app.po';

describe('ng2-voxxed App', () => {
  let page: Ng2VoxxedPage;

  beforeEach(() => {
    page = new Ng2VoxxedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
