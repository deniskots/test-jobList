import React, {FC} from 'react';
import { Container } from '../container/container';
import {JobItem} from "./jobItem";

interface JobListProps {}

export const JobList: FC<JobListProps> = () => {
    return (
            <div>
                <JobItem/>
                <JobItem/>
                <JobItem/>
                <JobItem/>
                <JobItem/>
            </div>

    );
};


