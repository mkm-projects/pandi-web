import { MailIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="relative text-white flex flex-col items-center justify-start h-full min-h-screen">
        <div className="flex items-center relative w-full h-full min-h-[250px]" style={{
            backgroundImage: "url('/images/contact_telephone.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight z-10 px-32">
              Contact <span className="text-primary">Us</span>
            </h1>
        </div>

        <div className="w-full relative flex items-center md:flex-row flex-col justify-between px-6 md:px-4 py-10 max-w-8xl mx-auto overflow-hidden">
          <div className="flex flex-col gap-6 px-2 py-10 md:px-3 w-full md:w-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-black leading-tight">
              Get In <span className="text-primary">Touch</span>
            </h2>

            {/* Phone */}
            <div className="flex items-center gap-3 text-lg text-gray-800">
              <PhoneIcon size="28" className="text-secondary" />
              <span className="font-normal text-text-color">+91 8606449640</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 text-lg text-gray-800">
              <MailIcon size="28" className="text-secondary" />
              <span className="font-normal text-text-color">Pandispare@gmail.Com</span>
            </div>

            {/* Support Hours */}
            <div>
              <h3 className="text-2xl font-semibold text-black">
                Customer Support <span className="text-primary">Hours</span>:
              </h3>
              <p className="text-text-color mt-1">
                Monday – Saturday: 9:00 AM To 7:00 PM
              </p>
              <p className="text-text-color text-sm mt-1">
                (Sundays & Public Holidays Closed)
              </p>
            </div>
          </div>

          <div className="w-full relative h-[300px] md:h-[350px] lg:h-[450px] md:w-1/2 rounded-2xl overflow-hidden">
            <Image
              src="/images/contact_person.png" // replace with actual image path
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
