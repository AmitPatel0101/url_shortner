import { useState } from "react";
import axios from "axios";
import { Link, Copy, Globe, ExternalLink, Menu, X } from "lucide-react";

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const shortenUrl = async () => {
    if (!longUrl) return;

    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/shorten", { url: longUrl });
      setShortUrl(response.data.short_url);
    } catch (error) {
      console.error("Error shortening URL:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link className="text-blue-600 h-8 w-8" />
                <span className="ml-2 text-xl font-bold text-gray-800">LinkSnip</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#" className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Home
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Features
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Pricing
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Analytics
                </a>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                Sign Up
              </button>
              <button className="ml-4 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800">
                Login
              </button>
              <a href="https://github.com/AmitPatel0101" target="_blank" rel="noopener noreferrer">
                <button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.153-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.529 2.34 1.087 2.91.831.092-.647.35-1.087.637-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.983 1.03-2.68-.104-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.551 9.551 0 0112 6.8c.85.004 1.705.115 2.503.34 1.908-1.294 2.747-1.025 2.747-1.025.546 1.378.204 2.397.1 2.65.64.697 1.03 1.59 1.03 2.68 0 3.842-2.338 4.687-4.566 4.936.36.31.678.924.678 1.862 0 1.344-.012 2.425-.012 2.753 0 .268.18.58.688.48A10.014 10.014 0 0022 12c0-5.523-4.477-10-10-10z"></path>
                  </svg>
                  GitHub
                </button>
              </a>


            </div>
            <div className="flex items-center sm:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a href="#" className="bg-blue-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                Home
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                Features
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                Pricing
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                Analytics
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium w-full">
                  Sign Up
                </button>
              </div>
              <div className="mt-3 flex items-center px-4">
                <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 w-full text-center">
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Shorten Your Links
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Make your URLs more manageable with our powerful link shortening service.
          </p>
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Globe className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Enter your long URL here..."
                  className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={longUrl}
                  onChange={(e) => setLongUrl(e.target.value)}
                />
              </div>
              <button
                className={`flex justify-center items-center px-6 py-4 border border-transparent text-base font-medium rounded-lg text-white ${isLoading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200`}
                onClick={shortenUrl}
                disabled={isLoading || !longUrl}
              >
                {isLoading ? (
                  <span className="inline-block animate-pulse">Processing...</span>
                ) : (
                  <>
                    <Link className="mr-2 h-5 w-5" />
                    Shorten URL
                  </>
                )}
              </button>
            </div>

            {shortUrl && (
              <div className="mt-8 border-t border-gray-200 pt-8">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h2 className="text-lg font-medium text-blue-800 mb-2">Your shortened link is ready!</h2>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0">
                    <div className="flex-grow p-3 bg-white rounded-lg border border-blue-100 flex items-center">
                      <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 truncate flex-grow">
                        {shortUrl}
                      </a>
                      <ExternalLink className="h-5 w-5 text-gray-400 ml-2 flex-shrink-0" />
                    </div>
                    <button
                      onClick={copyToClipboard}
                      className="sm:ml-4 flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <Copy className="mr-2 h-5 w-5" />
                      {isCopied ? "Copied!" : "Copy URL"}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Link className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Fast Link Shortening</h3>
              <p className="mt-2 text-gray-500">Create shortened links in seconds with our lightning-fast processing system.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Detailed Analytics</h3>
              <p className="mt-2 text-gray-500">Track clicks and viewer demographics with our comprehensive analytics dashboard.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Secure Links</h3>
              <p className="mt-2 text-gray-500">All links are secured with SSL encryption and protected against malicious redirects.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white mt-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center">
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-500 hover:text-gray-900">About</a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-500 hover:text-gray-900">Blog</a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-500 hover:text-gray-900">Privacy</a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-500 hover:text-gray-900">Terms</a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-500 hover:text-gray-900">Contact</a>
            </div>
          </nav>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2025 LinkSnip. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;