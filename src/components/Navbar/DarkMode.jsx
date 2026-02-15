import React from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
    const [isDark, setIsDark] = React.useState(false);

    React.useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="relative bg-transparent border-none p-0 cursor-pointer"
        >
            <img
                src={isDark ? LightButton : DarkButton}
                alt=""
                className="w-12 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
            />
        </button>
    );
};

export default DarkMode;
