/*
Run this in console mode in your browser after switching to the custom reports list Iframe
*/

function deleteCustomReports(){
    var _reps = document.querySelectorAll(".ACTION-view");
    for (var i = 0; i < _reps.length; i++){
        var el = _reps[i];
        var elc = el.attributes["class"].textContent;
        var chunks = elc.split(" ");
        chunks[1] = "ACTION-delete";
        elc = chunks.join(" ");
	_reps[i].className = elc;
    }
}
deleteCustomReports();
/*
Now click each link and save considerable time
*/
