document.addEventListener("DOMContentLoaded", function () {
	const interval = 70;
	document.getElementById("seconds").value = interval;
	document.getElementById("startScroll").addEventListener("click", startScroll);
	document.getElementById("stopScroll").addEventListener("click", stopScroll);
});

function startScroll(e) {
	var interval = document.getElementById("seconds").value;

	chrome.tabs.executeScript(null, {
		code: "clearTimeout(scrolldelay)",
	});
	chrome.tabs.executeScript(null, {
		code:
			"var t;" +
			"document.getElementById('showroom').style.display = 'none';" +
			"function pageScroll() {window.scrollBy(0,1);scrolldelay = setTimeout(pageScroll," +
			interval +
			");}pageScroll();",
	});
	//window.close();
	document.getElementById("seconds").value = interval;
}
function stopScroll(e) {
	chrome.tabs.executeScript(null, {
		code: "clearTimeout(scrolldelay)",
	});
}

function stop() {
	chrome.browserAction.setIcon({ path: "icon.png" });
	chrome.tabs.executeScript(null, {
		code: "clearTimeout(t);console.log('Stopped');",
	});
}
