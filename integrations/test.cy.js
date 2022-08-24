describe("test", () => {
	it("tests test", () => {
		cy.viewport(1519, 559);

		cy.visit("https://www.voordeeluitjes.nl/");

		cy.get("[data-testid=menu-component-menu-item-topbestemmingen] > span").click();

		cy.get("#main_menu_link_Landen").click();
		cy.location("href").should("eq", "https://www.voordeeluitjes.nl/hotels/frankrijk");

		cy.get("#__next > main > div.jsx-2916723545.search-content.container > div > div.jsx-2916723545.results-wrapper > div.jsx-383321063.results-list > div:nth-child(1) > a > div.jsx-3341654247.location-details > div.jsx-3711137606.geo-profile").click();

		cy.get("#package-item-7546 > div > div.jsx-169541153.package-details-container > div.jsx-169541153.package-annotations > div.jsx-169541153.annotations-btn-container > div.jsx-169541153.btn-wrapper > button > div.jsx-3752353761.btn-label").click();

	});
});
