frappe.ui.ThemeSwitcher = class CustomThemeSwitcher extends frappe.ui.ThemeSwitcher {
    constructor() {
        super();
    }

    fetch_themes() {
        return new Promise((resolve) => {
            this.themes = [
                {
                    name: "light",
                    label: "Frappe Light",
                    info: "Light Theme",
                },
                {
                    name: "dark",
                    label: "Timeless Night",
                    info: "Dark Theme",
                },
                {
                    name: "mybotia_theme",
                    label: "MyBotIA UI",
                    info: "A modern theme",
                },
                {
                    name: "automatic",
                    label: "Automatic",
                    info: "Uses system's theme to switch between light and dark mode",
                },
            ];

            resolve(this.themes);
        });
    }
};
