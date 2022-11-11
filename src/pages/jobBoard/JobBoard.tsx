import React, {FC} from 'react';
import {JobList} from "../../components/job/JobList";
import {Container} from "../../components/container/Container";
import {jobsApi} from "../../services/JobService";


interface MainComponentProps{}

export const MainComponent:FC<MainComponentProps> = () => {
    const {data, isLoading, error} = jobsApi.useFetchAllJobsQuery('')
    if (isLoading) {
        return (
            <Container>
                Идет загрузка...
            </Container>
        )
    }
    if (error) {
        return (
            <Container>
                произошла ошибка при загрузки
            </Container>
        )
    }
    console.log(data)
    return (
        <Container>
            <JobList list={data || []}/>

        </Container>
    );
};

