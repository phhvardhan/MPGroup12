import React from 'react';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredinfo/FeaturedInfo';
import "./home.css";
import {userData} from "../../dummyData";
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import PieChart from '../../components/chart/PieChart';
const Home = ({failCount,passCount, Registered}) => {
    return ( 
        <div className='home'>
            <FeaturedInfo  failCountData={failCount} passCountData={passCount} RegisteredData={Registered} />
            <PieChart/>
            <Chart data={userData} title="User Analytics" grid datakey="Active User" />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg /> 
            </div>
        </div>
    );
}

export default Home;

