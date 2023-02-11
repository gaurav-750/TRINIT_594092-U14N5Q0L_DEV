import React from 'react';
import("./signIn.css");

const SignIn = () => {
  return (
    // <div>
        
        <div className='flex items-center justify-center min-w-screen min-h-screen p-10 bg-black-500 text-black-500 text-center overflow-hidden'>
            <div className="relative w-full h-full max-w-md md:h-auto">
                {/* <div className="relative bg-white rounded-lg shadow dark:bg-gray-600 login-box "> */}
                <div className="relative bg-white rounded-lg shadow login-box text-black ">
                    {/* <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-black-500" data-modal-hide="authentication-modal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button> */}
                    <div className="px-6 py-6 lg:px-8">
                        <h3 className="mb-4 text-4xl font-medium text-black-500 dark:text-black-500">Sign In</h3>
                        <form className="space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-500 ">Your email</label>
                                {/* <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black-500" placeholder="name@company.com" required /> */}
                                <input type="email" name="email" id="email" className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-black" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-500 ">Your password</label>
                                {/* <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black-500" required /> */}
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" required />
                            </div>
                            
                            <h3 class="mb-4 font-semibold text-gray-900 dark:text-black-500">Login as:</h3>
                            <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-white-700 dark:border-white-600 dark:text-black-500">
                                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                    <div class="flex items-center pl-3">
                                        <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label for="horizontal-list-radio-license" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Philanthropist </label>
                                    </div>
                                </li>
                                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                    <div class="flex items-center pl-3">
                                        <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label for="horizontal-list-radio-id" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">NGO</label>
                                    </div>
                                </li>
                            </ul>

                            <div className="flex justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                    </div>
                                    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                </div>
                                <button href="/forgot-password" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</button>
                            </div>
                            <a href="/apply" type="submit" className="w-full text-black-500 font-medium rounded-lg text-sm text-center  "> <span></span><span></span><span></span><span></span>   Login to your account</a>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Not registered? <button className="text-blue-700 hover:underline dark:text-blue-500" onClick={() => {window.location.replace('/sign-up');}}>Create account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 

    // </div>
  )
}

export default SignIn