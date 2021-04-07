const images = () => {
	const imgPopup = document.createElement('div'),
		workSection = document.querySelector('.works'),
		bigImage = document.createElement('img');

	imgPopup.classList.add('popupImg');
	workSection.appendChild(imgPopup);

	imgPopup.style.cssText = `
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 9;
		background-color: rgba(0, 0, 0, 0.5);
		align-items: center;
		justify-content: center;
	`;

	imgPopup.appendChild(bigImage);

	workSection.addEventListener('click', (e) => {
		e.preventDefault();

		let target = e.target;

		if (target && target.classList.contains('preview')) {
			imgPopup.style.display = 'flex';
			const path = target.parentNode.getAttribute('href');
			bigImage.setAttribute('src', path);
			bigImage.style.maxHeight = '80%';
		}

		if (target && target.matches('div.popupImg')) {
			imgPopup.style.display = 'none';
		}
	});
};

export default images;
