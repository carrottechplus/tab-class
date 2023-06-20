//객체지향

new Tab('#tab', {
	btns: 'ul li',
	boxs: 'article div',
});

function Tab(selector, option) {
	this.tab = document.querySelector(selector);
	this.btns = this.tab.querySelectorAll(option.btns);
	this.boxs = this.tab.querySelectorAll(option.boxs);

	this.btns.forEach(
		function (btn, idx) {
			btn.addEventListener(
				'click',
				function () {
					[this.btns, this.boxs].forEach(
						function (el) {
							this.activation(el, idx);
						}.bind(this)
					);
				}.bind(this)
			);
		}.bind(this)
	);
}
// 함수를 프로토타입에 저장
Tab.prototype.activation = function (arr, idx) {
	arr.forEach(function (el) {
		el.classList.remove('on');
	});
	arr[idx].classList.add('on');
};
