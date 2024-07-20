import React from "react";
import Link from "next/link";
import { TfiGoogle, TfiYoutube } from "react-icons/tfi";
import { FaFacebookF, FaLinkedinIn, FaSkype } from "react-icons/fa6";

export const SocialLinks = () => {
  return (
    <div className="flex items-center gap-10">
      <Link href="https://www.facebook.com/" target="_blank" className="group">
        <FaFacebookF className="size-5 group-hover:text-primary-purple" />
      </Link>
      <Link href="https://www.youtube.com/" target="_blank" className="group">
        <TfiYoutube className="size-5 group-hover:text-primary-purple" />
      </Link>
      <Link href="https://www.linkedin.com/" target="_blank" className="group">
        <FaLinkedinIn className="size-5 group-hover:text-primary-purple" />
      </Link>
      <Link href="https://www.google.com/" target="_blank" className="group">
        <TfiGoogle className="size-5 group-hover:text-primary-purple" />
      </Link>
      <Link href="https://www.skype.com/" target="_blank" className="group">
        <FaSkype className="size-5 group-hover:text-primary-purple" />
      </Link>
    </div>
  );
};
