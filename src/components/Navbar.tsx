/* eslint-disable @next/next/no-img-element */
// src/components/Navbar.tsx

'use client';

import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Container from '@/components/Container';
import { navigation } from '@/data';

function classNames(...classes: (string | false | undefined | null)[]) {
  return classes.filter(Boolean).join(' ');
}

function Navigation({
  items,
  itemClassName,
}: {
  items: typeof navigation;
  itemClassName?: string;
}) {
  return (
    <>
      {items.map((item) => (
        <a key={item.name} href={item.href} className={itemClassName}>
          {item.name}
        </a>
      ))}
    </>
  );
}

type MobileNavigationProps = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function MobileNavigation({
  mobileMenuOpen,
  setMobileMenuOpen,
}: MobileNavigationProps) {
  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-50" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-base1/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Ctrl-F Plus</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <Navigation
                items={navigation}
                itemClassName={
                  '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-base1 hover:bg-gray-50'
                }
              />
            </div>
            <div className="py-6">
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-base1 hover:bg-gray-50"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/links" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="/TailwindLogo.svg" alt="" />
          </a>
        </div>

        {/* Hamburger Menu */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex lg:gap-x-12">
          <Navigation
            items={navigation}
            // itemClassName={'text-sm font-semibold leading-6 text-base1'}
            itemClassName={'text-sm font-semibold leading-6 text-glacier-950'}
          />
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-glacier-950"
          >
            Log in
          </a>
        </div>
      </nav>

      <MobileNavigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
}

export default Navbar;
