$(function() {
	var phoneBtnShoving = document.querySelector('[data-btn="showing"]');
	var phoneListBottom = document.querySelector('[data-phone-list-bottom]');
	var phoneBtnBottom = document.querySelector('[data-btn="bottom-none"]');
	function hiddenBtn(e){
		console.log(e.target);
		// console.dir(document.querySelector('[data-phone-list]'));
		var phoneList = document.querySelector('[data-phone-list]');
		var phoneBtn = document.querySelector('[data-btn]');
		phoneList.dataset.show == false ? phoneList.dataset.show = true : phoneList.dataset.show  = false;
		phoneListBottom.dataset.showButton == false ? phoneListBottom.dataset.showButton = true : phoneListBottom.dataset.showButton  = false;
		// phoneBtn.dataset.btn == 'showing' ? phoneBtn.dataset.btn = 'hidden' : phoneBtn.dataset.btn = 'showing';
		// phoneBtn.dataset.btn = 'showing';
		// if(phoneList.dataset.show != true){
		// 	phoneList.dataset.show = true;
		// }
		// if(phoneList.dataset.show != false){
		// 	phoneList.dataset.show = false;
		// }
		// if(phoneBtnOne.dataset.btn == "hidden"){
		// 	phoneBtnOne.addEventListener('click', hiddenBtn);
		// 	phoneBtn.dataset.btn == 'showing';
		// }
		// e.stopPropagation();
		// if(document.querySelector('[data-btn]').dataset.btn == "showing"){
		// 	document.querySelector('[data-btn]').addEventListener('click', handler);
		// }
	}
	function handler(e){
		console.log(e.target);
		// console.dir(document.querySelector('[data-phone-list]'));
		var phoneList = document.querySelector('[data-phone-list]');
		var phoneBtn = document.querySelector('[data-btn]');
		console.dir(phoneBtn.dataset.btn);
		// phoneBtn.dataset.btn = "hidden";
		// phoneBtn.dataset.btn == 'showing' ? phoneBtn.dataset.btn = 'hidden' : phoneBtn.dataset.btn = 'showing';
		// if(phoneBtn.dataset.btn != "hidden"){
		// 	phoneBtn.dataset.btn = "hidden";
		// }
		console.dir(phoneBtn.dataset.btn);
		phoneList.dataset.show == true ? phoneList.dataset.show = false : phoneList.dataset.show  = true;
		// if(phoneList.dataset.show != true){
		// 	phoneList.dataset.show = true;
		// }else{
		// 	phoneList.dataset.show = false;
		// }
		// e.stopPropagation();
		// if(phoneList.dataset.show != false){
		// 	phoneList.dataset.show = false;
		// }
		// e.stopImmediatePropagation();
		// if(phoneBtnOne.dataset.btn == "hidden"){
		// 	phoneBtnOne.addEventListener('click', hiddenBtn);
		// }
		// if(document.querySelector('[data-btn]').dataset.btn == "hidden"){
		// 	document.querySelector('[data-btn]').addEventListener('click', hiddenBtn);
		// }
		e.stopImmediatePropagation();
	}
	function handlerBottom(e){
		console.log(e.target);
		var phoneListBottom = document.querySelector('[data-phone-list-bottom]');
		phoneListBottom.dataset.showButton == true ? phoneListBottom.dataset.showButton = false : phoneListBottom.dataset.showButton  = true;
		e.stopImmediatePropagation();
	}
	// console.log(document.querySelector('[data-btn="showing"]'));
	if(document.querySelector('[data-btn]').dataset.btn == "showing"){
		document.querySelector('[data-btn]').addEventListener('click', handler);
	}
	if(document.querySelector('[data-btn-button]').dataset.btnButton == "showing"){
		document.querySelector('[data-btn-button]').addEventListener('click', handlerBottom);
	}
	// phoneBtnShoving.addEventListener('click', handler);
	var phoneBtnHidden = document.getElementById('main-content');
	// console.dir(phoneBtnHidden);
	phoneBtnHidden.addEventListener('click', hiddenBtn);
	// if(document.querySelector('[data-btn]').dataset.btn == "hidden"){
	// 	document.querySelector('[data-btn]').addEventListener('click', hiddenBtn);
	// }

 
		$(window).scroll(function () {
			if ($(this).scrollTop() > 200) {
				$('.call').fadeIn();
			} else {
				$('.call').fadeOut();
			}
		});
});
