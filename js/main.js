$(document).ready(function() {
	const dlswitch = $("#switch").get(0);
	const label = $("#switch + label").get(0);
	const theme = localStorage.getItem("theme");
	$(dlswitch).change(function() {
		if (this.checked) {
			themeChange("dark",label);
		} else {
			themeChange("light",label);
		}
	});
	const themeChange = (theme,label) => {
		if (theme === "dark") {
			label.setAttribute('theme', '🌙');
		} else {
			label.setAttribute('theme','💡');
		}
		document.body.className = theme;
		localStorage.setItem("theme", theme);
	}
	// If the user has set a theme in their system settings, those settings are used
	if (window.matchMedia("(prefers-color-scheme)").media !== "not all") {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			themeChange("dark",label);
		} else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
			themeChange("light",label);
		}
	}
	if (theme) themeChange(theme,label);
});
