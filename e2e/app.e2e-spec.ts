import { BasebalWorldPage } from './app.po';

describe('basebal-world App', function() {
  let page: BasebalWorldPage;

  beforeEach(() => {
    page = new BasebalWorldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
