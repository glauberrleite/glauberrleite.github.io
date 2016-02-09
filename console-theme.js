/**
 * 
 * @author: glauberrleite
 * 
 * Inspiration for this code was taken from:
 * 
 * https://www.developphp.com/video/JavaScript/Typing-Text-Animation-Tutorial-Array-Loop-Programming
 * http://stackoverflow.com/questions/8860188/is-there-a-way-to-clear-all-time-outs
 * 
 */

// Constants
const HOST = "glauberrleite";
const USER = "user";

// To avoid typing repetition the bash info
var bashInfo = function(path){
    return "[" + USER + "@" + HOST + " " + path + "]$ ";
}

// Getting elements
var terminal = document.getElementById("terminal");

var bottomTerminal = document.getElementById("bottom-terminal");

var topTerminal = document.getElementById("top-terminal");

var navItem = document.querySelectorAll("nav > ul > li > a");

// Setting initial values
var path = "~";

topTerminal.innerHTML = bashInfo(path) + "ls";

terminal.innerHTML = bashInfo(path) + "<span class='blinking_cursor'>_</span>";

// Functions to clean and hide things
var clearAllTimeouts = function(){
    var id = window.setTimeout(function() {}, 0);

    while (id--) {
        window.clearTimeout(id); // will do nothing if no timeout with id is present
    }
}

var cleanTerminal = function(){    
    
        bottomTerminal.innerHTML = "";
        
        clearAllTimeouts();
}

var hideAllSections = function(){
    var i;
    
    for (i = 0; i < navItem.length; i++){
        var id = navItem[i].href.split("#")[1];
        var content = document.getElementById(id);
        
        content.style.display = "none";
    }
}

// Show section when clicked
var i;

for(i = 0; i < navItem.length; i++){
    
    navItem[i].onclick = function(){
        
        cleanTerminal();
    
        var animatedText;
        var textArray;
        var loopTimer;
    
        var itemName = this.innerHTML;
        
        var id = this.href.split("#")[1];

        var content = document.getElementById(id);

        terminal.innerHTML = bashInfo(path);                
        animatedText = "cd ~/" + itemName;
        textArray = animatedText.split("");
                            
        var terminalWriter = function(nextFunction) {

            if(textArray.length > 0) {
            
                terminal.innerHTML += textArray.shift();
            
            } else {
                
                clearTimeout(loopTimer);
                                        
                nextFunction();
                
                return false;
            } 
            
                
            loopTimer = setTimeout(function(){ terminalWriter(nextFunction); }, 30);

        }
        
        var continueCode = function() {
            // Change path
            path = "~/" + itemName;
            
            terminal.innerHTML += "<br>" + bashInfo(path);
            
            animatedText = "./"+ id +".sh";
            textArray = animatedText.split("");
            
            

            var continueCode2 = function(){
                hideAllSections();
                
                content.style.display = "initial";

                bottomTerminal.innerHTML = bashInfo(path) + "<span class='blinking_cursor'>_</span>";
            }
            
            terminalWriter(continueCode2);
        }
        
        // starts animation and go to the next portion of the code
        terminalWriter(continueCode);
        
    }
}