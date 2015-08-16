ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone,
	Marionette, $, _){
		List.Contact = Marionette.ItemView.extend({
	      tagName: "tr",

	      template: "#contact-list-item",

	      events: {
	        "click": "highlight",
	        "click button.js-delete": "deleteClicked",
	        "click td a.js-show": "showClicked"
	      },

	      highlight: function(event){
	      	event.preventDefault();
	        this.$el.toggleClass("warning");
	      },

	      deleteClicked: function(event) {
	      	event.stopPropagation();
	      	this.trigger("contact:delete", this.model);
	      },

	      showClicked: function(event) {
	      	event.preventDefault();
	      	event.stopPropagation();
	      	this.trigger("contact:show", this.model);
	      },

	      remove: function(){
	      	var self = this;
	      	this.$el.fadeOut(function(){
	      		Marionette.ItemView.prototype.remove.call(self);
	      	});
	      }
	    });

	    List.Contacts = Marionette.CompositeView.extend({
	      tagName: "table",
	      className: "table table-hover",
	      template: "#contact-list",
	      childView: List.Contact,
	      childViewContainer: "tbody",

	      onChildviewContactDelete: function() {
	      	this.$el.fadeOut(1000, function() {
	      		$(this).fadeIn(1000);
	      	});
	      }
	    });
});