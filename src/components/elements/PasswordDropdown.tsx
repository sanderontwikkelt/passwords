import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const EditInactiveIcon = (props: any) => {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 13V16H7L16 7L13 4L4 13Z" fill="#000" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
};

const EditActiveIcon = (props: any) => {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 13V16H7L16 7L13 4L4 13Z" fill="#8B5CF6" stroke="#fff" strokeWidth="2" />
    </svg>
  );
};

const DuplicateInactiveIcon = (props: any) => {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4H12V12H4V4Z" fill="#000" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 8H16V16H8V8Z" fill="#000" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
};

const DuplicateActiveIcon = (props: any) => {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4H12V12H4V4Z" fill="#8B5CF6" stroke="#fff" strokeWidth="2" />
      <path d="M8 8H16V16H8V8Z" fill="#8B5CF6" stroke="#fff" strokeWidth="2" />
    </svg>
  );
};

const DeleteInactiveIcon = (props: any) => {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="6" width="10" height="10" fill="#000" stroke="#A78BFA" strokeWidth="2" />
      <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
};

const DeleteActiveIcon = (props: any) => {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="6" width="10" height="10" fill="#8B5CF6" stroke="#fff" strokeWidth="2" />
      <path d="M3 6H17" stroke="#fff" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#fff" strokeWidth="2" />
    </svg>
  );
};

const EllipsisIcon = (props: any) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...props} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
        fill="white"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
        fill="white"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
        fill="white"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Dropdown = ({ onSelect }: { onSelect: (value: 'edit' | 'duplicate' | 'delete') => void }) => {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md p-2 bg-white bg-opacity-10 hover:bg-opacity-20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <EllipsisIcon aria-hidden="true" />
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
          <Menu.Items className="absolute z-50 right-0 mt-2 w-56 origin-top-right rounded-md bg-main shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => onSelect('edit')}
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-white'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <EditActiveIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                    ) : (
                      <EditInactiveIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                    )}
                    Edit
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => onSelect('duplicate')}
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-white'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <DuplicateActiveIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                    ) : (
                      <DuplicateInactiveIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                    )}
                    Duplicate
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => onSelect('delete')}
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-white'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <DeleteActiveIcon className="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" />
                    ) : (
                      <DeleteInactiveIcon className="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" />
                    )}
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Dropdown;
