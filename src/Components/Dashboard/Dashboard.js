import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/product-analysis-website/main/data.json"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <AreaChart
        width={1200}
        height={300}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="investment" />
        <YAxis dataKey="sell" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="sell"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>

      {/* second chart */}

      <ComposedChart
        style={{ marginTop: "100px" }}
        width={1200}
        height={300}
        data={data}
      >
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="sell" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="investment" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
      </ComposedChart>
    </div>
  );
};

export default Dashboard;
