ContactManager.module("ContactsApp.Show", function(Show, ContactManager, Backbone,
Marionette, $, _) {
	Show.Contact = Marionette.ItemView.extend({
		template: "#contact-view",

		events: {
			"click a.js-list-contacts": "listContactsClicked"
		},

		listContactsClicked: function(event) {
			event.preventDefault();
			ContactManager.trigger("contacts:list");
		}
	});
});