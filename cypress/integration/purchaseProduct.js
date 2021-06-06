describe('Search a product', () => {
    beforeEach(()=>{
        cy.visit('/');
   }) 

   afterEach(() => {
        cy.fixture('header').then((header)=>{
          cy.get(header.signOutButton).click();
          cy.get(header.signInButton).should('be.visible');
        })
  })

    ;['hat','dress','SHOES'].forEach((product) => {
      
        it('purchase the product: ' + product,()=>{
          
            cy.searchProduct(product);
            
    
            cy.fixture('searchResult').then((searchResult)=>{
                cy.get(searchResult.addFirstItem).click();
            })
    
            cy.fixture('goCheckout').then((goCheckout)=>{
                cy.get(goCheckout.productAddedOkMsg).should('contain', "Product successfully added");
                cy.get(goCheckout.goToChart).click();
            })
    
            cy.fixture('shopCart').then((shopCart)=>{
                cy.get(shopCart.cartTitle).should('contain',"Shopping-cart summary");
                cy.get(shopCart.checkoutButton).click();
            })
    
            cy.login()
    
           cy.fixture('address').then((address)=>{
                cy.get(address.myAddressDelivery).should('contain',"Clau");
                cy.log("Existe la dirección:");
                cy.get(address.checkoutButton).click();
            }) 
            
           cy.fixture('shipping').then((shipping)=>{
               cy.get(shipping.shippingMessage).should('contain', 'Shipping');
               cy.get(shipping.serviceAgreementCheck).check();
               cy.get(shipping.checkoutButton).click();
           })
    
           cy.fixture('payment').then((payment)=>{
                cy.get(payment.payMethod1).click();
           })
    
           cy.fixture('confirmOrder').then((order)=>{
                cy.get(order.confirmOrderButton).click();
                cy.get(order.okProcessMsg).should('contain',"is complete");
                cy.log("Purchase a Product test is finished");
           })
       
           
        })
    })
    
})
