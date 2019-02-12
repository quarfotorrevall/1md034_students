/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
function readData() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var payment = document.getElementById('payment').value;
    if (document.getElementById('male').checked) {
	var gender = document.getElementById('male').value;
    }
    else if (document.getElementById('female').checked) {
	var gender = document.getElementById('female').value;
    }
    else if (document.getElementById('confused').checked) {
	var gender = document.getElementById('confused').value;
    }
    else {
	var gender = document.getElementById('undisclosed').value;
    }

    return [name, email, payment, gender];
}

function readBurgers() {
    var index = 0;
    var list = [];
    for (var burger in menuItems)
    {
	if(document.getElementById(menuItems[burger].name).checked) {
	    list[index] = menuItems[burger].name;
	    index = index + 1;
	}
    }

    if(index == 0) {
	list[index] = "You didn't order anything!";
    }
    return list;
}

'use strict';
var socket = io();

var vm = new Vue({
    el: '#all',
    data: {
	ID: 1,
	orders: {}
    },
    methods: {
	addOrder: function (event) {
	    var hamburgers = readBurgers();
	    var list = new readData();
	    socket.emit("addOrder",
			{ orderId: this.ID,
                          details: this.orders[0].details,
                          orderItems: readBurgers(),
			  personalInfo: list
			});
	    this.ID = this.ID + 1;

	    var string = "Thank you for your order! <br/>" +
		"Name: " + list[0] + "<br/> Email: " + list[1] +
		"<br/> Payment: " + list[2] + "<br/>Gender: " +
		list[3] + "<br/><br/> Your order: ";

	    for (var item in hamburgers) {
		if(item != 0) {
		    string = string + ", ";
		}
		string = string + hamburgers[item];
	    }

	    document.getElementById('order').innerHTML = string;
	    
	},
	displayOrder: function() {
	    var offset = {x: event.currentTarget.getBoundingClientRect().left,
			  y: event.currentTarget.getBoundingClientRect().top};
	    
	    Vue.set(this.orders, 0, { details:
				     { x: event.clientX - 10 - offset.x,
				       y: event.clientY - 10 - offset.y }});
	}  
    }
});
