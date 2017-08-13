import { PaperStylePage } from './app.po';

describe('angular-documents App', () => {
  let page: PaperStylePage;

  beforeEach(() => {
    page = new PaperStylePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
