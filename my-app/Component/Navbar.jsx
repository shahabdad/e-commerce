export default function Navbar() {
  return (
    <nav className="w-full flex justify-around items-center text-gray-700 text-lg font-bold py-2 bg-[#ffffff29] fixed top-0 left-0 z-10 backdrop-blur-3xl">
      {/* left side */}
      <ul className="w-full flex  justify-between items-center gap-4">
        <li className="px-13 ">
             

          <a href="/" className="flex items-center gap-2">
  <h1 className="text-5xl  ml-49 font-bold">
    <span className="text-black">Re</span>
    <span className="text-orange-500">piit</span>
  </h1>
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
