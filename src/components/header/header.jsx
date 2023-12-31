import React from 'react'
import Banner from '../banner/banner.jsx'
import ContentBlock from '../content-block/content-block.jsx'

const DEETS = {
  work: {
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fillRule="evenodd"
          d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z"
          clipRule="evenodd"
        />
        <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" />
      </svg>
    ),
    text: () => (
      <span>
        Available
      </span>
    ),
  },
  links: {
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
        <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
      </svg>
    ),
    text: () => (
      <a className="font-bold" href="/links">
        /links
      </a>
    ),
  },
  birthday: {
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M6.75.98l-.884.883a1.25 1.25 0 101.768 0L6.75.98zM13.25.98l-.884.883a1.25 1.25 0 101.768 0L13.25.98zM10 .98l.884.883a1.25 1.25 0 11-1.768 0L10 .98zM7.5 5.75a.75.75 0 00-1.5 0v.464c-1.179.305-2 1.39-2 2.622v.094c.1-.02.202-.038.306-.051A42.869 42.869 0 0110 8.5c1.93 0 3.83.129 5.694.379.104.013.206.03.306.051v-.094c0-1.232-.821-2.317-2-2.622V5.75a.75.75 0 00-1.5 0v.318a45.645 45.645 0 00-1.75-.062V5.75a.75.75 0 00-1.5 0v.256c-.586.01-1.17.03-1.75.062V5.75zM4.505 10.365A41.377 41.377 0 0110 10c1.863 0 3.697.124 5.495.365C16.967 10.562 18 11.838 18 13.28v.693a3.72 3.72 0 01-1.665-.393 5.222 5.222 0 00-4.67 0 3.722 3.722 0 01-3.33 0 5.222 5.222 0 00-4.67 0A3.72 3.72 0 012 13.972v-.693c0-1.441 1.033-2.716 2.505-2.914zM15.665 14.921a5.22 5.22 0 002.335.551V16.5a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 16.5v-1.028c.8 0 1.6-.183 2.335-.551a3.722 3.722 0 013.33 0c1.47.735 3.2.735 4.67 0a3.722 3.722 0 013.33 0z" />
      </svg>
    ),
    text: () => 'August 19th',
  },
  joined: {
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z" />
        <path
          fillRule="evenodd"
          d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
          clipRule="evenodd"
        />
      </svg>
    ),
    text: () => 'Joined Jan 2023',
  },
}

