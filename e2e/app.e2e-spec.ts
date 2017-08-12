import { AngularPocPage } from './app.po';

describe('angular-poc App', () => {
  let page: AngularPocPage;

  beforeEach(() => {
    page = new AngularPocPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
