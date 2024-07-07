import React from 'react'

function closeNotification() {
    const element = document.getElementById('notification-section');
    element.classList.add('hidden');
}

function Notification() {
  return (
    <div className='flex justify-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white p-1 space-x-1 bg-[length:200%_200%] animate-gradient-move' id='notification-section'>
      <button className='rounded-md' onClick={() => closeNotification()} type='button' title='close-notification'>
        <svg className='size-3.5 fill-black dark:fill-white' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
          <path d="M 4.2382812 2.9882812 A 1.250125 1.250125 0 0 0 3.3671875 5.1347656 L 10.232422 12 L 3.3613281 18.869141 A 1.2512475 1.2512475 0 1 0 5.1308594 20.638672 L 12 13.767578 L 18.865234 20.632812 A 1.250125 1.250125 0 1 0 20.632812 18.865234 L 13.767578 12 L 20.625 5.1425781 A 1.250125 1.250125 0 1 0 18.857422 3.375 L 12 10.232422 L 5.1347656 3.3671875 A 1.250125 1.250125 0 0 0 4.2382812 2.9882812 z"></path>
        </svg>
      </button>
      <p className='text-black dark:text-white'>Note: This website is still in Beta testing.</p>
    </div>
  )
}

export default Notification