const LayoutHeader = ({ banner, character }) => {
  return (
    <header className="w-feature max-w-full mx-auto">
      <Banner {...banner} />
      {/* The header content wrapped in a grid wrapper */}
      <div className="w-content max-w-full mv-0 mx-auto grid gap-2 px-4">
        <div className="relative flex justify-end items-center min-h-half-avatar py-2">
          <img
            className="absolute top-0 transform bg-surface-4 -translate-y-1/2 left-0 rounded-full aspect-square w-avatar border-4 border-text-1"
            src={character?.image || '/media/image/headshot.jpeg'}
            alt="Jhey"
            width="200"
            height="200"
            loading="eager"
          />
          <a
            href="https://twitter.com/intent/follow?screen_name=jh3yy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:no-underline border-transparent focus:border-text-1 outline-transparent focus-visible:border-text-1 hover:border-text-1 border-4 rounded-full text-fluid--1 flex gap-x-1 items-center text-white bg-brand-fill px-3 py-1"
          >
            <span className="font-bold">Follow</span>
            <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24" role="img">
              <title>Twitter icon</title>
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
            </svg>
          </a>
        </div>
        {/* Actions Row [ Avatar + Follow RSS Button] */}
        <h1 className="text-fluid-3 flex gap-x-2 items-center font-bold">
          {character?.name || 'Jhey'}
          {character?.verified && (
            <span className="w-6 aspect-square inline-block">
              <svg
                viewBox="0 0 750 750"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="375" cy="375" r="310" fill="white" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M494.195 662.762C541.279 687.206 600.656 679.674 640.165 640.165C679.674 600.656 687.206 541.279 662.762 494.195C713.34 478.186 750 430.874 750 375C750 319.126 713.34 271.814 662.762 255.805C687.206 208.721 679.674 149.344 640.165 109.835C600.656 70.326 541.279 62.7937 494.195 87.2381C478.186 36.6595 430.874 0 375 0C319.126 0 271.814 36.6596 255.805 87.2381C208.721 62.7937 149.344 70.326 109.835 109.835C70.326 149.344 62.7937 208.721 87.2381 255.805C36.6596 271.814 0 319.126 0 375C0 430.874 36.6596 478.186 87.2381 494.195C62.7937 541.279 70.326 600.656 109.835 640.165C149.344 679.674 208.721 687.206 255.805 662.762C271.814 713.34 319.126 750 375 750C430.874 750 478.186 713.34 494.195 662.762ZM116 289.841C116 325.908 139.763 356.389 172.52 366.829C170.618 376.272 169.644 385.705 169.644 394.907H301.477V388.362H448.32V394.907H580.806C580.806 385.249 579.733 375.337 577.64 365.425C610.238 355.565 634 325.488 634 289.841C634 246.157 598.316 210.838 554.414 210.838C525.12 210.838 499.484 226.563 485.668 250.006C452.922 233.407 414.658 224.39 375.225 224.39C336.88 224.39 299.64 232.916 267.505 248.65C253.308 224.896 227.211 209 197.425 209C152.521 209 116 245.129 116 289.841ZM197.425 227.379C162.545 227.379 134.388 255.409 134.388 289.841C134.388 317.289 152.281 340.669 177.21 349.024C186.635 320.107 204.629 292.396 229.857 272.315C236.613 266.938 243.79 261.974 251.328 257.443C240.282 239.433 220.299 227.379 197.425 227.379ZM446.779 360.115H303.018C306.737 349.679 316.77 342.202 328.564 342.202H421.233C433.027 342.202 443.061 349.679 446.779 360.115ZM619.29 289.841C619.29 318.579 600.247 342.969 573.927 351.183C564.705 321.49 546.448 292.895 520.593 272.315C513.67 266.805 506.305 261.729 498.563 257.108C509.854 238.223 530.619 225.541 554.414 225.541C590.296 225.541 619.29 254.381 619.29 289.841ZM509.964 436.589C509.964 446.102 502.19 453.813 492.6 453.813C483.011 453.813 475.237 446.102 475.237 436.589C475.237 427.077 483.011 419.365 492.6 419.365C502.19 419.365 509.964 427.077 509.964 436.589ZM276.601 436.589C276.601 446.102 268.828 453.813 259.238 453.813C249.649 453.813 241.875 446.102 241.875 436.589C241.875 427.077 249.649 419.365 259.238 419.365C268.828 419.365 276.601 427.077 276.601 436.589ZM375.572 542C399.162 542 420.369 522.299 420.369 504.796C420.369 487.293 399.162 478.616 375.572 478.616C351.982 478.616 330.775 487.293 330.775 504.796C330.775 522.299 351.982 542 375.572 542Z"
                  fill="var(--brand-fill)"
                />
              </svg>
            </span>
          )}
        </h1>
        {/* Blurb */}
        <div className="leading-tight">
          <ContentBlock type="bio">
            {character?.bio || 'Where in the world is Jhey Tompkins?'}
          </ContentBlock>
        </div>
        {/* Details */}
        <span className="flex gap-x-4 items-center text-fluid--1 flex-wrap text-text-4">
          {Object.keys(DEETS).map((key) => {
            const Deet = DEETS[key]
            return (
              <span key={key} className="flex items-center gap-1">
                <Deet.icon />
                <span className="whitespace-nowrap">
                  <Deet.text />
                </span>
              </span>
            )
          })}
        </span>
        {/* Mailing list sign up */}
        <form
          className="my-6 grid gap-y-2 justify-center text-center"
          action="https://app.convertkit.com/forms/4960615/subscriptions"
          method="post"
        >
          <p>Keep up to date with my latest projects and adventures!</p>
          <div className="flex">
            <input className="p-2 px-4 flex-grow rounded-l-full" name="email_address" aria-label="Email Address" placeholder="Email Address" required="" type="email" />
            <button className="font-bold hover:no-underline border-transparent focus:border-text-1 outline-transparent focus-visible:border-text-1 hover:border-text-1 border-4 rounded-r-full text-fluid--1 flex gap-x-1 items-center text-white bg-brand-fill px-3 py-1">Subscribe!</button>
          </div>
          <p className="text-fluid--2 text-center text-text-4">No spam. Unsubscribe any time.</p>
        </form>
      </div>
    </header>
  )
}

export default LayoutHeader
