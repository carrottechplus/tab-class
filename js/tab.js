// es5

var tab = document.querySelector('#tab');
var btns = tab.querySelectorAll('ul li');
var boxs = tab.querySelectorAll('article div');

btns.forEach(function (btn, idx) {
	btn.addEventListener('click', function () {
		// 버튼 활성화
		btns.forEach(function (btn) {
			btn.classList.remove('on');
		});
		btns[idx].classList.add('on');

		// 박스 활성화
		boxs.forEach(function (box) {
			box.classList.remove('on');
		});
		boxs[idx].classList.add('on');
	});
});
