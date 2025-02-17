import React from 'react';
import { Download } from 'lucide-react';

export const DownloadButton = () => {
  return (
    <button 
      onClick={() => window.location.href = 'https://github.com/XeTrinityz/ThatSkyApp/releases/latest/download/ThatSkyApp.exe'}
      className="group relative cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 rounded-full flex items-center justify-center mx-auto gap-2 sm:gap-3 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(96,165,250,0.5)] text-base sm:text-lg md:text-xl"
    >
      <div className="relative flex items-center gap-2">
        <Download className="w-6 h-6 transform transition-all duration-300 group-hover:translate-y-4 group-hover:opacity-0" />
        <Download className="w-6 h-6 transform transition-all duration-300 -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 absolute left-0" />
        <span>Download Installer</span>
      </div>
    </button>
  );
};

export const GitHubButton = ({ stars = 6, repoUrl = "https://github.com/XeTrinityz/ThatSkyMod" }) => {
  return (
    <button 
      onClick={() => window.open(repoUrl, '_blank')}
      className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#1d1d1f] text-white shadow hover:bg-[#1d1d1f]/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative mx-auto mt-4 justify-center gap-2 rounded-full cursor-pointer transition-all duration-300 ease-out hover:ring-2 hover:ring-white/20 hover:ring-offset-2 hover:ring-offset-black">
      <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40" />
      <div className="flex items-center">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 438.549 438.549">
          <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z" />
        </svg>
        <span className="ml-1 text-white">Star on GitHub</span>
      </div>
      <div className="ml-2 flex items-center gap-1 text-sm md:flex">
        <svg className="w-4 h-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300" data-slot="icon" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" fillRule="evenodd" />
        </svg>
        <span className="inline-block tabular-nums tracking-wider font-display font-medium text-white">{stars}</span>
      </div>
    </button>
  );
};

export const DiscordButton = () => {
  return (
    <div className="fixed bottom-4 right-[88px] z-50">
      <div className="tooltip-container relative cursor-pointer text-base">
        <div className="tooltip absolute left-1/2 -translate-x-1/2 opacity-0 pointer-events-none transition-all duration-300 z-10 p-[1px] rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
          <div className="bg-[#1d1d1f] rounded-lg p-4 min-w-[200px]">
            <div className="text-center">
              <div className="text-lg font-bold text-white mb-1">That Sky Mod</div>
              <div className="text-gray-400">3611+ Members</div>
            </div>
          </div>
        </div>
        <a className="icon text-white block relative" href="https://discord.gg/ThatSkyMod">
          <div className="layer w-12 h-12 transition-transform duration-300">
            <span className="absolute top-0 left-0 h-full w-full rounded-full transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500"></span>
            <span className="absolute top-0 left-0 h-full w-full rounded-full transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500"></span>
            <span className="absolute top-0 left-0 h-full w-full rounded-full transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500"></span>
            <span className="absolute top-0 left-0 h-full w-full rounded-full transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500"></span>
            <span className="absolute top-0 left-0 h-full w-full rounded-full transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <svg className="w-6 h-6 fill-white" viewBox="0 0 640 512">
                <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.836a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/>
              </svg>
            </span>
          </div>
        </a>
      </div>
      <style jsx>{`
        .tooltip-container:hover .tooltip {
          top: -140px;
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }
        .tooltip {
          top: -140px;
          visibility: hidden;
        }
        .icon:hover .layer {
          transform: rotate(-35deg) skew(20deg);
        }
        .icon:hover .text-label {
          opacity: 1;
        }
        .icon:hover .layer span:nth-child(1) {
          opacity: 0.2;
        }
        .icon:hover .layer span:nth-child(2) {
          opacity: 0.4;
          transform: translate(5px, -5px);
        }
        .icon:hover .layer span:nth-child(3) {
          opacity: 0.6;
          transform: translate(10px, -10px);
        }
        .icon:hover .layer span:nth-child(4) {
          opacity: 0.8;
          transform: translate(15px, -15px);
        }
        .icon:hover .layer span:nth-child(5) {
          opacity: 1;
          transform: translate(20px, -20px);
        }
      `}</style>
    </div>
  );
};

const CustomButtons = {
  DownloadButton,
  DiscordButton,
  GitHubButton
};

export default CustomButtons;