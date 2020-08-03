import React from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
	labels: [
		'Red',
		'Blue',
		'Yellow'
	],
	datasets: [{
		data: [700, 800, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

const PieChart = () => {
    return (
      <div style={{height:'100px'}}>
        <h2>PieChart Example</h2>
        <Pie data={data} height={100} />
      </div>
    );
  }
export default PieChart;