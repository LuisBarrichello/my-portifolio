import { socialLinks } from "../../../data/data";

function SocialLinks() {
    return (
        <>
            {socialLinks.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <link.icon className="w-7 h-7" />
                </a>
            ))}
        </>
    );
}

export default SocialLinks;