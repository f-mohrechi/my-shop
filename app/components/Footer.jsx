'use client';
import React from 'react';
import { useState } from 'react';

const social = [
  {
    icon: "/images/icons/facebook.svg",
    link: "/"
  },
  {
    icon: "/images/icons/instagram.svg",
    link: "/"
  },
  {
    icon: "/images/icons/twitter.svg",
    link: "/"
  },
  {
    icon: "/images/icons/mail.svg",
    link: "/"
  },
]

const columns = [
  {
    title: "Shop",
    id: 1,
    items: [
      {
        name: "My Account",
        link: "/"
      },
      {
        name: "Login",
        link: "/"
      },
      {
        name: "Wishlist",
        link: "/"
      },
      {
        name: "Cart",
        link: "/"
      },
    ]
  },
  {
    title: "Information",
    id: 2,
    items: [
      {
        name: "Shipping Policy",
        link: "/"
      },
      {
        name: "Returns & Refunds",
        link: "/"
      },
      {
        name: "Cookies Policy",
        link: "/"
      },
      {
        name: "Frequently Asked",
        link: "/"
      },
    ]
  },
  {
    title: "Company",
    id: 3,
    items: [
      {
        name: "About Us",
        link: "/"
      },
      {
        name: "Privacy & Policy",
        link: "/"
      },
      {
        name: "Terms & Conditions",
        link: "/"
      },
      {
        name: "Contact Us",
        link: "/"
      },
    ]
  },
]

function Footer() {
  const [isActive, setIsActive] = useState(0)

  return (
    <div className='bg-zinc-300 py-10 sm:py-14 md:py-20'>
      <div className='container mx-auto px-5 xl:px-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-x-8'>
          <div className='lg:col-span-3'>
            <div className='flex items-center'>
              <img src='/images/img/logo.svg' className=' w-20' />
            </div>

            <div className='py-8'>
              <p className='text-dark text-xs sm:text-lg max-w-sm'>tempor incididunt ut labore et dolore magna tempor incididunt ut labore et</p>
            </div>

            <div className='flex items-center'>
              {social.map((item, index) => {
                return (
                  <div className='bg-dark rounded-full p-2 flex justify-center items-center mr-1 sm:mr-5'>
                    <a href={item.link}>
                      <img className='w-3 h-3 sm:w-5 sm:h-5' src={item.icon} />
                    </a>
                  </div>
                )
              })}
            </div>
          </div>

          {columns.map((item, index) => {
            return (
              <div className='my-4 lg:my-0'>
                <div className='block sm:hidden'>
                  <p className='font-semibold text-xs sm:text-base text-dark cursor-pointer'
                    onClick={() => setIsActive(isActive === item.id ? 0 : item.id)}>
                    {item.title}
                  </p>
                </div>
                <div className='sm:block hidden'>
                  <p className='font-semibold text-xs sm:text-base text-dark'>{item.title}</p>
                </div>

                <div className='block sm:hidden'>
                  {item.id === isActive && (
                    <div className='pt-2'>
                      {item.items.map((item, index) => {
                        return (
                          <div className='py-2'>
                            <a href={item.link} className='text-gray-600 text-xs sm:text-sm'>{item.name}</a>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
                <div className='sm:block hidden'>
                  <div className='pt-2'>
                    {item.items.map((item, index) => {
                      return (
                        <div className='py-2'>
                          <a href={item.link} className='text-gray-600 text-xs sm:text-sm'>{item.name}</a>
                        </div>
                      )
                    })}
                  </div>
                </div>

              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Footer