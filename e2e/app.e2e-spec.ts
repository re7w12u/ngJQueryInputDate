import { NgInputDateIEPage } from './app.po';

describe('ng-input-date-ie App', function() {
  let page: NgInputDateIEPage;

  beforeEach(() => {
    page = new NgInputDateIEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
