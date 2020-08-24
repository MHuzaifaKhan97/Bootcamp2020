import React from 'react';
import GlobalStats from './GlobalStats';
import AllCountries from './AllCountries';

export default function InfoPanel({currentScreen}) {
    if(currentScreen === 0)
        return <GlobalStats />
    if(currentScreen === 1)
        return <AllCountries />
    else 
        return <GlobalStats />
}
