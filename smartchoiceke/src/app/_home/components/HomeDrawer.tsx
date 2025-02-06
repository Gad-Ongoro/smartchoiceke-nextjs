'use client';

import Link from 'next/link';
import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import WomanIcon from '@mui/icons-material/Woman';
import ManIcon from '@mui/icons-material/Man';
import { Button, Disclosure, DisclosureButton, DisclosurePanel, } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { TbLogout2 } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { enqueueSnackbar } from 'notistack';
import { useAppContext } from '@/context/AppContext';

const outfitShopping = [
  { gender: 'ladies', description: 'Ladies Outfits', href: '/outfits/ladies', icon: WomanIcon },
  { gender: 'gents', description: 'Laddies outfits', href: '/outfits/gents', icon: ManIcon },
]

const currencies = [
  { name: 'Kenyan Shilling', code: 'KES' },
  { name: 'United States Dollar', code: 'USD' },
]

export default function HomeDrawer() {
  const { auth, user_id, mobileMenuOpen, setMobileMenuOpen, currency, setCurrency } = useAppContext();

  return (
    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <TransitionChild>
                <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <span className="absolute -inset-2.5" />
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>
              </TransitionChild>
              <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                {/* <div className="px-4 sm:px-6">
                  <DialogTitle className="text-base font-semibold leading-6 text-gray-900">Panel title</DialogTitle>
                </div> */}

                {/* content start */}
                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                  <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm ">
                    <div className="flex items-center justify-between">
                      <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Smart Choice Kenya</span>
                        <p className='pacifico-regular text-3xl md:text-3xl font-bold'><i><span className='text-sky-700'>SmartChoice</span><span className='text-pink-700'>Ke</span></i></p>
                      </Link>
                    </div>
                    <div className="mt-6 flow-root">
                      <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                          <Disclosure as="div" className="-mx-3">
                            <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                              Outfits
                              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                            </DisclosureButton>
                            <DisclosurePanel className="mt-2 space-y-2">
                              {[...outfitShopping].map((item) => (
                                <Link
                                  key={item.gender}
                                  href={`/outfits/${item.gender}`}
                                  onClick={() => {
                                    setMobileMenuOpen(false);
                                  }}
                                  className="group relative flex items-center gap-x-4 rounded-lg p-1 text-sm hover:bg-gray-50"
                                >
                                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                    <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-sky-600" />
                                  </div>
                                  <div className="flex-auto">
                                    <p className="block font-semibold text-gray-900">
                                      {item.gender}
                                      <span className="absolute inset-0" />
                                    </p>
                                    <p className="mt-1 text-gray-600">{item.description}</p>
                                  </div>
                                </Link>
                              ))}
                            </DisclosurePanel>
                          </Disclosure>

                          <Link
                            href="/airbnbs"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            Airbnb Booking
                          </Link>
                          <Link
                            href="/cleaning"
                            onClick={() => setMobileMenuOpen(false)} 
                            className="-mx-3 block rounded-lg pb-3 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            Cleaning Services
                          </Link>

                          <Popover className="relative">
                            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 outline-none">
                              <span className='font-bold'><strong>Currency</strong></span> <span className='text-sky-700'>{currency}</span>
                              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                            </PopoverButton>

                            <PopoverPanel
                              transition
                              className="absolute -left-4 top-full z-10 mt-3 w-64 max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-sky-50">
                                {currencies.map((item) => (
                                  <p
                                    key={item.code}
                                    onClick={() => {
                                      setCurrency(item.code);
                                      enqueueSnackbar(`Currency set to ${item.code}`, { variant: 'success' });
                                      localStorage.setItem('currency', item.code);
                                      }
                                    }
                                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 cursor-pointer"
                                  >
                                    {item.code}
                                  </p>
                                ))}
                              </div>
                            </PopoverPanel>
                          </Popover>

                        </div>
                        {
                          !auth && (
                            <div className="py-6">
                              <Link
                                href="/auth/signin"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                Login
                              </Link>
                            </div>
                          )
                        }

                        {
                          auth && (
                            <div className='flex gap-x-1 items-center transition-all duration-300 hover:font-bold hover:text-emerald-600 hover:text-xl'>
                              <Link href="/clientdash/dashview">
                                <FaRegUser />
                              </Link>
                              <Link href={`/account/${user_id}/dashview/`} className="text-sm font-semibold text-gray-900">
                                Account
                              </Link>
                            </div>
                          )
                        }

                        {
                          auth && (
                            <div 
                              className='flex gap-x-1 mt-3 items-center transition-all duration-300 hover:font-bold hover:text-emerald-600 hover:text-xl'
                            >
                              <TbLogout2 
                                className='transition-all duration-400 cursor-pointer hover:text-green-500' 
                                size={20}
                              />
                              <Button type='button' className="text-sm font-semibold text-gray-900">
                                Logout
                              </Button>
                            </div>
                          )
                        }
                      </div>
                    </div>
                  </DialogPanel>
                  
                </div>

              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
};
