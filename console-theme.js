var terminal = document.getElementById("terminal");

var output = document.getElementById("output");

var bottomTerminal = document.getElementById("bottom-terminal");

var navItem = document.querySelectorAll("nav > ul > li > a");

var path = "~";

var i;

for(i = 0; i < navItem.length; i++){

	navItem[i].onclick = function(){
		var id = this.href.split("#")[1];
		
		var content = document.getElementById(id);

		terminal.innerHTML = "<br>[user@glauberrleite " + path + "] clear && cd ~/" + this.innerHTML;
		path = "~/" + this.innerHTML;
		terminal.innerHTML += "<br>[user@glauberrleite " + path + "] ls";

		output.innerHTML = content.innerHTML;
//		output.style.display = "initial";

		bottomTerminal.innerHTML = "[user@glauberrleite " + path + "]<span class='blinking-cursor'>_</span>";
	};
}

