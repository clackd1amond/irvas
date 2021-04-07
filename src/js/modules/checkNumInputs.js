const checkNumInputs = (selector) => {
	const numInputs = document.querySelectorAll(selector);

	numInputs.forEach((item) => {
		item.addEventListener('input', () => {
			// setTimeout(() => (item.value = item.value.replace(/\D/, '')), 300);
			item.value = item.value.replace(/\D/, '');
		});
	});
};

export default checkNumInputs;
