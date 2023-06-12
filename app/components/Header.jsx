import React from 'react'

const menu = [
  {
    title: "products",
    link: "/"
  },
  {
    title: "brands",
    link: "/"
  },
  {
    title: "blogs",
    link: "/"
  },
  {
    title: "contact",
    link: "/"
  },
]

const user = false;
function Header() {


  return (
    <div className='sticky top-0 left-0 right-0 bg-fff shadow-sm z-40'>
      <div className='h-16 container mx-auto flex justify-between items-center py-3'>
        <div className='flex items-center'>
          <div className='px-3 md:px-0'>
            <img src='/images/img/logo.svg' className='h-7 md:h-8' />
          </div>

          <div className='pl-10 hidden lg:block'>
            <ul className='flex'>
              {menu.map((item, index) => {
                return (
                  <li className='px-4 text-dark cursor-pointer hover:text-light transition-all duration-300'>{item.title}</li>
                )
              })}
            </ul>
          </div>
        </div>


        <div className='px-3 md:px-0 flex items-center'>

          <div className='hidden md:flex justify-between bg-fff border-solid border border-dark rounded-lg px-3 py-1 ml-6'>
            <input placeholder='search' className='bg-transparent placeholder:text-dark outline-none' />
            <button>
              <img src='/images/icons/search.svg' alt='' />
            </button>
          </div>

          <div className='px-4'>
            <img src='/images/icons/shopping-bag.svg' alt='' />
          </div>

          {(!user) ? (
            <>
              <button className='hidden sm:block bg-dark text-fff px-3 py-1 rounded-lg hover:bg-yellow hover:text-dark transition-all duration-300'>
                SIGN UP
              </button>

              <button className='sm:hidden bg-dark rounded-lg p-1 flex items-center justify-center'>
                <img alt='' src='/images/icons/login.svg' />
              </button>
            </>
          ) : (
            <div className='bg-dark rounded-[50%] p-1'>
              <div>
                <img alt='' src='/images/icons/user.svg' className='h-6 w-6' />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header