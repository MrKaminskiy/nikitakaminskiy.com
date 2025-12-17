// Модальное окно с информацией о сервисах
"use client";

import { useEffect } from "react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  services: string[];
  benefits: string[];
  gradient: string;
}

export default function ServiceModal({
  isOpen,
  onClose,
  title,
  description,
  services,
  benefits,
  gradient,
}: ServiceModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative rounded-2xl border border-custom-border max-w-2xl w-full max-h-[90vh] overflow-y-auto p-[1px]"
        style={{
          background: gradient,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-custom-card rounded-2xl p-8">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-custom-secondary hover:text-custom-primary transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Title */}
          <h2 className="text-3xl font-bold text-custom-primary mb-4 pr-8">{title}</h2>
          <p className="text-custom-secondary text-lg mb-8 leading-relaxed">{description}</p>

          {/* Services */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-custom-primary mb-4">What I Offer</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-custom-secondary/10 border border-custom-border"
                >
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{
                      background: gradient,
                    }}
                  />
                  <span className="text-custom-primary">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-xl font-semibold text-custom-primary mb-4">Benefits</h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <svg
                    className="w-5 h-5 text-custom-accent mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-custom-secondary leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-8 pt-6 border-t border-custom-border">
            <p className="text-custom-primary font-semibold mb-2">Ready to automate your workflow?</p>
            <p className="text-custom-secondary text-sm">DM me to discuss your specific needs</p>
          </div>
        </div>
      </div>
    </div>
  );
}

