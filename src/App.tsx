import React, {FC} from 'react';

import {MainComponent} from "./pages/main/main";

interface AppProps {

}

export const App: FC<AppProps> =() => {


  return (
        <div>
            <MainComponent/>
        </div>

  );
}


