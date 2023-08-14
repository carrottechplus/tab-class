/*
property 접근자 
- get : property key에 접근할 때 자동으로 호출되는 접근자
- set : property value에 값이 담길 때 자동으로 호출되는 접근자

클래스에 직접 값을 등록할 때,
- public : 클래스에 등록한 값을 접근해서 변경 (default)
- static : 고정적인 상태로 값을 저장, 접근 가능 확인 변경
- private : 접근 및 변경 불가
*/

class Tab {
	#defaults = { btns: 'ul li', boxs: 'article div' };
	// 인스턴스가 복사가 될 때 마다 매번 메모리할당을 할 필요가 없는 공통의 값을 클래스 자체에 등록 (변경될 값이 아니기 떄문에 class 내부에 선언)
	// 클래스에 등록한 변수 앞쪽에 #을 붙이면 private 설정으로 변경되고, private로 변경된 변수는 외부에서 변경 불가능한 캡슐화 상태가 됨

	constructor(selector, option) {
		// defaults, result는 바뀌는 값이 아니기 때문에 굳이 인스턴스 객체에 전달할 필요 없음 >> 지역변수로 설정함.
		// this 객체에 특정 정보값을 복사해서 전달하는 구조이므로 가급적이면 this로 복사해야 할 정보값을 줄이는걸 권장함.
		//defaults와 result값을 인스턴스 객체에서 직접적으로 필요한 값이 아니므로 지역변수로 설정.
		// 해당 생성자를 통해서 복사가 될 때마다 지역변수로 설정한 값을 static하게 유지가 됨.

		const result = { ...this.defaults, ...option };

		this.tab = document.querySelector(selector);
		this.btns = this.tab.querySelectorAll(result.btns);
		this.boxs = this.tab.querySelectorAll(result.boxs);

		// this.bindingEvent();
	}

	// 만약 tab이라는 프로퍼티에 접근하려고 하면 강제로 이 함수가 실행될 것
	// tab이라는 property key에 접근히려는 순간 호출되는 함수
	get tab() {
		return this.value;
	}

	// tab이라는 property value 값을 담으려는 순간 호출되는 함수
	set tab(value) {
		this.value = value.tagName === 'SECTION' ? value : document.querySelector('#tab');
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
