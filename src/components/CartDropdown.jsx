import { Fragment } from 'react';
import { Link } from 'react-router';
import { Dialog, Transition, TransitionChild, DialogPanel } from '@headlessui/react';
import { XMarkIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

function CartDropdown({ isOpen, setIsOpen }) {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setIsOpen}>
        <TransitionChild
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-white/30 backdrop-blur-md" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <TransitionChild
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    {/* Header */}
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <h2 className="text-2xl font-bold text-flores-primary font-heading">Shopping Cart</h2>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-flores-primary hover:text-flores-primary/80"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      {/* Cart Items */}
                      <div className="mt-8">
                        {cartItems.length === 0 ? (
                          <div className="flex flex-col items-center justify-center py-12">
                            <ShoppingBagIcon className="h-24 w-24 text-gray-300 mb-4" />
                            <p className="text-lg text-gray-500 font-body">Your cart is empty</p>
                            <Link
                              to="/shop"
                              onClick={() => setIsOpen(false)}
                              className="mt-6 bg-flores-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-flores-primary/90 transition-colors"
                            >
                              Continue Shopping
                            </Link>
                          </div>
                        ) : (
                          <div className="flow-root">
                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                              {cartItems.map((item) => (
                                <li key={item.id} className="flex py-6">
                                  {/* Product Image */}
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md bg-[#D4E8E8]">
                                    <img
                                      src={item.image}
                                      alt={`${item.title} ${item.subtitle}`}
                                      className="h-full w-full object-contain p-2"
                                    />
                                  </div>

                                  {/* Product Details */}
                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-flores-primary">
                                        <h3 className="font-heading">
                                          <Link
                                            to={`/shop/${item.id}`}
                                            onClick={() => setIsOpen(false)}
                                            className="hover:text-flores-accent"
                                          >
                                            {item.title}
                                          </Link>
                                        </h3>
                                        <p className="ml-4 font-heading">${(item.price * item.quantity).toFixed(2)}</p>
                                      </div>
                                      <p className="mt-1 text-sm text-flores-primary/70 font-body">{item.subtitle}</p>
                                    </div>

                                    {/* Quantity Controls */}
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <div className="flex items-center gap-2">
                                        <button
                                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                          className="p-1 rounded-md border border-flores-primary text-flores-primary hover:bg-flores-primary hover:text-white transition-colors"
                                          aria-label="Decrease quantity"
                                        >
                                          <Minus size={14} />
                                        </button>
                                        <span className="text-flores-primary font-semibold w-8 text-center">
                                          {item.quantity}
                                        </span>
                                        <button
                                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                          className="p-1 rounded-md border border-flores-primary text-flores-primary hover:bg-flores-primary hover:text-white transition-colors"
                                          aria-label="Increase quantity"
                                        >
                                          <Plus size={14} />
                                        </button>
                                      </div>

                                      <div className="flex">
                                        <button
                                          type="button"
                                          onClick={() => removeFromCart(item.id)}
                                          className="font-medium text-red-600 hover:text-red-500 flex items-center gap-1"
                                        >
                                          <Trash2 size={16} />
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Footer with Total and Checkout */}
                    {cartItems.length > 0 && (
                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-xl font-bold text-flores-primary font-heading mb-6">
                          <p>Subtotal</p>
                          <p>${getCartTotal().toFixed(2)}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500 font-body mb-6">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="space-y-3">
                          <button
                            className="w-full bg-flores-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-flores-primary/90 transition-colors"
                            onClick={() => {
                              setIsOpen(false);
                              // Add checkout logic here
                              console.log('Proceed to checkout');
                            }}
                          >
                            Checkout
                          </button>
                          <Link
                            to="/shop"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center bg-[#D4E8E8] text-flores-primary px-6 py-3 rounded-lg font-semibold hover:bg-[#c0dada] transition-colors"
                          >
                            Continue Shopping
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default CartDropdown;
