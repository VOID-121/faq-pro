'use client';

import React from 'react';

type TermsSection = {
  title: string;
  subheader?: string;
  paragraphs: string[];
  list?: string[];
};

const termsData: TermsSection[] = [
  {
    title: 'Terms and Conditions',
    subheader:
      'PLEASE READ THESE TERMS AND CONDITIONS (“TERMS”) CAREFULLY BEFORE USING THE WEBSITE, SOCIAL MEDIA, AND SERVICES.',
    paragraphs: [
      "You are reading these Terms because you are using Vinyl Status LLC’s (including its affiliates, which we may collectively refer to as “Vinyl Status,” “we,” “us,” or “our”) Website, www.vinylstatus.com (the “Website”), are interacting with Vinyl Status’s social media platforms, including accounts on Facebook, LinkedIn, Instagram, and other platforms (collectively, “Social Media”), and/or are using Vinyl Status’s manufacturing, printing, and design services, including related tools (“Services”).",
      'As used in these Terms, “you” and “your” refer to any user accessing the Website or Social Media or using the Services, including without limitation users who are visitors, browsers, vendors, customers, merchants, and/or contributors of content (each a “User” and collectively “Users”).',
      'Certain services, promotions, events, or features may have additional terms and conditions specific to them, which are incorporated herein by reference. If there is a conflict between these Terms and the terms set forth on a specific portion of the Website or Social Media, the specific terms will control your use of that portion of the Website or Social Media.',
    ],
  },
  {
    title: 'TERMS OF USE',
    paragraphs: [
      'Welcome. Please review the following basic rules that govern your use of our site. Your use of our site constitutes your agreement to follow and be bound by these Terms of Use. VinylStatus reserves the right to update or modify these Terms of Use at any time without prior notice to you. Your use of the Site following any such change constitutes your unconditional agreement to follow and be bound by these Terms of Use as changed. For this reason, we encourage you to review these Terms of Use whenever you use this Site.',
    ],
  },
  {
    title: 'Site Contents',
    paragraphs: [
      "Unless otherwise noted, the contents (all materials, including images, designs, photographs, and written and other materials that are part of this Site) are copyrights, trademarks, and/or other intellectual properties owned, controlled, or licensed by VinylStatus. The Site as a whole is protected by copyright and trade dress, all rights, titles, and interests in and to which are owned by VinylStatus.",
      'The contents of our Site, and the Site as a whole, are intended solely for personal, non-commercial use by the users of our Site. You may download or copy the contents and other downloadable materials displayed on the Site for your personal use only. No right, title, or interest in any downloaded materials or software is transferred to you as a result of any such downloading or copying. You may not reproduce (except as noted above), publish, transmit, distribute, display, modify, create derivative works from, sell or participate in any sale of, or exploit in any way, in whole or in part, any of the contents, the Site, or any related software, without written permission from our company.',
    ],
  },
  {
    title: 'Product Information / Pricing',
    paragraphs: ['The prices displayed on VinylStatus.com are quoted in U.S. dollars.'],
  },
  {
    title: 'Order Acceptance',
    paragraphs: [
      'Please note that there may be certain orders that we are unable to accept and must cancel. We reserve the right, at our sole discretion, to refuse or cancel any order for any reason. We may also require additional verifications or information before accepting any order. We will contact you if all or any portion of your order is canceled or if additional information is required to accept your order. If your order is canceled after your credit card has been charged, we will issue a credit to your credit card in the amount of the charge. By creating an order with VinylStatus, you are agreeing to opt into our newsletter. Don’t worry, we won’t spam, and you may unsubscribe at any time.',
    ],
  },
  {
    title: 'Shipping Policy',
    paragraphs: [
      'We strive to provide accurate shipping options and timelines at checkout. By placing an order, you acknowledge and agree to the following terms:',
    ],
    list: [
      'Shipping Options: Customers are responsible for selecting their preferred shipping option at checkout. Available options and associated costs are displayed during the checkout process.',
      'Free Shipping: Free shipping is available on select orders and applies only when specifically selected at checkout.',
      'Expedited Shipping: Expedited shipping options, such as 2-day or 4-day shipping, are available at an additional cost. Costs for these options are clearly indicated during checkout and are non-refundable once selected, barring errors on our part.',
      'Shipping Timelines: Estimated delivery timelines are provided as guidance and are not guaranteed. Delays may occur due to unforeseen circumstances, including but not limited to supply chain issues, carrier delays, or inventory shortages.',
      'Material Availability: Orders are subject to material availability. In the event of a stock issue, customers will be notified within 24 hours of order placement. VinylStatus is not liable for delays caused by material shortages.',
      'Carrier Responsibility: Once an order has been shipped, responsibility for the shipment lies with the carrier. VinylStatus is not liable for lost, misdelivered, or delayed shipments caused by the carrier. Customers should contact the carrier directly for resolution in such cases.',
    ],
  },
  {
    title: 'Miscellaneous',
    paragraphs: [
      'Unless otherwise specified, this Site and the contents thereof are displayed solely for the purpose of promoting VinylStatus sticker printing. This Site is controlled and operated by VinylStatus from its offices in Bellevue, WA.',
      'This Agreement shall be construed in accordance with the laws of the State of Washington, without regard to any conflict of law provisions. Any dispute arising under this Agreement shall be resolved exclusively by the state and federal courts of the State of Washington, King County.',
    ],
  },
  {
    title: 'Disclaimer',
    paragraphs: [
      'This site is provided by VinylStatus.com on an “as is” and “as available” basis. VinylStatus.com makes no representations or warranties of any kind, express or implied, as to the operation of the site or the information, content, materials, or products included on this site. To the full extent permissible by applicable law, VinylStatus.com disclaims all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose. Without limiting the foregoing, VinylStatus.com disclaims any and all warranties, express or implied, for any merchandise offered on this site. You acknowledge, by your use of the VinylStatus.com website, that your use of the site is at your sole risk. This disclaimer constitutes an essential part of this agreement. Some states do not allow limitations on how long an implied warranty lasts, so the foregoing limitations may not apply to you.',
    ],
  },
  {
    title: 'Limitation of Liability',
    paragraphs: [
      'To the fullest extent permitted by law, under no circumstances and under no legal or equitable theory, whether in tort, contract, strict liability, or otherwise, shall VinylStatus.com or any of its affiliates, employees, directors, officers, agents, vendors, or suppliers be liable to you or to any other person for any indirect, special, incidental, or consequential losses or damages of any nature arising out of or in connection with the use of or inability to use the VinylStatus.com website, including, without limitation, damages for lost profits, loss of goodwill, loss of data, work stoppage, accuracy of results, or computer failure or malfunction, even if an authorized representative of VinylStatus.com has been advised of or should have known of the possibility of such damages.',
      'In no event will VinylStatus.com’s total liability to you for all damages, losses, and causes of action exceed the amount paid by you, if any, for accessing this Site during the six months preceding the date on which the claim arose. VinylStatus is not liable for any losses related to third-party carriers, including lost shipments, misdelivery, or delays. VinylStatus is not responsible for the misapplication or improper use of any product sold on our website. Please follow all provided application instructions to ensure proper use.',
    ],
  },
  {
    title: 'Indemnification',
    paragraphs: [
      'You agree to indemnify, defend, and hold harmless Vinyl Status LLC, its affiliates, officers, directors, employees, agents, licensors, and suppliers from and against any and all claims, losses, liabilities, expenses, damages, and costs, including reasonable attorneys’ fees, arising from or relating to your use of the Website, Social Media, and Services, your User Content, your violation of these Terms, or your violation of any third-party rights, including intellectual property rights. Vinyl Status LLC reserves the right to assume exclusive defense and control of any matter subject to indemnification by you, in which case you agree to cooperate fully with Vinyl Status LLC in asserting any available defenses.',
    ],
  },
  {
    title: 'Returns',
    paragraphs: [
      'VinylStatus accepts requests for cancellation and refund by users only for the portion of the service not yet provided. In the event the product received is unsatisfactory, users may request to return it within 30 days of the order being placed.',
    ],
    list: [
      'Minimum 30-day return window is available.',
      'Returns must be authorized by VinylStatus before processing.',
      'Contact customer support for return instructions.',
    ],
  },
  {
    title: 'Contact Information',
    paragraphs: [
      'Vinyl Status LLC\nPO BOX 1075\nBellevue, WA 98009\nEmail: info@vinylstatus.com',
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen py-13 px-2 bg-white font-['Lato',sans-serif] text-gray-500">
      <div className="max-w-5xl mx-auto">
        {termsData.map((section, idx) => (
          <div key={idx} className="mb-8">
            <h2 className="text-[16px] sm:text-[12px] md:text-[20px] font-bold text-gray-700 leading-[1.4] mb-4 uppercase tracking-tight">
              {section.title}
            </h2>

            {section.subheader && (
              <h3 className="text-[15px] md:text-[19px] lg:text-[15px] font-bold text-gray-600 mb-5 leading-[1.4] break-words text-justify max-w-full">
                {section.subheader}
              </h3>
            )}

            {section.paragraphs.map((para, i) => {
              // Replace plain link text with anchor tag
              const formattedPara = para.replace(
                'www.vinylstatus.com',
                '<a href="https://www.vinylstatus.com" class="text-black hover:text-blue-600 transition-colors duration-200" target="_blank" rel="noopener noreferrer">www.vinylstatus.com</a>'
              );

              if (section.title === 'Contact Information') {
                const [firstLine, secondLine, cityLine, emailLine] = para.split('\n');
                return (
                  <div key={i} className="text-gray-500 text-sm leading-[22px] font-semibold space-y-3">
                    <div>
                      <p className="m-0 p-0 leading-none">{firstLine}</p>
                      <p className="m-0 font-bold leading-none">{secondLine}</p>
                    </div>
                    <div>
                      <p className="m-0 p-0 leading-none">{cityLine}</p>
                      <p className="m-0 p-0 leading-none">
                        <span className="font-semibold">Email:</span>{' '}
                        <a
                          href="mailto:info@vinylstatus.com"
                          className="text-black hover:text-blue-600 transition-colors duration-200"
                        >
                          info@vinylstatus.com
                        </a>
                      </p>
                    </div>
                  </div>
                );
              }

              if (section.title === 'Returns') {
                if (i === section.paragraphs.length - 1) {
                  return (
                    <div key={i} className="text-gray-500 text-sm leading-[22px] space-y-1 font-semibold">
                      <p dangerouslySetInnerHTML={{ __html: formattedPara }} />
                      <p className="font-extrabold text-[14px] mt-4 mb-5">Return Policy Highlights:</p>
                    </div>
                  );
                }
                return (
                  <p key={i} className="text-gray-500 text-sm leading-[22px] mb-3 font-semibold" dangerouslySetInnerHTML={{ __html: formattedPara }} />
                );
              }

              return (
                <p key={i} className="text-gray-500 text-sm leading-[22px] mb-3 font-semibold" dangerouslySetInnerHTML={{ __html: formattedPara }} />
              );
            })}

            {section.list && (
              <ul className="list-disc list-inside space-y-3">
                {section.list.map((item, i) => {
                  if (section.title === 'Returns') {
                    return (
                      <li key={i} className="text-gray-500 text-[15.5px] leading-[28px] font-semibold">
                        {item}
                      </li>
                    );
                  }

                  if (section.title === 'Shipping Policy') {
                    const [label, ...rest] = item.split(':');
                    const content = rest.join(':').trim();
                    return (
                      <li
                        key={i}
                        className="text-gray-500 text-sm leading-[22px] pl-1"
                        style={{ textIndent: '-1em', paddingLeft: '2em' }}
                      >
                        <span className="font-bold text-gray-600 text-[15px]">{label}:</span>{' '}
                        <span className="font-semibold">{content}</span>
                      </li>
                    );
                  }

                  const [title, ...rest] = item.split(':');
                  return (
                    <li key={i} className="text-gray-500 text-[15.5px] leading-[28px] font-semibold">
                      <span className="font-bold">{title}:</span>
                      {rest.length > 0 && <span>{rest.join(':')}</span>}
                    </li>
                  );
                })}
              </ul>
            )}

            <hr className="mt-6 border-gray-300" />
          </div>
        ))}
      </div>
    </div>
  );
}
