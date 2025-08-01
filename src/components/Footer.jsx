import {
  Call,
  Facebook,
  Instagram,
  Location,
  Sms,
  Whatsapp,
  Youtube,
} from "iconsax-reactjs";

export default function Footer() {
  const SocialIcon = ({
    icon: Icon,
    hoverColor = "text-white",
    href = "#",
  }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative w-14 h-14 flex items-center justify-center rounded-full bg-[#1a1a1d]"
    >
      <div className="rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
        <Icon size="28" variant="Bold" className={`${hoverColor}`} />
      </div>
    </a>
  );

  return (
    <>
      <div className="text-white bg-cover bg-center w-full h-full overflow-hidden bg-secondary">
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between gap-8 relative">
            <div className="flex-1 mt-5 px-28 py-20 z-10">
              <img
                src="/images/logo.png"
                alt="Pandi Auto Spares"
                className="w-44 mb-4"
              />

              <div className="space-y-3 font-roboto font-light text-[14px] sm:text-[16px] md:text-[20px] leading-9 tracking-normal mt-8">
                <p className="flex items-center gap-6">
                  <Location size="20" variant="Outline" />
                  Enter Your Location
                </p>
                <p className="flex items-center gap-6">
                  <Call size="20" variant="Outline" />
                  +91 8606449640
                </p>
                <p className="flex items-center gap-6">
                  <Sms size="20" variant="Outline" />
                  pandispare@gmail.com
                </p>
              </div>

              <div className="flex gap-6 mt-8">
                <SocialIcon
                  icon={Whatsapp}
                  hoverColor="hover:text-green-400"
                  href="https://wa.me/918606449640"
                />
                <SocialIcon
                  icon={Facebook}
                  hoverColor="hover:text-blue-500"
                  href="https://facebook.com"
                />
                <SocialIcon
                  icon={Instagram}
                  hoverColor="hover:text-pink-500"
                  href="https://instagram.com"
                />
                <SocialIcon
                  icon={Youtube}
                  hoverColor="hover:text-red-500"
                  href="https://youtube.com"
                />
              </div>
            </div>

            <div className="flex relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62662.18950647047!2d76.10954598111691!3d11.009574826737895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cc54481b4493%3A0x26f77eae08f52b41!2sPandi%20Auto%20Spares!5e0!3m2!1sen!2sin!4v1753016755766!5m2!1sen!2sin"
                className="w-full h-[80%] border-0 absolute top-1/2 transform -translate-y-1/2 right-10 z-20 rounded-lg"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <div className="relative overflow-hidden h-full w-full">
                <img
                  src="/images/footer_img.png"
                  alt="Car Background"
                  className="w-full h-full object-cover scale-150 -translate-x-44 translate-y-24 filter brightness-50"
                  
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-white border-t p-2 md:p-4 text-center">
        <p className="text-[#4C4C4C] !font-extralight text-[0.6rem] sm:text-[0.9rem]">
          &copy; All Rights Reserved | Designed And Developed By MKM Solutions
        </p>
      </footer>
    </>
  );
}
