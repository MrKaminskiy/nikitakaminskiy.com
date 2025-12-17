// Компонент карточки проекта с индивидуальным стилем
interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  gradient: string;
  icon: string;
  iconBg?: string;
  borderColor?: string;
}

export default function ProjectCard({
  title,
  description,
  href,
  gradient,
  icon,
  iconBg = "bg-custom-card",
  borderColor = "border-custom",
}: ProjectCardProps) {
  const isExternal = href.startsWith("http");
  const isActive = href !== "#";

  const className = `group block bg-custom-card p-6 rounded-2xl border ${borderColor} ${
    isActive ? "hover:border-custom-accent cursor-pointer" : "opacity-75 cursor-default"
  } transition-all duration-300 relative overflow-hidden`;

  const content = (
    <>
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${gradient}`}
      />
      
      <div className="relative z-10">
        <div className="flex items-center space-x-4 mb-3">
          <div
            className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}
          >
            <span className="text-2xl">{icon}</span>
          </div>
          <div className="font-bold text-lg text-custom-primary group-hover:text-custom-accent transition-colors">
            {title}
          </div>
        </div>
        <div className="text-sm text-custom-secondary leading-relaxed">
          {description}
        </div>
      </div>
    </>
  );

  if (isActive) {
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={className}
      >
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}

