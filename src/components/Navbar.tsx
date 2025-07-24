"use client"

import { useState } from "react"
import Link from "next/link"

export function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <header className="fixed top-5 left-0 right-0 z-50 bg-white border rounded-lg border-gray-100 w-[70%] mx-auto font-bold">
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                {/* Dapper Logo SVG */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="167" 
                  height="37" 
                  viewBox="0 0 167 37" 
                  fill="none"
                  className="h-8"
                >
                  <path d="M10.8057 0H0L4.9178 8.13558C7.3215 12.2974 12.6835 15.3736 17.486 15.3736V3.95196L10.8057 0Z" fill="#74F5A1"/>
                  <path d="M26.3732 10.1019H40.8L34.2445 20.9372C31.0388 26.4985 23.8999 30.6 17.4885 30.6V15.3736L26.3732 10.1019Z" fill="#74F5A1"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M62.1984 6H52.2002V30.0444H62.1984C65.9718 30.0464 68.9911 28.9462 71.2563 26.7438C73.5215 24.5414 74.6541 21.6223 74.6541 17.9866C74.6501 14.3449 73.5175 11.4368 71.2563 9.26209C68.9951 7.08733 65.9758 6 62.1984 6ZM66.9932 12.3996C68.0968 13.6787 68.6486 15.543 68.6486 17.9925H68.6516C68.6616 20.4401 68.1098 22.3093 66.9962 23.6003C65.8827 24.8913 64.2804 25.5368 62.1894 25.5368H57.9594V10.4809H62.1864C64.2874 10.4809 65.8897 11.1205 66.9932 12.3996Z" fill="#171717"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M87.4643 30.0503H92.872V30.0414C92.7609 29.3 92.6797 28.5527 92.6347 27.7995C92.5886 27.0561 92.5656 26.1665 92.5656 25.1305V19.5405C92.5656 17.1839 91.8946 15.4046 90.5527 14.2026C89.2108 13.0005 87.2209 12.3996 84.5832 12.3996C82.1918 12.3996 80.2691 12.9442 78.8151 14.0336C77.361 15.1229 76.5418 16.6442 76.3575 18.5975H81.8313C81.8394 18.2944 81.9098 17.9961 82.0384 17.7208C82.167 17.4455 82.3511 17.1989 82.5794 16.9961C83.1278 16.6031 83.791 16.3972 84.4686 16.4095C85.1462 16.4218 85.8013 16.6517 86.3347 17.0643C86.5698 17.3078 86.7517 17.5964 86.869 17.9121C86.9863 18.2279 87.0366 18.5642 87.0167 18.9V19.6087L82.1017 20.0802C79.9266 20.3027 78.2923 20.8512 77.2228 21.729C76.1532 22.6068 75.6185 23.8168 75.6185 25.3677C75.5896 26.0675 75.7224 26.7645 76.0065 27.4062C76.2907 28.0479 76.7189 28.6173 77.2588 29.0717C78.3504 29.993 79.8285 30.4536 81.6931 30.4536C82.9043 30.4883 84.1054 30.2275 85.1901 29.6944C86.1216 29.229 86.8637 28.463 87.2931 27.5237C87.2931 27.8588 87.3021 28.2146 87.3261 28.5853C87.3502 28.956 87.3952 29.4423 87.4643 30.0503ZM81.3691 25.7481C81.2682 25.5119 81.2229 25.2561 81.2365 25H81.2335C81.2185 24.7468 81.2653 24.4938 81.3698 24.2621C81.4743 24.0305 81.6336 23.8269 81.8343 23.6685C82.2329 23.366 82.9098 23.1584 83.8652 23.0457L87.0046 22.6751V23.5173C87.0244 23.9694 86.9447 24.4203 86.7709 24.8391C86.5972 25.2579 86.3336 25.6345 85.9983 25.943C85.2897 26.5627 84.3665 26.8888 83.4206 26.8535C82.8444 26.8872 82.2754 26.7134 81.8193 26.3642C81.624 26.195 81.4701 25.9844 81.3691 25.7481Z" fill="#171717"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M106.009 30.4536C104.899 30.4678 103.804 30.1904 102.837 29.65C101.931 29.158 101.198 28.4062 100.734 27.494V36.0496H95.026V12.8029H100.656V15.3977C101.13 14.4789 101.873 13.7224 102.789 13.2269C103.769 12.6711 104.883 12.3853 106.012 12.3996C108.31 12.3996 110.158 13.2309 111.559 14.8936C112.959 16.5562 113.659 18.7309 113.662 21.4177C113.662 24.1124 112.96 26.2871 111.559 27.9418C110.157 29.5966 108.308 30.4269 106.012 30.4329L106.009 30.4536ZM104.225 16.4089C103.714 16.3863 103.205 16.4861 102.741 16.7C102.278 16.9138 101.874 17.2351 101.563 17.6366C100.934 18.4591 100.62 19.5969 100.62 21.05V21.7914C100.62 23.2306 100.938 24.3585 101.575 25.175C101.907 25.5656 102.322 25.8786 102.791 26.0913C103.26 26.304 103.771 26.4111 104.287 26.4049C104.803 26.3986 105.312 26.2792 105.775 26.0552C106.239 25.8312 106.647 25.5083 106.968 25.1098C107.605 24.2439 107.923 23.0141 107.923 21.4207C107.923 19.8272 107.599 18.5926 106.95 17.7168C106.646 17.2927 106.239 16.9504 105.767 16.7209C105.295 16.4915 104.772 16.3822 104.246 16.403L104.225 16.4089Z" fill="#171717"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M122.969 29.65C123.94 30.193 125.04 30.4704 126.156 30.4536C128.452 30.4339 130.3 29.5966 131.702 27.9418C133.104 26.2871 133.805 24.1124 133.805 21.4177C133.803 18.7309 133.102 16.5562 131.702 14.8936C130.302 13.2309 128.454 12.3995 126.156 12.3995C125.022 12.3832 123.904 12.669 122.921 13.2269C122.005 13.7224 121.261 14.4789 120.787 15.3977V12.8029H115.158V36.0496H120.866V27.494C121.33 28.4062 122.063 29.158 122.969 29.65ZM122.898 16.6993C123.363 16.4855 123.872 16.3858 124.384 16.4089L124.39 16.403C124.915 16.3822 125.439 16.4915 125.911 16.7209C126.383 16.9504 126.79 17.2927 127.093 17.7167C127.743 18.5926 128.067 19.8272 128.067 21.4207C128.067 23.0141 127.749 24.2438 127.111 25.1098C126.79 25.5109 126.382 25.8361 125.917 26.0617C125.452 26.2874 124.942 26.4077 124.423 26.414C123.906 26.4202 123.393 26.3122 122.922 26.0979C122.451 25.8835 122.035 25.5682 121.704 25.175C121.067 24.3585 120.748 23.2306 120.748 21.7913V21.05C120.748 19.5968 121.072 18.4591 121.719 17.6366C122.029 17.2347 122.434 16.9131 122.898 16.6993Z" fill="#171717"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M147.237 24.4247H152.483C152.154 26.198 151.146 27.7781 149.668 28.8374C148.177 29.9129 146.307 30.4516 144.056 30.4536C141.324 30.4536 139.099 29.6282 137.383 27.9774C135.667 26.3266 134.809 24.143 134.809 21.4266C134.809 18.7101 135.662 16.5266 137.368 14.8757C139.075 13.2249 141.278 12.3996 143.977 12.3996C146.593 12.3996 148.675 13.2081 150.223 14.8253C151.771 16.4426 152.545 18.553 152.543 21.1567V22.6721H140.304C140.46 23.9295 140.86 24.8784 141.505 25.519C141.842 25.8443 142.243 26.0976 142.683 26.2629C143.124 26.4282 143.594 26.5021 144.065 26.4798C144.773 26.5026 145.473 26.3213 146.077 25.9579C146.633 25.5956 147.043 25.0534 147.237 24.4247ZM143.995 16.3407C144.435 16.3208 144.865 16.3923 145.275 16.551C145.687 16.7104 146.059 16.9541 146.369 17.2659C146.98 17.9203 147.305 18.7872 147.27 19.6769H140.415C140.619 18.5757 141.027 17.7444 141.64 17.1829C142.283 16.6128 143.133 16.3112 143.995 16.3407Z" fill="#171717"/>
                  <path d="M165.69 12.5686C165.482 12.536 165.239 12.536 164.938 12.536H164.947C163.794 12.5115 162.666 12.8662 161.739 13.5443C160.778 14.2927 160.075 15.3161 159.726 16.4742V12.8029H154.096V30.0503H159.786V22.5061C159.786 20.9996 160.195 19.8341 161.012 19.0008C161.839 18.1705 162.954 17.7553 164.356 17.7553C164.722 17.7553 165.052 17.7642 165.347 17.7879C165.642 17.8117 165.927 17.8442 166.2 17.8917V12.7021C166.039 12.6302 165.866 12.5851 165.69 12.5686Z" fill="#171717"/>
                </svg>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-gray-900 hover:text-orange-500 py-2 transition-colors"
                onClick={() => toggleDropdown('services')}
              >
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 w-80 bg-white border border-gray-200 rounded-lg shadow-lg mt-2 p-6 z-50">
                  <div className="grid grid-cols-1 gap-4">
                    <a href="/services/demand-generation" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <h3 className="font-semibold text-gray-900">Demand Generation</h3>
                      <p className="text-sm text-gray-600">Drive awareness and interest in your products and services.</p>
                    </a>
                    <a href="/services/marketing-automation" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <h3 className="font-semibold text-gray-900">Marketing Automation</h3>
                      <p className="text-sm text-gray-600">Streamline your marketing processes and increase efficiency.</p>
                    </a>
                    <a href="/services/content-marketing" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <h3 className="font-semibold text-gray-900">Content Marketing</h3>
                      <p className="text-sm text-gray-600">Create valuable content that attracts and engages your audience.</p>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Expertise Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-gray-900 hover:text-orange-500 py-2 transition-colors"
                onClick={() => toggleDropdown('expertise')}
              >
                Expertise
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'expertise' && (
                <div className="absolute top-full left-0 w-80 bg-white border border-gray-200 rounded-lg shadow-lg mt-2 p-6 z-50">
                  <div className="grid grid-cols-1 gap-4">
                    <a href="/expertise/b2b-saas" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <h3 className="font-semibold text-gray-900">B2B SaaS</h3>
                      <p className="text-sm text-gray-600">Hire an agency specialized in B2B SaaS</p>
                    </a>
                    <a href="/expertise/b2b-service" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <h3 className="font-semibold text-gray-900">B2B Service</h3>
                      <p className="text-sm text-gray-600">Hire an agency that knows how to market a Service business</p>
                    </a>
                    <a href="/expertise/b2b-hardware" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <h3 className="font-semibold text-gray-900">B2B Hardware</h3>
                      <p className="text-sm text-gray-600">Hire an agency that knows how to market your product</p>
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a href="/cases" className="text-gray-900 hover:text-orange-500 py-2 transition-colors">
              Cases
            </a>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-gray-900 hover:text-orange-500 py-2 transition-colors"
                onClick={() => toggleDropdown('resources')}
              >
                Resources
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 w-80 bg-white border border-gray-200 rounded-lg shadow-lg mt-2 p-6 z-50">
                  <div className="grid grid-cols-1 gap-4">
                    <a href="/blog" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <h3 className="font-semibold text-gray-900">Blog</h3>
                      <p className="text-sm text-gray-600">Read what&apos;s on our minds in B2B Marketing, Demand Generation, Growth Hacking and more.</p>
                    </a>
                    <a href="/newsletter" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <h3 className="font-semibold text-gray-900">Newsletter</h3>
                      <p className="text-sm text-gray-600">Subscribe to our newsletter and receive weekly growth tips.</p>
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a href="/about" className="text-gray-900 hover:text-orange-500 py-2 transition-colors">
              About
            </a>

            <a href="/careers" className="text-gray-900 hover:text-orange-500 py-2 transition-colors">
              Careers
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="/contact"
              className="flex items-center gap-3  rounded-xl px-4 py-2 "
              style={{ width: "fit-content" }}
            >
              <span className=" text-gray-900 font-bold">Talk to us</span>
              <span className="flex items-center justify-center w-10 h-10 rounded-md bg-[#74F5A1]">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  stroke="#171717"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M7 15L15 7" />
                  <path d="M8 7h7v7" />
                </svg>
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button className="text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
} 