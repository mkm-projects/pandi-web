import { MailIcon, PhoneIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ContactPage() {
  const t = useTranslations("AboutPage.ContactUs");
  return (
    <section className="relative text-white flex flex-col items-center justify-start h-full min-h-screen">
        <div className="flex items-center relative w-full h-full min-h-[200px]" style={{
            backgroundImage: "url('/images/contact_phone.webp')",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
        }}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight z-10 px-6 sm:px-10 md:px-20">
              {t("titleLabel1")} <span className="text-primary">
                {t("titleLabel2")}
              </span>
            </h1>
        </div>

        <div className="w-full relative flex items-center md:flex-row flex-col justify-center py-20 overflow-hidden">
          <div className="flex flex-col gap-6 px-6 sm:px-10 md:px-20 py-10 w-full md:w-auto">
            <h2 className="text-xl md:text-3xl font-bold text-black leading-tight">
               {t("titleLabel3")} <span className="text-primary">
                 {t("titleLabel4")}
               </span>
            </h2>

            {/* Phone */}
            <div className="flex items-center gap-3 text-lg text-gray-800">
              <PhoneIcon size="28" className="text-secondary" />
              <span className="font-normal text-lg md:text-xl text-text-color">
                 {t("phone")}
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 text-lg text-gray-800">
              <MailIcon size="28" className="text-secondary" />
              <span className="font-normal text-lg md:text-xl text-text-color">
                {t("mail")}
              </span>
            </div>

            {/* Support Hours */}
            <div>
              <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-black">
                 {t("titleLabel5")} <span className="text-primary"> {t("titleLabel6")}</span>:
              </h3>
              <p className="text-text-color text-sm sm:text-md mt-1">
                {t("time")}
              </p>
              <p className="text-text-color text-sm sm:text-md mt-1">
                ({t("closeTime")})
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl w-[90%] h-[300px] md:w-1/2 lg:w-[500px] sm:h-[350px] overflow-hidden">
            <Image
              src="/images/contact_person.webp" // replace with actual image path
              alt="Customer Support"
              fill
              priority
              className="object-cover object-center h-full w-full"
            />
          </div>
        </div>

        <SocialLinks />
      </section>
  );
}




 function SocialLinks() {
  const links = [
    {
      icon: <Image src={"/images/whatsapp.png"} height={28} width={28} alt="whatsapp" />,
      text: "+91 8606449640",
      url: "https://wa.me/918606449640",
    },
    {
      icon: <Image src={"/images/instagram.png"} height={28} width={28} alt="instagram"/>,
      text: "www.facebook.com",
      url: "https://www.facebook.com",
    },
    {
      icon: <Image src={"/images/facebook.png"} height={28} width={28} alt="facebook"/>,
      text: "www.instagram.com",
      url: "https://www.instagram.com",
    },
    {
      icon: <Image src={"/images/youtube.png"} height={28} width={28} alt="youtube"/>,
      text: "www.youtube.com",
      url: "https://www.youtube.com",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-20 max-w-10xl w-full mx-auto px-10">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col justify-center bg-[#F4F4F4] rounded-2xl shadow-sm px-6 py-12 items-start hover:shadow-lg transition-all"
        >
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#202025] mb-4">
            {link.icon}
          </div>
          <p className="text-secondary font-light">{link.text}</p>
        </a>
      ))}
    </div>
  );
}
