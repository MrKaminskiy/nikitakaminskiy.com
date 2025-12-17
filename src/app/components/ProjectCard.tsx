// Компонент карточки проекта с индивидуальным стилем
interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  gradient: string;
  icon: string;
  iconBg?: string;
  borderColor?: string;
  pattern?: "default" | "glow" | "shimmer" | "gradient-border";
}

export default function ProjectCard({
  title,
  description,
  href,
  gradient,
  icon,
  iconBg = "bg-custom-card",
  borderColor = "border-custom",
  pattern = "default",
}: ProjectCardProps) {
  const isExternal = href.startsWith("http");
  const isActive = href !== "#";

  const baseClassName = `group block p-6 rounded-2xl relative overflow-hidden ${
    isActive ? "cursor-pointer" : "opacity-75 cursor-default"
  } transition-all duration-500`;

  // Разные паттерны для карточек
  const patternStyles = {
    default: `bg-custom-card border ${borderColor} ${
      isActive ? "hover:border-custom-accent hover:shadow-lg hover:shadow-custom-accent/20" : ""
    }`,
    glow: `bg-custom-card border ${borderColor} ${
      isActive ? "hover:shadow-2xl hover:shadow-custom-accent/30 hover:scale-[1.02]" : ""
    }`,
    shimmer: `bg-gradient-to-br from-custom-card to-custom-secondary/10 border ${borderColor} ${
      isActive ? "hover:shadow-xl hover:scale-[1.01]" : ""
    }`,
    "gradient-border": `bg-custom-card border ${borderColor} ${
      isActive
        ? "hover:shadow-2xl hover:shadow-custom-accent/25 hover:scale-[1.02] hover:border-custom-accent/50"
        : ""
    }`,
  };

  const className = `${baseClassName} ${patternStyles[pattern]}`;

  const content = (
    <>
      {/* Animated gradient background */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${gradient} blur-xl`}
      />
      
      {/* Shimmer effect for shimmer pattern */}
      {pattern === "shimmer" && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      )}

      {/* Glow effect for glow pattern */}
      {pattern === "glow" && (
        <div
          className={`absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${gradient} blur-lg -z-10 rounded-2xl`}
        />
      )}

      {/* Gradient border effect */}
      {pattern === "gradient-border" && isActive && (
        <div
          className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${gradient} blur-sm -z-10`}
          style={{
            maskImage: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskImage: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "1px",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4 flex-1">
            <div
              className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg relative overflow-hidden`}
            >
              {/* Icon background glow */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${gradient} blur-md`}
              />
              <span className="text-3xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                {icon}
              </span>
            </div>
            <div className="flex-1">
              <div className="font-bold text-xl text-custom-primary group-hover:text-custom-accent transition-colors duration-300 mb-1">
                {title}
              </div>
              {isActive && (
                <div className="text-xs text-custom-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Перейти →
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="text-sm text-custom-secondary leading-relaxed group-hover:text-custom-primary/80 transition-colors duration-300">
          {description}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-custom-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 right-4 w-1 h-1 rounded-full bg-custom-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75" />
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

