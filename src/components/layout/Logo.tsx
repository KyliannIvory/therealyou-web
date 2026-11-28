import type { ReactElement } from "react";
import Image from "next/image";

type LogoProps = {
  tagline: string;
};

const Logo = ({ tagline }: LogoProps): ReactElement => {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/images/logo-therealyou.png"
        alt="The Real You"
        width={40}
        height={40}
        className="size-10 rounded-full border border-glacier-100 object-contain"
      />
      <div className="flex flex-col">
        <span className="text-lg font-bold tracking-wider text-glacier-900">THE REAL YOU</span>
        <span className="text-label font-medium tracking-widest text-ice-slate uppercase">
          {tagline}
        </span>
      </div>
    </div>
  );
};

export default Logo;
