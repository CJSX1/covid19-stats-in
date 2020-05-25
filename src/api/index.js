import axios from 'axios';

export const fetchData = async () => {
    try {
        
        const { data } = await axios.get('https://covid-19india-api.herokuapp.com/v2.0/country_data');

        const modifiedData = {
            confirmed_cases : data[1].confirmed_cases, 
            active_cases : data[1].active_cases, 
            recovered_cases : data[1].recovered_cases, 
            death_cases : data[1].death_cases,
            last_updated : data[1].last_updated,
            active_rate : data[1].active_rate,
            recovered_rate : data[1].recovered_rate,
            death_rate : data[1].death_rate,
        };

        return modifiedData;

    } catch (error) {
        console.log(error)
    }
}

export const fetchStateData = async () => {
    try {
        
        const { data } = await axios.get('https://api.covidindiatracker.com/state_data.json');

        const modifiedData = data.map(( stateData )=> ({
            state: stateData.state,
            active: stateData.active,
            confirmed: stateData.confirmed,
            recovered: stateData.recovered,
            deaths: stateData.deaths,
        }));

        return modifiedData;

    } catch (error) {
        console.log(error)
    }
}

export const fetchDailyData = async () => {
    try {
        
        const { data:{ cases_time_series } } = await axios.get('https://api.covid19india.org/data.json');

        const slicedData = cases_time_series.slice(-7);

        const modifiedData = slicedData.map(( dailyData )=> ({
            dailyconfirmed: dailyData.dailyconfirmed,
            dailydeceased: dailyData.dailydeceased,
            dailyrecovered: dailyData.dailyrecovered,
            date: dailyData.date,
        }));

        return modifiedData;


    } catch (error) {
        console.log(error)
    }
}