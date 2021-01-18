$(document).ready(function() {
	const dlswitch = $("#switch").get(0);
	const label = $("#switch + label").get(0);
	const theme = localStorage.getItem("theme");
	$(dlswitch).change(function() {
		if (this.checked) {
			themeChange("dark");
		} else {
			themeChange("light");
		}
	});
	const themeChange = (theme) => {
		if (theme === "dark") {
			label.setAttribute('theme', '🌙');
			if (!dlswitch.checked) dlswitch.checked = true;
		} else {
			label.setAttribute('theme','💡');
			if (dlswitch.checked) dlswitch.checked = false;
		}
		document.body.className = theme;
		localStorage.setItem("theme", theme);
	}
	// If the user has set a theme in their system settings, those settings are used
	if (window.matchMedia("(prefers-color-scheme)").media !== "not all") {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			themeChange("dark");
		} else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
			themeChange("light");
		}
	}
	if (theme) themeChange(theme);
});
