import { useEffect } from 'react';

const IntersectionObserverComponent = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                } else {
                    entry.target.classList.remove("show");
                }
            });
        });

        const hiddenElements = document.querySelectorAll(".hidden");
        hiddenElements.forEach((el) => observer.observe(el));

        // Cleanup function to disconnect the observer when the component unmounts
        /* return () => observer.disconnect(); */
    }, []);

    return null; // This component doesn't render anything
};

export default IntersectionObserverComponent;
