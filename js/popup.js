		var link = document.querySelector(".js-whrite-us");
		var popup = document.querySelector(".modal-user");
		var close = popup.querySelector(".modal-close");

		var form = popup.querySelector(".write-us");
		var login = popup.querySelector("[name=name]");
		var email = popup.querySelector("[email=mail]");
		var text = popup.querySelector("[text=text]");

		link.addEventListener("click", function (evt) {
			evt.preventDefault();
			popup.classList.add("modal-show");
		});

		close.addEventListener("click", function (evt) {
			evt.preventDefault();
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		});

		form.addEventListener("submit", function (evt) {
			if (!name.value || !email.value) {
				evt.preventDefault();
				popup.classList.remove("modal-error");
				popup.offsetWidth = popup.offsetWidth;
				popup.classList.add("modal-error");
			}
		});

		window.addEventListener("keydown", function (evt) {
			if (evt.keyCode === 27) {
				evt.preventDefault();

				if (popup.classList.contains("modal-show")) {
					popup.classList.remove("modal-show");
					popup.classList.remove("modal-error");
				}
			}
		});