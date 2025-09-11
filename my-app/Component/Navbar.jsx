export default function Navbar() {
  return (
    <nav className="w-full flex justify-around items-center text-gray-700 text-lg font-bold py-2 bg-[#ffffff29] fixed top-0 left-0 z-10 backdrop-blur-3xl">
      {/* left side */}
      <ul className="w-full flex  justify-between items-center gap-4">
        <li className="px-13 ">
          <a href="/">
            <img
              className="max-w-[200px]  h-30 ml-49   rounded-full  wi"
              // src="data:image/jpeg;base64,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"
             src="images.png"
              alt="Logo"
            />
          </a>
        </li>
        <ul className="w-full flex justify-center items-center gap-6">  
        <li className="font-['Lato'] cursor-pointer">Men</li>
        <li className="font-['Lato'] cursor-pointer">Women</li>
        <li className="font-['Lato'] cursor-pointer">Boys</li>
        <li className="font-['Lato'] cursor-pointer">Girls</li>
        </ul>
      </ul>

      {/* right side */}
      <ul className="w-full flex justify-center items-center gap-4">
        {/* search box */}
        <li className="font-['Lato'] flex justify-center items-center gap-2 py-2 px-6 bg-blue-50 rounded-lg shadow-md">
          <input
            className="outline-none bg-transparent"
            type="text"
            placeholder="Search"
          />
          {/* search icon */} 
          <svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
            <path d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z"></path>
          </svg>
        </li>

        {/* Heart Icon */}
        <li>
          <svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path>
          </svg>
        </li>

        {/* Basket Icon */}
        <li>
          <a className="relative " href="/basket">
            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1015.66 284a31.82 31.82 0 0 0-25.998-13.502H310.526l-51.408-177.28c-20.16-69.808-68.065-77.344-87.713-77.344H34.333c-17.569 0-31.777 14.224-31.777 31.776S16.78 79.425 34.332 79.425h137.056c4.336 0 17.568 0 26.593 31.184l176.848 649.936c3.84 13.712 16.336 23.183 30.591 23.183h431.968c13.409 0 25.376-8.4 29.905-21.024l152.256-449.68c3.504-9.744 2.048-20.592-3.888-29.024zM815.026 720.194H429.539L328.387 334.066h616.096zM752.003 848.13c-44.192 0-80 35.808-80 80s35.808 80 80 80 80-35.808 80-80-35.808-80-80-80zm-288 0c-44.192 0-80 35.808-80 80s35.808 80 80 80 80-35.808 80-80-35.808-80-80-80z"></path>
            </svg>
            <span className="w-5 h-5 flex font-semibold items-center justify-center text-white text-xs -top-3 -right-3 bg-rose-500 absolute rounded-full">
              1
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
