class Tab {
	constructor(selector, option) {
		// defaults, result는 바뀌는 값이 아니기 때문에 굳이 인스턴스 객체에 전달할 필요 없음 >> 지역변수로 설정함.
		const defaults = { btns: 'ul li', boxs: 'article div' };
		const result = { ...defaults, ...option };

		this.tab = document.querySelector(selector);
		this.btns = this.tab.querySelectorAll(result.btns);
		this.boxs = this.tab.querySelectorAll(result.boxs);

		this.bindingEvent();
	}
	bindingEvent() {
		this.btns.forEach((el, idx) => {
			el.addEventListener('click', () => {
				[this.btns, this.boxs].forEach((el) => this.activation(el, idx));
			});
		});
	}

	activation(arr, idx) {
		arr.forEach((el) => el.classList.remove('on'));
		arr[idx].classList.add('on');
	}
}

// new Tab('#tab'); index.html에 script defer 제거 후 플러그인 호출하듯이 html파일로 이동
