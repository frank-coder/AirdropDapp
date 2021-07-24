function getreflink() {
    var refaddr = document.getElementById("myInput").value;
    var reflink = document.getElementById("copylink");
    reflink.href = '/airdrop/?ref=' + refaddr;
    reflink.innerHTML = 'www.chinshiba.com/airdrop/?ref=' + refaddr;
    document.getElementById('refs').style.display = 'block';
}

function copyToClipboard(id) {
    var text = document.getElementById(id).href; //getting the text from that particular Row
    //window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text);

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy"); // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}

window.onload = function() {
	function querySt(ji) {
		hu = window.location.search.substring(1);
		gy = hu.split("&");
		for(i = 0; i < gy.length; i++) {
			ft = gy[i].split("=");
			if(ft[0] == ji) {
				return ft[1];
			}
		}
	}
	var ref = querySt("ref");
	if(ref == null) {} else {
		document.getElementById('myInput').value = ref;
		//document.getElementById('referralInfo').innerHTML  = ref;
	}
}

/*
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("airdropbtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

*/