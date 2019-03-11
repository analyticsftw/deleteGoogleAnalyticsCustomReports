/*
Run this in console mode in your browser after switching to the custom reports list Iframe
*/

function deleteCustomReports(){
    var _reps = document.querySelectorAll(".ACTION-view");
    for (var i = 0; i < _reps.length; i++){
        var el = reps[0];
        var elc = el.attributes["class"].textContent;
        var chunks = elc.split(" ");
        chunks[1] = "ACTION-delete";
        elc = chunks.join(" ");
		_reps[i].className = elc;
    }
}
deleteCustomReports();
/*
Now click each click and save considerable time
*/
