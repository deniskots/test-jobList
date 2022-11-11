import React, {FC} from 'react';
import {JobItem} from "./JobItem";
import {jobsApi} from "../../services/JobService";
import {JobsModel} from "../../models/JobsModel";

interface JobListProps {
    list: JobsModel[]
}

export const JobList: FC<JobListProps> = ({list}) => {


    return (
            <div>
                {list.map((job) => (
                    <JobItem key={job.id} {...job}/>
                ))}
                {/*<JobItem/>*/}
                {/*<JobItem/>*/}
                {/*<JobItem/>*/}
                {/*<JobItem/>*/}
            </div>

    );
};


