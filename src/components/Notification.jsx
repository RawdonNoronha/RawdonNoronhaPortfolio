import React from 'react'

function closeNotification() {
    const element = document.getElementById('notification-section');
    element.classList.add('hidden');
}

function Notification() {
  return (
    <div className='flex justify-center bg-gradient-to-r animate-pulse from-cyan-500 to-blue-500 text-white p-1 space-x-1' id='notification-section'>
      <button className='rounded-md' onClick={() => closeNotification()} type='button' title='close-notification'><svg viewBox="0 0 24 24" width='15' height='15' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_429_11083)"> <path d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11083"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg></button>
      <p className=''>Note: This website is still in Beta testing.</p>
    </div>
  )
}

export default Notification
