'use client';

import { useState } from 'react';

import HeaderMobileButton from './HeaderMobileButton';
import MobileMenu from './MobileMenu';

const MobileMenuController = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HeaderMobileButton isOpen={isOpen} onOpen={() => setIsOpen(true)} />

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default MobileMenuController;
