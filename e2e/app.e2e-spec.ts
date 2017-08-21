import { CustomerAPIWorkshopPage } from './app.po';

describe('customer-apiworkshop App', () => {
  let page: CustomerAPIWorkshopPage;

  beforeEach(() => {
    page = new CustomerAPIWorkshopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
