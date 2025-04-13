'use client';
import React from "react";


import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha"; // Import reCAPTCHA

const socialLinks = [
  {
    href: "https://facebook.com/yourpage",
    icon: <Facebook className="h-3.5 w-3.5 text-white" />,
    label: "Follow on Facebook",
    bg: "hover:bg-blue-600",
  },
  {
    href: "https://instagram.com/yourpage",
    icon: <Instagram className="h-3.5 w-3.5 text-white" />,
    label: "Follow on Instagram",
    bg: "hover:bg-pink-500",
  },
  {
    href: "https://twitter.com/yourpage",
    icon: <Twitter className="h-3.5 w-3.5 text-white" />,
    label: "Follow on Twitter",
    bg: "hover:bg-sky-400",
  },
  {
    href: "mailto:Info@VinylStatus.com",
    icon: <Mail className="h-3.5 w-3.5 text-white" />,
    label: "Send an Email",
    bg: "hover:bg-yellow-500",
  },
];

export default function ContactPage() {
  const [captchaValue, setCaptchaValue] = React.useState<string | null>(null);

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!captchaValue) {
      alert("Please complete the CAPTCHA.");
      return;
    }
    // Submit form data here if CAPTCHA is valid
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row justify-center items-start px-4 py-20 max-w-7xl mx-auto font-['Lato',sans-serif] gap-6">
      <div className="relative flex flex-col justify-start pt-[6px] w-full lg:w-auto">
        <Card className="bg-[#f4b04b] text-white w-full lg:w-[315px] h-full lg:h-[485px] shadow-lg border-none rounded-none relative flex items-center justify-center text-[14px] font-normal tracking-tight px-5 pt-12 pb-6">
          {/* Image background */}
          <div className="absolute inset-0 z-0 bg-cover bg-center opacity-23" style={{ backgroundImage: 'url("/images/unsplash.jpg")' }} />
          
          {/* Card Content */}
          <div className="relative z-10 flex flex-col items-center justify-start h-full w-full text-center gap-2">
            <CardTitle className="text-[31px] font-bold tracking-wide uppercase">Contact Us</CardTitle>
            <CardDescription className="text-white font-bold text-[13px] leading-[19px] max-w-[260px]">
              Have a question that<br /> our FAQ section can’t answer?
            </CardDescription>
            <p className="text-white text-[13px] mt-1 font-bold">
              Simply contact us using the form,<br /> or shoot us an email.
            </p>
            <a href="mailto:Info@VinylStatus.com" className="text-white font-bold text-sm p-1.5 flex items-center gap-1.5 mt-4">
              <Mail className="h-4 w-4 text-white" /> Info@VinylStatus.com
            </a>
            <div className="text-sm text-center mt-4 leading-[18px]">
              <p className="font-bold mb-1 text-[8px]">Address:</p>
              <p className="font-semibold text-[9px]">6855 176th AVE NE SUITE B240</p>
              <p className="font-semibold text-[9px]">Redmond, WA 98052</p>
            </div>
            <br />
            <div className="flex gap-1.5 pt-[10px] mb-[26px]">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`h-[33px] w-[27px] flex items-center justify-center border-[1.5px] border-white ${link.bg} relative group cursor-pointer rounded-[18px]`}
                  whileHover={{ scale: 1.1 }}
                >
                  {link.icon}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-[10px] opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <div className="bg-black text-white text-[12px] font-bold px-2 py-[5px] rounded-sm relative whitespace-nowrap">
                      {link.label}
                      <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-black" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </Card>
        {/* Responsive: Hide line on small screens */}
        <div className="hidden lg:block absolute bottom-[-42vh] right-0 translate-x-1/2 w-[1px] bg-gray-200 h-[42vh]" />
      </div>

      <div className="w-full max-w-[640px] px-2 py-2">
        <h3 className="text-[15px] font-semibold mb-6 text-gray-500">WE’LL TALK SOON.</h3>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="w-full">
            <Label htmlFor="name" className="block text-[#0d0606] font-bold text-base mb-[6px]">Name *</Label>
            <Input id="name" required className="w-full sm:w-full sm:h-[48px] lg:w-[300px] lg:h-[37px] border border-gray-300 text-[#777] text-base px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300 rounded-none" />
          </div>
          <div className="w-full">
            <Label htmlFor="email" className="block text-[#0d0606] font-bold text-base mb-[6px]">Email *</Label>
            <Input id="email" type="email" required className="w-full sm:w-full sm:h-[48px] lg:w-[300px] lg:h-[37px] border border-gray-300 text-[#777] text-base px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300 rounded-none" />
          </div>
          <div className="w-full">
            <Label htmlFor="order" className="block text-[#0d0606] font-bold text-base mb-[6px]">Order Number</Label>
            <Input id="order" className="w-full sm:w-full sm:h-[48px] lg:w-[300px] lg:h-[37px] border border-gray-300 text-[#777] text-base px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300 rounded-none" />

            <br></br> 
            <p className="text-sm text-gray-500 mt-[3px]">If applicable.</p>
          </div>
          <div className="w-full">
            <Label htmlFor="message" className="block text-[#0d0606] font-bold text-base mb-[6px]">Message *</Label>
            <Textarea id="message" required className="w-full sm:w-full sm:h-[160px] lg:h-[160px] lg:w-[580px] border border-gray-300 text-[#777] text-base px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300 rounded-none" />
          </div>
          
          {/* CAPTCHA */}
          <div>
            <Label className="block text-[#0d0606] font-bold text-base mb-[6px]">CAPTCHA</Label>
            <ReCAPTCHA
              sitekey="your-recaptcha-site-key" // Replace with your actual reCAPTCHA site key
              onChange={handleCaptchaChange}
            />
          </div>

          <Button type="submit" className="w-full sm:w-full sm:h-[52px] lg:w-[130px] lg:h-[39px] bg-[#e0941a] hover:bg-[#b3700b] text-white text-sm font-bold tracking-wider px-8 py-2 rounded-none border-[2px] border-[#f4b04b]">
            SUBMIT
          </Button>
        </form>
      </div>
    </div>
  );
}
