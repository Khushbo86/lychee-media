import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  Tooltip,
} from "recharts";

import styles from "./Hero.module.css";

const data = [
  { month: "Jan", growth: 20 },
  { month: "Feb", growth: 35 },
  { month: "Mar", growth: 42 },
  { month: "Apr", growth: 55 },
  { month: "May", growth: 76 },
  { month: "Jun", growth: 94 },
];

const HeroChart = () => {
  return (
    <div className={styles.chartCard}>
      <div className={styles.chartHeader}>
        <h3>Marketing Growth</h3>
        <span>+284%</span>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="growth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#7a0826" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#7a0826" stopOpacity={0}/>
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="growth"
            stroke="#7a0826"
            strokeWidth={4}
            fill="url(#growth)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HeroChart;