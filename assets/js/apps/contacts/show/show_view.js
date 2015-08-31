ContactManager.module("ContactsApp.Show", function(Show, ContactManager, Backbone,
Marionette, $, _) {
	Show.MissingContact = Marionette.ItemView.extend({
		template: "#missing-contact-view"
	});

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