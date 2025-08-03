  export const SocialIcon = ({
    icon: Icon,
    hoverColor = "text-white",
    href = "#",
    text = "",
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

{
    text && (
         <p className="text-black font-medium">{text}</p>
    )
}
      
    </a>
  );