const btn = document.querySelector('.btn');

const btnAnimation = (e) => {
	// pozycja w którą klikamy
	const top = e.clientY;
	const left = e.clientX;

	// pozycja przycisku
	const btnTopPosition = e.target.offsetTop;
	const btnLeftPosition = e.target.offsetLeft;

	const insideBtnTop = top - btnTopPosition;
	const insideBtnLeft = left - btnLeftPosition;

	const circle = document.createElement('span');
	circle.classList.add('circle');
	circle.style.top = insideBtnTop + 'px';
	circle.style.left = insideBtnLeft + 'px';

	e.target.appendChild(circle);

	setTimeout(() => {
		circle.remove();
	}, 300);
};

btn.addEventListener('click', btnAnimation);
