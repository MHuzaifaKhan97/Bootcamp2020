import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56]
        },
        {
            label: 'My Second dataset',
            backgroundColor: 'lightBlue',
            borderColor: 'rgba(2,93,2,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'darkBlue',
            hoverBorderColor: 'rgba(25,9,1,1)',
            data: [6, 53, 8, 11, 31, 25, 10, 6, 53, 8, 11, 31]
        }
    ]
};

const BarChart = () => {
    return (
        <div>
            <h2>BarChart Example (custom size)</h2>
            <Bar
                data={data}
                width={500}
                height={200}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    );
}
export default BarChart;