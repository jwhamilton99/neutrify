var bannedTags = ["SCRIPT","P","SPAN"];

function neutrify(e) {
	var element = e;

	if(element == undefined) {
		element = document.getElementsByTagName('body')[0];
	}

	var c = element.children;
	
	if(!bannedTags.includes(element.tagName)) {
		if(c.length != 0) {
			for(var i = 0; i < c.length; i++) {
				neutrify(c[i]);
			}
			return;
		}
	}
	
    element.textContent = element.textContent.replace(/he(\s{0,1}(\w+|\S)\s{0,1})she(\s?)is/gi, "they are");
	element.textContent = element.textContent.replace(/his(\s{0,1}(\w+|\S)\s{0,1})her/gi, "their");
	element.textContent = element.textContent.replace(/he(\s{0,1}(\w+|\S)\s{0,1})she/gi, "they");
	element.textContent = element.textContent.replace(/him(\s{0,1}(\w+|\S)\s{0,1})her/gi, "they");
	element.textContent = element.textContent.replace(/himself(\s{0,1}(\w+|\S)\s{0,1})herself/gi, "themselves");
	return;
}

document.onload = neutrify();