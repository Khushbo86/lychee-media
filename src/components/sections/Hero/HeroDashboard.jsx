import {
  AreaChart,
  Area,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  XAxis,
} from "recharts";

import styles from "./Hero.module.css";

const data = [
  { month: "Jan", Sales: 18 },
  { month: "Feb", Sales: 30 },
  { month: "Mar", Sales: 45 },
  { month: "Apr", Sales: 60 },
  { month: "May", Sales: 75 },
  { month: "Jun", Sales: 95 },
];

const HeroDashboard = () => {
  return (
    <div className={styles.dashboard}>

      <div className={styles.chartCard}>

        <div className={styles.chartHeader}>
          <div>
            <h3>Marketing Growth</h3>
            <span>+284%</span>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="growth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7A0826" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#7A0826" stopOpacity={0}/>
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="Sales"
              stroke="#7A0826"
              strokeWidth={4}
              fill="url(#growth)"
            />
          </AreaChart>
        </ResponsiveContainer>

      </div>

      <div className={styles.cards}>

        <div className={styles.smallCard}>
          <h2>98%</h2>
          <p>ROI Increase</p>
        </div>

        <div className={styles.smallCard}>
          <h2>5.2M</h2>
          <p>Monthly Reach</p>
        </div>

      </div>

    </div>
  );
};

export default HeroDashboard;