var list = document.getElementById('list'),
    add = document.getElementById('addElem');
    
add.addEventListener('click', function() {
    var element = document.createElement('li');
    
    var iloscElemLi = document.getElementsByTagName('li').length;
	element.innerHTML = 'item ' + iloscElemLi;
	
    list.appendChild(element);
});


