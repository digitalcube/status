/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */

import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'

const navigation = [
  { name: 'System Status', href: '/', current: true },
  { name: 'Changelog', href: '/updates', current: false },
  {
    name: 'getshifter.io',
    href: 'https://www.getshifter.io/',
    current: false,
    target: '_blank',
  },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const router = useRouter()

  return (
    <Disclosure
      as="nav"
      className="container mx-auto w-full px-6 py-6 lg:w-5/6"
    >
      {({ open }) => (
        <>
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
              <div className="flex flex-shrink-0 items-center">
                <a className="lg:hidden" href="/">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="/shifter.svg"
                    alt="Shifter"
                  />
                </a>
                <a href="/">
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="/shifter.svg"
                    alt="Shifter"
                  />
                </a>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <div
                      className={classNames(
                        item.name == 'getshifter.io'
                          ? 'bg-purple-primary text-white border border-white'
                          : 'bg-white',
                        'text-md rounded-md py-2.5'
                      )}
                    >
                      <a
                        key={item.name}
                        href={item.href}
                        target={item.target}
                        className={classNames(
                          router.pathname == `${item.href}`
                            ? 'text-purple-primary'
                            : 'hover:text-purple-500 hover:bg-white hover:border-2',
                          'text-md rounded-md px-3 py-3 font-bold border-2 border-white'
                        )}
                        aria-current={
                          router.pathname == `${item.href}` ? 'page' : undefined
                        }
                      >
                        {item.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    router.pathname == `${item.href}`
                      ? 'bg-purple-primary text-white'
                      : 'text-gray-500 hover:text-purple-primary',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
