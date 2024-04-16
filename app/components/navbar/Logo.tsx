'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
    <Image
      onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer object-contain text-rose-500" 
      src="/images/rent.svg" 
      height="60" 
      width="60" 
      alt="Logo" 
    />
   );
}
 
export default Logo;
