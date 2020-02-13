describe("QA Assessment Test ", function () {

	beforeEach(function () {
		cy.visit('https://www.amazon.in/', {
			onBeforeLoad(win) {
				cy.stub(win, 'open').as('windowOpen')
			}
		})
	})


	it("Search and Buy Laptop From amazon", function () {

		cy.get('#searchDropdownBox').select("All Categories", { force: true });
		cy.get('#twotabsearchtextbox').type("Laptop i7 processor, 8/16 GB RAM ");
		cy.get('.nav-search-submit > .nav-input').click();
		cy.visit('https://www.amazon.in/gp/slredirect/picassoRedirect.html/ref=pa_sp_mtf_aps_sr_pg1_1?ie=UTF8&adId=A079189026U6M04NWR9FI&url=%2FHP-Pavilion-15-6-inch-Windows-Graphics%2Fdp%2FB07F64D9XJ%2Fref%3Dsr_1_1_sspa%3Fkeywords%3D%2522Laptop%2Bi7%2Bprocessor%252C%2B8%252F16%2BGB%2BRAM%26qid%3D1562849061%26s%3Dgateway%26smid%3DA14CZOWI0VEHLG%26sr%3D8-1-spons%26psc%3D1&qualifier=1562849061&id=6042596282297865&widgetName=sp_mtf')
		cy.get('#buy-now-button').click();
		cy.get('#ap_email').type(9372255885);
		cy.get('.a-button-inner > #continue').click();
		cy.get('#ap_password').type('test@123!');
		cy.get('#signInSubmit').click();
		cy.get('.ship-to-this-address > .a-button-inner > [data-testid]').click();
		cy.clearLocalStorage();

	})

// });

})
