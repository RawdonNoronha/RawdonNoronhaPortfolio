import React from 'react'


// import "./src/App.css";
const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'About', href: '#', current: false },
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

// function OpenMenu(){
//     document.getElementById("sideNavBar").style.width="250px";
//     document.getElementById("sideNavBar").style.overflow="auto";
//     document.getElementById("sideNavBar").style.backgroundColor="#111";
//     document.getElementById("main").style.marginLeft = "250px";
//     // document.getElementById("main").style.marginRight = "-250px";
//     document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
// }

function TopBar() {
  return (
    <div className='bg-slate-100'>
        <div className='mx-auto max-w-7xl '>
            <div className='flex h-16'>
                <div className='flex flex-none w-1/6  justify-center items-center lg:hidden xl:hidden'>
                    <div className='px-3 py-2 transition ease-in-out rounded-full  align-middle hover:bg-white'>
                        <button type='button' title='side-bar-menu'>
                            <i className="fi fi-ss-menu-burger"></i>
                        </button>
                    </div>
                </div>
                <div className='flex-auto w-3/5 flex justify-center items-center lg:justify-start'>
                    <div className='flex space-x-4'>
                        <p className="pacifico-regular text-black text-3xl">Rawdon Noronha</p>
                        <div className='flex space-x-4'>
                            <div className=' justify-center items-center hidden  lg:flex'>
                                {navigation.map((item) => (
                                <a key={item.name} href={item.href}
                                    className={classNames(
                                    item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white',
                                    'rounded-md px-3 py-2 text-sm font-medium'
                                    )}>
                                    {item.name}
                                </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-auto items-center justify-center lg:justify-end sm:w-1/6 md:1/6'>
                    <div>
                        <button className='' title='light-dark-mode'>
                            <i className="fi fi-ss-brightness animate-bounce" width="40" heigth="40"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    // <div className="bg-gray-200">
    //     <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8" id='main'>
    //         <div className="relative flex flex-auto h-16 items-center justify-between">
    //             <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    //                 {/* Mobile menu button */}
    //                 <div className="px-3 py-2 rounded-md flex items-center justify-center hover:bg-white" onClick={() => OpenMenu()}>
    //                     <button>
    //                         <i className="fi fi-ss-menu-burger"></i>
    //                     </button>
    //                 </div>
    //             </div>
    //             <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
    //                 <div className="flex flex-shrink-0 items-center">
    //                     <h4 className="topBarName text-black text-lg">Rawdon Noronha</h4>
    //                 </div>
    //                 <div className="hidden sm:ml-6 sm:block">
    //                     <div className=" bg-black sm:bg-gray-200 sm:flex sm:space-x-4" id='sideNavBar'>
    //                         {navigation.map((item) => (
    //                         <a key={item.name} href={item.href}
    //                             className={classNames(
    //                             item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white',
    //                             'rounded-md px-3 py-2 text-sm font-medium'
    //                             )}>
    //                             {item.name}
    //                         </a>
    //                         ))}
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className='hover:bg-white flex sm:justify-end px-3 py-2 rounded-md'>
    //                 <button className=''>
    //                     <i className="fi fi-ss-brightness animate-bounce" width="40" heigth="40"></i>
    //                 </button>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  )
}

export default TopBar
