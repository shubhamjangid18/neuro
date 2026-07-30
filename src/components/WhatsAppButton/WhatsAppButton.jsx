import React from "react";

/**
 * Floating WhatsApp button — single-file version (JSX + CSS in one).
 * No separate .css file needed — styles are embedded via <style>.
 * Update PHONE_NUMBER (country code + number, no spaces or +) and
 * MESSAGE below.
 */
const PHONE_NUMBER = "911234567890"; // <-- replace with your real number
const MESSAGE = "Hi! I'd like to know more about your services.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <>
      <a
        href={href}
        className="whatsapp-fab"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="whatsapp-fab__ring" aria-hidden="true" />
        <svg
          className="whatsapp-fab__icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill="#ffffff"
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.001 2c-5.523 0-10 4.477-10 10 0 1.771.463 3.478 1.34 4.987L2 22l5.13-1.34A9.94 9.94 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.03a8.03 8.03 0 01-4.086-1.117l-.293-.174-3.045.797.812-2.968-.19-.304A8.03 8.03 0 1120.03 12 8.03 8.03 0 0112 20.03z"
          />
        </svg>
        <span className="whatsapp-fab__tooltip">Chat with us</span>
      </a>

      <style>{`
        .whatsapp-fab {
          position: fixed;
          right: 24px;
          bottom: 24px;
          z-index: 999;

          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #25d366;
          box-shadow: 0 10px 28px rgba(37, 211, 102, 0.4), 0 2px 6px rgba(0, 0, 0, 0.15);
          text-decoration: none;
          transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 320ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .whatsapp-fab:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 16px 36px rgba(37, 211, 102, 0.5), 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .whatsapp-fab__icon {
          position: relative;
          z-index: 1;
          width: 32px;
          height: 32px;
        }

        .whatsapp-fab__ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: #25d366;
          opacity: 0.55;
          animation: whatsapp-pulse 2.4s ease-out infinite;
        }

        @keyframes whatsapp-pulse {
          0% {
            transform: scale(1);
            opacity: 0.55;
          }
          100% {
            transform: scale(1.9);
            opacity: 0;
          }
        }

        .whatsapp-fab__tooltip {
          position: absolute;
          right: calc(100% + 12px);
          top: 50%;
          transform: translateY(-50%) translateX(6px);
          white-space: nowrap;
          background: #10233f;
          color: #fff;
          font-size: 13px;
          font-weight: 500;
          padding: 7px 14px;
          border-radius: 8px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 260ms ease, transform 260ms ease;
        }

        .whatsapp-fab__tooltip::after {
          content: '';
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border: 5px solid transparent;
          border-left-color: #10233f;
        }

        .whatsapp-fab:hover .whatsapp-fab__tooltip {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }

        @media (max-width: 640px) {
          .whatsapp-fab {
            right: 16px;
            bottom: 16px;
            width: 52px;
            height: 52px;
          }

          .whatsapp-fab__icon {
            width: 28px;
            height: 28px;
          }

          .whatsapp-fab__tooltip {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .whatsapp-fab__ring {
            animation: none;
            opacity: 0.25;
          }
        }
      `}</style>
    </>
  );
}