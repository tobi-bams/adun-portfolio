import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: "/linkedin.png",
    url: "https://linkedin.com/in/yourprofile",
    width: 24,
    height: 24,
  },
  {
    name: "Facebook",
    icon: "/facebook.png",
    url: "https://facebook.com/yourprofile",
    width: 24,
    height: 24,
  },
  {
    name: "X",
    icon: "/X.jpg",
    url: "https://x.com/yourprofile",
    width: 24,
    height: 24,
  },
  {
    name: "TikTok",
    icon: "/tiktok.png",
    url: "https://tiktok.com/@yourprofile",
    width: 21,
    height: 24,
  },
  {
    name: "Instagram",
    icon: "/instagram.png",
    url: "https://instagram.com/yourprofile",
    width: 24,
    height: 24,
  },
  {
    name: "WhatsApp",
    icon: "/whatsapp.png",
    url: "https://wa.me/yourphonenumber",
    width: 24,
    height: 24,
  },
];

const SocialLinks = () => {
  return (
    <div className="flex md:gap-8 items-center justify-between md:justify-center mt-4 py-4">
      {socialLinks.map((social) => (
        <Link
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-[#494949] rounded-full hover:border-white/50 transition-colors"
          aria-label={social.name}
        >
          <Image
            width={social.width}
            height={social.height}
            src={social.icon}
            alt={social.name}
            className="w-4 h-4 md:w-6 md:h-6"
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
