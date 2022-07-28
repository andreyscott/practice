/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Example() {
    return (
      <>
  
        <div className="mt-10 px-4 lg:px-8 sm:mt-0">
            {/* contact our team  */}
            <div className="flex  flex-wrap justify-center">
                <div className="w-full px-4 pb-9 text-xl  font-bold sm:w-auto md:w-auto lg:w-auto xl:w-auto">
                    <h2>Contact our Team</h2>
                    </div>
            </div>
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-2xl font-bold flex leading-6 pb-4 text-gray-900">
                    <p className="px-3">Icon</p>
                 Get In Touch 
                    </h3>
                <div className="mt-1 p-2  flex  mb-12 text-sm text-gray-600">
                    {/* icon  */}
                    {/* <p className="px-3"> */}
                        <a href="#" className=" mt-4 border-2 justify-center items-center text-center w-10 h-10 shadow-lg  text-gray-600">
                            <svg className="h-6 pt-1 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.285 2l-1.858-1.242a.5.5 0 00-.858.057L10.5 14.858v7.675a.5.5 0 00.858.057L20.285 2zm-9.9 0l-1.858-1.242a.5.5 0 00-.858.057L3.5 14.858v7.675a.5.5 0 00.858.057L12.285 2zM5.5 16.5v-7.5h7.5v7.5H5.5zm7.5-1h-7.5V5.5h7.5V14z" />
                            </svg>
                        </a>
                    {/* </p> */}
                    <div>
                    <h4 className="text-black font-semibold text-lg  pb-2 pl-3">Pay u a visit</h4>
                  <p className=" text-base pl-3  leading-2" >
                  Use a permanent address where you can receive mail.
                    </p>  
                    </div>
                   
                      </div>
                      <div className="mt-1 p-2  flex  mb-4 text-sm text-gray-600">
                    {/* icon  */}
                    {/* <p className="px-3"> */}
                        <a href="#" className=" mt-4 border-2 justify-center items-center text-center w-10 h-10 shadow-lg  text-gray-600">
                            <svg className="h-6 pt-1 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.285 2l-1.858-1.242a.5.5 0 00-.858.057L10.5 14.858v7.675a.5.5 0 00.858.057L20.285 2zm-9.9 0l-1.858-1.242a.5.5 0 00-.858.057L3.5 14.858v7.675a.5.5 0 00.858.057L12.285 2zM5.5 16.5v-7.5h7.5v7.5H5.5zm7.5-1h-7.5V5.5h7.5V14z" />
                            </svg>
                        </a>
                    {/* </p> */}
                    <div>
                    <h4 className="text-black font-semibold text-lg  pb-2 pl-3">Pay u a visit</h4>
                  <p className=" text-base pl-3  leading-2" >
                  Use a permanent address where you can receive mail.
                    </p>  
                    </div>
                   
                      </div>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          First name
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          placeholder="John"
                          autoComplete="given-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
  
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Last name
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          placeholder="Doe"
                          id="last-name"
                          autoComplete="family-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
  
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Work  Email
                        </label>
                        <input
                          type="email"
                          required
                          name="email-address"
                          id="email-address"
                          autoComplete="email"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
  
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                         Phone Number
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          <select
                          id="phone"

                          name="phone"
                          autoComplete="phone-number"
                          className="mt-1 block w-full  py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option></option>
                          <option>+234</option>
                          <option>+1</option>
                        </select>
                    
                          </span>
                          <input
                            
                            type="phone"
                            name="company-website"
                            id="company-website"
                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder="Phone Number"
                          />
                        </div>
                        </div>
                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                          How many users are you considering legal for
                        </label>
                        <input
                          type="text"
                          name="text"
                          id="text"
                          autoComplete="text"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                          How can our team help you?
                        </label>
                        <textarea
                          type="text"
                          name="text"
                          id="text"
                          autoComplete="text"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
  
                    
            
                    </div>
                  </div>
                  <div className="px-4 py-3 justify-center items-center text-center bg-gray-50 sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center  py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md w-96 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
  
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>
  
        {/* <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
                <p className="mt-1 text-sm text-gray-600">Decide which communications you'd like to receive and how.</p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <fieldset>
                      <legend className="sr-only">By Email</legend>
                      <div className="text-base font-medium text-gray-900" aria-hidden="true">
                        By Email
                      </div>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="comments"
                              name="comments"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="comments" className="font-medium text-gray-700">
                              Comments
                            </label>
                            <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="candidates"
                              name="candidates"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="candidates" className="font-medium text-gray-700">
                              Candidates
                            </label>
                            <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="offers"
                              name="offers"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="offers" className="font-medium text-gray-700">
                              Offers
                            </label>
                            <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <fieldset>
                      <legend className="contents text-base font-medium text-gray-900">Push Notifications</legend>
                      <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            id="push-everything"
                            name="push-notifications"
                            type="radio"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          />
                          <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                            Everything
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="push-email"
                            name="push-notifications"
                            type="radio"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          />
                          <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                            Same as email
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="push-nothing"
                            name="push-notifications"
                            type="radio"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          />
                          <label htmlFor="push-nothing" className="ml-3 block text-sm font-medium text-gray-700">
                            No push notifications
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div> */}
      </>
    )
  }
  