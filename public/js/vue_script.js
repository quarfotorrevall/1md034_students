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
    var string = '';
    if (document.getElementById('Americana').checked) {
	string = string + 'Americana ';
    }
    if (document.getElementById('Tall Order').checked) {
	string = string + 'Tall Order ';
    }
    if (document.getElementById('A Hamburger').checked) {
	string = string + 'A Hamburger ';
    }
    if (document.getElementById('This guy again').checked) {
	string = string + 'This guy again ';
    }
    if (document.getElementById('Really?').checked) {
	string = string + 'Really? ';
    }
    if (string == '') {
	string = "You didn't order anything! ";
    }
    return string;
}

var vm = new Vue({
  el: '#grid',
  data: {
      menu: menuItems
  }
});


/*var vm1 = new Vue({
    el: '#buttondiv',
    methods: {
	markDone: function() {
	    console.log('Button clicked!');
	    var list = new readData();
	    var burgers = readBurgers();
	    document.getElementById('order').innerHTML =
		'Your order: ' + burgers + 'Info: ' +
		list[0] + ', ' + list[1] + ', ' + list[2] +
		', ' + list[3];
	    
	}
    }
});*/
