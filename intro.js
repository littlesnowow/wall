window.onload=function() {
var content=document.getElementById("content");
var items=content.getElementsByTagName("li");
var intros=content.getElementsByTagName("div");
var id;
for (var i = 0; i < items.length; i++) {
		items[i].id=i;
		items[i].onmouseover=function() {
			intros[this.id].style.display="block";
			
		}
		items[i].onmouseout=function() {
			intros[this.id].style.display="none";
		}
	}	
}
