import React from "react";

function contact() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4 text-center">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-semibold mb-1">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400" />
          </div>
          <div>
            <label htmlFor="email" className="block font-semibold mb-1">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400" />
          </div>
          <div>
            <label htmlFor="message" className="block font-semibold mb-1">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full bg-gray-100 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition-colors duration-300 ease-in-out">Send Message</button>
        </form>
      </div>
      <div className="mt-8 text-center">
        <p className="text-gray-600">Or reach us at <span className="font-semibold">contact@example.com</span></p>
        <p className="text-gray-600">123 Street, City, Country</p>
      </div>
      <div className="mt-8 flex space-x-4">
        <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors duration-300 ease-in-out">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3 14h-2v-2c0-.61-.39-1-1-1s-1 .39-1 1v2H9v-5h2l.17-2h-2v-1.5c0-1.58 1.08-2.5 2.5-2.5s2.5.92 2.5 2.5V10h-1.91c-.27 0-.53.12-.71.33L12 11l-1.38-1.67c-.18-.21-.44-.33-.71-.33H8v1h2l.17 2H8v5H5v-3c0-.55.45-1 1-1h1v-1.17c0-1.28 1.17-2.83 3.5-2.83s3.5 1.55 3.5 2.83V15h1c.55 0 1 .45 1 1v3z"/>
          </svg>
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors duration-300 ease-in-out">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2 15.38c-.34.18-.72.28-1.12.28-.38 0-.74-.09-1.08-.25-.08-.03-.16-.05-.25-.05-.34 0-.66.13-.89.36l-2.77 2.77-.02-.01c-.24.24-.64.24-.89 0s-.24-.65 0-.89l2.77-2.77c.23-.23.36-.55.36-.89 0-.09-.02-.17-.05-.25-.15-.34-.24-.7-.24-1.08 0-.39.1-.77.28-1.11.26-.45.64-.82 1.1-1.08.17-.1.35-.17.54-.22.12-.03.24-.04.36-.04.49 0 .97.19 1.32.54.73.73.73 1.94 0 2.67zm1.3-4.28c-.08-.24-.17-.48-.29-.7-.05-.08-.11-.15-.17-.22-.07-.08-.14-.15-.22-.21-.2-.17-.42-.3-.66-.4-.5-.19-1.04-.29-1.6-.29-.57 0-1.1.1-1.6.3-.25.1-.49.23-.7.4-.08.06-.15.13-.22.21-.06.08-.12.15-.17.23-.11.22-.21.45-.3.7-.1.25-.18.51-.24.78-.06.26-.1.53-.1.8 0 .27.04.54.1.8.06.26.15.49.24.72.09.23.19.46.3.68.05.09.11.17.17.25.07.08.14.16.22.22.2.15.42.27.66.36.5.18 1.03.28 1.6.28.57 0 1.1-.1 1.6-.29.25-.1.49-.23.7-.4.08-.06.15-.13.22-.21.06-.08.12-.15.17-.23.11-.22.21-.45.29-.7.08-.26.14-.53.18-.8.05-.27.07-.54.07-.8 0-.26-.02-.53-.07-.79zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
          </svg>
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors duration-300 ease-in-out">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm2-12h-4v6l4.75 2.85.75-1.23-4-2.37z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default contact;
