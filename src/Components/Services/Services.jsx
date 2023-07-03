import React from 'react';
import {MdDesignServices} from 'react-icons/md';


const Services = () => {
    const servicesInfo = [
        {id: 1, icon:MdDesignServices, name: 'web design', description: 'I can make a fully responsive front end and static website like Portfolio, E-commerce & others.'},
        {id: 2, icon:MdDesignServices, name: 'full stack development', description: 'I can develop website with clean, fresh and issue free code to make your website dynamic perfectly.'},
        {id: 3, icon:MdDesignServices, name: 'UI/UX Design', description: 'I can design creative UI for your app or website as per your demand and specification.'},
    ]
    return (
        <section className='container mx-auto p-5 py-20' id='services'>
            <h2 className="font-source-pro text-4xl font-bold uppercase text-slate-900 text-center">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
                {servicesInfo.map(service => (
                    <div className='border border-primary p-10 rounded-md space-y-2 text-center group transition select-none odd:bg-white even:bg-primary even:text-white even:hover:text-slate-900 odd:hover:bg-primary odd:hover:text-white  even:hover:bg-white'>
                        <service.icon size={60} className='bg-primary text-white rounded-md p-2 mx-auto group-hover:rotate-[360deg] transition'/>
                        <h3 className='font-semibold text-2xl capitalize'>{service.name}</h3>
                        <p className='font-light '>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;