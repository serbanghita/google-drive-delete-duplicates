(function() {
	const gridNodes = document.querySelectorAll(`.l-t-T-V`);
	Array.prototype.map.call(gridNodes, (node) => {
	const fileName = node.getAttribute('aria-label');
	return fileName;
	}).filter((fileName, pos, self) => {
	  return self.indexOf(fileName) !== pos;
	}).forEach((fileName) => {
	  const elem = document.querySelector(`[aria-label="${fileName}"]`);
	  var event1 = new MouseEvent('mousedown', {
	    bubbles: true,
	    cancelable: false,
		metaKey: true
	  });
	  var event2 = new MouseEvent('mouseup', {
	    bubbles: true,
	    cancelable: false,
		metaKey: true
	  });
	  elem.dispatchEvent(event1);
		elem.dispatchEvent(event2);
	});
})();
