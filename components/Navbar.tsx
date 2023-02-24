import React, { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
import MenuBuscarModal from './MenuBuscarModal'



function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}



const Navbar = () => {

  const [navbar, setNavbar] = useState(false);

  const [mostrarMenuBuscar, setMenuBuscar] = useState(false);

  const handleOnClose = () => setMenuBuscar(false);

  return (
   <div className='relative z-10 shadow-md'>
      <nav className='shadow-md w-full p-2 flex flex-row items-center justify-around'>
        <img className='h-18 w-20  hidden' src='/Logo-AdkiereBienesRaices.svg' alt="Logo"/>
        <div className="md:hidden">
                <button className="flex align-top justify-center" onClick={() => setNavbar(!navbar)}>
                  {navbar ? (<XMarkIcon className="-mr-1 ml-2 h-6 w-6"></XMarkIcon>):(<Bars3Icon className="-mr-1 ml-2 h-5 w-5"></Bars3Icon>)}
                </button>
        </div>
        <img className='h-18 w-20' src='/Logo-AdkiereBienesRaices.svg' alt="Logo" />
        <div className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:bg-transparent bg-azulSecundario md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${navbar ? 'top-20 ':'top-[-490px]'}`}>
        <div
              className={`md:justify-self-center flex flex-col items-start pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
        <button className='btnMenu text-blanco md:text-negro'>
              Inicio
            </button>

            {/* DROPDOWN VENTAS */}

           <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="btnMenu inline-flex w-full justify-center  text-blanco md:text-negro">
                  Venta
                  <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
              </div>

              <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-20 z-10 mt-2 w-56 origin-top-right rounded-md bg-blanco shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="Casa"
                  className={classNames(
                    active ? 'bg-azulTerciario text-white' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Casas en Venta
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="Apartamento"
                  className={classNames(
                    active ? 'bg-azulTerciario text-white' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Apartamentos en Venta
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="Edificio"
                  className={classNames(
                    active ? 'bg-azulTerciario text-white' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Edificios en Venta
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="Terreno"
                  className={classNames(
                    active ? 'bg-azulTerciario text-white' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Terrenos en Venta
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
            </Menu>

            {/* DROPDOWN RENTA */}

            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="btnMenu inline-flex w-full justify-center  text-blanco md:text-negro">
                  Renta
                  <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
              </div>

              <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-20 z-10 mt-2 w-56 origin-top-right rounded-md bg-blanco shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="Casa"
                  className={classNames(
                    active ? 'bg-azulTerciario text-white' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Casas en Renta
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="Apartamento"
                  className={classNames(
                    active ? 'bg-azulTerciario text-white' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Apartamentos en Renta
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="Edificio"
                  className={classNames(
                    active ? 'bg-azulTerciario text-white' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Edificios en Renta
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="Terreno"
                  className={classNames(
                    active ? 'bg-azulTerciario text-white' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Terrenos en Renta
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
            </Menu>
            
            <button className='btnMenu  text-blanco md:text-negro'>
              Contactenos
            </button>

            <button className='btnMenu  text-blanco md:text-negro'>
              Acerca de nosotros
            </button>  
        </div>
        </div>

          {/* BUSCADOR  */}

        <div>
          <button className='btnMenu' onClick={()=> setMenuBuscar(true)}>
            <MagnifyingGlassIcon className='h-8 w-8'></MagnifyingGlassIcon>
          </button>
        </div>
        
      </nav>

      <MenuBuscarModal visible={mostrarMenuBuscar} onClose={handleOnClose}></MenuBuscarModal>
    </div>
  )
}

export default Navbar
