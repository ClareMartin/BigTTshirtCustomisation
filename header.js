
document.write("<div id='menu'>");
document.write("<ul class='tablist'>");

var sPath = window.location.pathname;
var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
/* 

* due to the template nature of the site , detect page this page in included 
* and modify tab id accordingly to reflect current page in focus;
*/

		
		
if(sPage == "index.html"){
	document.write("   <li ><a href='contactus.html'><span>Contact Us</span></a></li>");
	document.write("   <li> <a href='customiser.html'><span>Customiser</span></a></li>");
	document.write("   <li id='current'><a href='index.html'><span>Home</span></a></li>");
}
if(sPage == "customiser.html"){
	document.write("   <li ><a href='contactus.html'><span>Contact Us</span></a></li>");
	document.write("   <li id='current'><a href='customiser.html'><span>Customiser</span></a></li>");
	document.write("   <li ><a href='index.html'><span>Home</span></a></li>");
}

if(sPage == "contactus.html"){
	document.write("   <li id='current'class='last'><a href='contactus.html'><span>Contact Us</span></a></li>");
	document.write("   <li ><a href='customiser.html'><span>Customiser</span></a></li>");
	document.write("   <li ><a href='index.html'><span>Home</span></a></li>");
}

document.write("</ul>");
document.write("    </div>");


