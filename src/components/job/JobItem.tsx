import React, {FC} from 'react';
import {HiOutlineBookmark} from "react-icons/hi";
import {CiLocationOn} from "react-icons/ci";
import {Link} from "react-router-dom";
import {JobsModel} from "../../models/JobsModel";
import {DateTime} from "luxon";



interface JobItemProps extends JobsModel{
}

export const JobItem: FC<JobItemProps> = ({title, address, name, createdAt}) => {
    return (
        <article>
            <div className='bg-body-white py-4 mb-2 py-6 px-4 rounded-lg shadow-lg flex justify-between'>
                <div className='flex w-3/4'>
                    <div className='w-20 h-20 mr-6'>
                        <img src="https://api.multiavatar.com/Starcrasher.svg" alt=""/>
                    </div>
                    <div>
                        <Link to='/name' >
                            <h1 className='mb-2'>
                                {title}
                            </h1>
                        </Link>
                        <p className='text-sm text-body-grey mb-2'>{name}• {address}</p>
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
                    {/*<p className='text-sm'>{createdAt}</p>*/}
                    <p className='text-sm'>{DateTime.fromISO(createdAt).toLocaleString(DateTime.DATE_FULL)}</p>
                </div>

            </div>

        </article>
    );
};


