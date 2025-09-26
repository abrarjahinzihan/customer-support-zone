import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black text-white mt-10'>
            <footer className='grid grid-cols-1 md:grid-cols-5 md:text-start gap-8 w-11/12 mx-auto py-10'>
                <div >
                    <h2 className='font-bold text-2xl'>CS — Ticket System</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                
                <div>
                    <h2 className='font-bold text-lg'>Company</h2>
                    <ul>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Our Mission</a></li>
                        <li><a href="">Contact Saled</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold text-lg'>Services</h2>
                    <ul>
                        <li><a href="">Products & Services</a></li>
                        <li><a href="">Customer Stories</a></li>
                        <li><a href="">Download Apps</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold text-lg'>Information</h2>
                    <ul>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms & Conditions</a></li>
                        <li><a href="">Join Us</a></li>
                    </ul>
                </div>
                
                <div>
                    <h2 className='font-bold text-lg'>Social Links</h2>
                    <ul>
                        <li><a href="" className='flex items-center gap-2'>
                            <i class="fa-brands fa-x-twitter"></i>
                            @CS — Ticket System
                        </a></li>
                        <li><a href="" className='flex items-center gap-2'>
                            <i class="fa-brands fa-instagram"></i>
                            @CS — Ticket System
                        </a></li>
                        <li><a href="" className='flex items-center gap-2'>
                            <i class="fa-brands fa-facebook"></i>
                            @CS — Ticket System
                        </a></li>
                        <li><a href="" className='flex items-center gap-2'>
                            <i class="fa-solid fa-envelope"></i>
                            support@cst.com
                        </a></li>
                    </ul>
                </div>
            </footer>
            <hr />
            <p className='text-center py-5'>© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
    );
};

export default Footer;