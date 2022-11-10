import React, {FC} from 'react';
import {HiOutlineBookmark} from "react-icons/hi";
import {CiLocationOn} from "react-icons/ci";
import {Link} from "react-router-dom";



interface JobItemProps {
}

export const JobItem: FC<JobItemProps> = () => {
    return (
        <article>
            <div className='bg-body-white py-4 mb-2 py-6 px-4 rounded-lg shadow-lg flex justify-between'>
                <div className='flex w-3/4'>
                    <div className='w-20 h-20 mr-6'>
                        <img src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png" alt=""/>
                    </div>
                    <div>
                        <Link to='/name' >
                            <h1 className='mb-2'>
                                Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder
                                einen Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/
                                zur Fachärztin für Arbeitsmedizin (m/w/d)
                            </h1>
                        </Link>
                        <p className='text-sm text-body-grey'>Department name •  Allgemeines Krankenhaus der Stadt Wien - AKH</p>
                        <div className='inline-flex items-center gap-2 text-sm text-body-grey'>
                            <CiLocationOn/>
                            <span>Vienna, Austria</span>
                        </div>
                    </div>

                </div>
                <div>
                    starsafasdfsdfgsdf
                </div>
                <div className='flex-col text-body-grey'>
                    <div>
                        <HiOutlineBookmark/>
                    </div>
                    <p className='text-sm'>Posted 2 days ago</p>
                </div>

            </div>

        </article>
    );
};


