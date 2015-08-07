// thanks to TJ Crowder: http://stackoverflow.com/a/5904945
function walkAndReplace(node) {
	var child;
	var next;

	switch (node.nodeType) {
		case 1:  // Element
   		case 9:  // Document
    	case 11: // Document fragment
    		child = node.firstChild;
    		while (child) {
    			next = child.nextSibling;
    			walkAndReplace(child);
    			child = next;
    		}
    		break;
    	case 3: // Text node
      		replaceText(node);
      		break;
	}
}

function replaceText(textNode) {
	textNode.nodeValue = textNode.nodeValue.replace(/Monad/g, 'Gonad');
	textNode.nodeValue = textNode.nodeValue.replace(/monad/g, 'gonad');
	textNode.nodeValue = textNode.nodeValue.replace(/Applicative/g, 'Asslickative');
	textNode.nodeValue = textNode.nodeValue.replace(/applicative/g, 'asslickative');
	textNode.nodeValue = textNode.nodeValue.replace(/Functor/g, 'Fucktor');
	textNode.nodeValue = textNode.nodeValue.replace(/functor/g, 'fucktor');
}

walkAndReplace(document.body);