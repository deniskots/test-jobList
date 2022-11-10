import React, {FC} from 'react';
import {JobList} from "../../components/job/jobList";
import {Container} from "../../components/container/container";


interface MainComponentProps{}

export const MainComponent:FC<MainComponentProps> = () => {
    fetch('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu')
        .then((res) => {
            return res.json()
        })
        .then((json) => {
            console.log(json)
        })
    return (
        <Container>
            <JobList/>
        </Container>
    );
};

