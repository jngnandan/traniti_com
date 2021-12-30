


import React, { Component } from 'react'
class Comp1 extends Component {
    state = {
        value: true,
    }
    render() {
        const { value } = this.state
        return (
            <div className='bg-black'>
                {/* Navigation */}
                <nav className="flex items-center justify-between flex-wrap bg-black p-6">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <span className="text-2xl tracking-tight"> <span className='font-bold'>Tran<span className="font-light">iti</span></span></span>
                    </div>
                    <div>
                        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                        </button>
                    </div>
                    <div className="w-full flex-grow lg:flex">
                        <div className="text-sm">
                            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                Docs
                            </a>
                            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                Examples
                            </a>
                            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                                Blog
                            </a>
                        </div>
                    </div>
                </nav>

                <div className='pl-12 bg-gray-700 py-16'>
                    <h1 className='text-2xl text-white'> <span className='font-bold'>We create exceptional experiences</span><br />
                        <span className='font-light'>optimized for business success</span>
                    </h1>
                    <button className='border border-2 hover:border-gray-900 hover:text-gray-900 p-2 text-white rounded mt-6 text-sm'>GET IN TOUCH</button>
                </div>

                <div className='flex flex-row justify-center items-center py-8'>
                    <div className='w-80'>
                        <h1 className='text-2xl text-white'> <span className='font-light'>A Better </span>
                            <span className='font-bold'>Experience Cooler</span>
                        </h1>
                        <p className='text-white font-serif pt-2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vitae atque accusantium, eaque impedit et veritatis possimus maiores non culpa quam, quod tempora nemo doloremque illo nobis, quasi explicabo voluptates?
                        </p>
                    </div>
                </div>

                <div className='flex flex-row justify-center items-center py-8'>
                    <div className='w-80'>
                        <h1 className='text-2xl text-white'> <span className='font-light'>A Better </span>
                            <span className='font-bold'>Experience Cooler</span>
                        </h1>
                        <p className='text-white font-serif pt-2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vitae atque accusantium, eaque impedit et veritatis possimus maiores non culpa quam, quod tempora nemo doloremque illo nobis, quasi explicabo voluptates?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vitae atque accusantium, eaque impedit et veritatis possimus maiores non culpa quam, quod tempora nemo doloremque illo nobis, quasi explicabo voluptates?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vitae atque accusantium, eaque impedit et veritatis possimus maiores non culpa quam, quod tempora nemo doloremque illo nobis, quasi explicabo voluptates?
                        </p>
                    </div>
                </div>

                <div className='flex flex-wrap justify-center items-center'>
                    <div>

                    </div>
                </div>

            </div>
        )
    }
}

export default Comp1
