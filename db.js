// Check browser support

if (typeof(Storage) != "undefined")
  {
  // Store
		if(   localStorage.getItem("initialload")!="1"){
			  localStorage.setItem("initialload", "1");
			  localStorage.setItem("tshirtcolour", "#f9f9f9");
			  localStorage.setItem("text", "_ _ _ _ _ _");
			  localStorage.setItem("fontcolour", "grey");
			  localStorage.setItem("tshirt_qty", "1");
			  localStorage.setItem("fontsize", "18px Arial");  
			  localStorage.setItem("tshirtsize", "small");  
			  localStorage.setItem("textposX", "60");  
			  localStorage.setItem("textposY", "120");  
			  localStorage.setItem("basketcount", "0");
			  localStorage.setItem("order1status", document.getElementById('selorderstatus').value);
			  localStorage.setItem("order2status", document.getElementById('selorderstatus').value);
			  localStorage.setItem("order3status", document.getElementById('selorderstatus').value);
			  localStorage.setItem("order4status", document.getElementById('selorderstatus').value);
			  localStorage.setItem("order5status", document.getElementById('selorderstatus').value);
			  localStorage.setItem("order6status", document.getElementById('selorderstatus').value);
		}
			localStorage.setItem("initialload", "1");
  }
else
  {
  document.getElementById("tshirt_container").innerHTML="Sorry, your browser does not support the technology required for this part of our website...";
  }
  