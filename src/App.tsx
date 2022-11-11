import React, {FC} from 'react';

import {MainComponent} from "./pages/jobBoard/JobBoard";

interface AppProps {
}

export const App: FC<AppProps> = () => {


    return (
        <div>
            <MainComponent/>
        </div>

    );
}


