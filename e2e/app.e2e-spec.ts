import { TurnosAppClientPage } from './app.po';

describe('turnos-app-client App', function() {
  let page: TurnosAppClientPage;

  beforeEach(() => {
    page = new TurnosAppClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
