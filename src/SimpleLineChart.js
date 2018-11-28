import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';
import axios from 'axios';

/*const data = [
  { name: 'Mon', Visits: 1000, Orders: 800 },
  { name: 'Tue', Visits: 2371, Orders: 1234 },
  { name: 'Wed', Visits: 2462, Orders: 1321 },
  { name: 'Thu', Visits: 2553, Orders: 1541 },
  { name: 'Fri', Visits: 2644, Orders: 1762 },
  { name: 'Sat', Visits: 2735, Orders: 1891 },
  { name: 'Sun', Visits: 2826, Orders: 1558 },
];*/

const data = [];
fetchData();

function fetchData() {
  axios.get('https://jsonplaceholder.typicode.com/comments')
  .then(resp => {
    const arr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const response = resp.data;
    for (let i = 0; i < 7; i++) {
      const visits = response[i].id * Math.floor((Math.random() * 800) + 100);
      const orders = visits - Math.floor((Math.random() * 600) + 300);
      data.push({ name: arr[i], Visits: visits, Orders: orders });
    }
  });
}

function SimpleLineChart() {
  return (
    // 99% per https://github.com/recharts/recharts/issues/172
    <ResponsiveContainer width="99%" height={320}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Visits" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Orders" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SimpleLineChart;