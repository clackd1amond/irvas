const modals = () => {
	function bindModal(
		triggerSelector,
		modalSelector,
		closeSelector,
		closeClickOverlay = true
	) {
		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector),
			windows = document.querySelectorAll('[data-modal]');

		function closeModal() {
			windows.forEach((modal) => {
				modal.style.display = 'none';
			});
			document.body.classList.remove('modal-open');
		}

		trigger.forEach((item) => {
			item.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}
				closeModal();
				openModal(modal);
			});
		});

		close.addEventListener('click', () => closeModal());

		modal.addEventListener('click', (e) => {
			if (e.target === modal && closeClickOverlay) {
				closeModal();
			}
		});

		document.addEventListener('keydown', (e) => {
			if (
				e.code === 'Escape' &&
				closeClickOverlay &&
				document.body.classList.contains('modal-open')
			) {
				closeModal();
			}
		});
	}

	function openModal(modal) {
		modal.style.display = 'block';
		document.body.classList.add('modal-open');
	}
	function showModalByTime(selector, time) {
		setTimeout(() => {
			openModal(document.querySelector(selector));
		}, time);
	}

	bindModal(
		'.popup_engineer_btn',
		'.popup_engineer',
		'.popup_engineer .popup_close'
	);

	bindModal('.phone_link', '.popup', '.popup .popup_close');
	bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
	bindModal(
		'.popup_calc_button',
		'.popup_calc_profile',
		'.popup_calc_profile_close',
		false
	);
	bindModal(
		'.popup_calc_profile_button',
		'.popup_calc_end',
		'.popup_calc_end_close',
		false
	);
	showModalByTime('.popup', 60000);
};

export default modals;
