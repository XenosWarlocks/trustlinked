"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const accountNames = accounts.map((a) => a.name);
    const balances = accounts.map((a) => a.currentBalance);

    const data = {
        datasets: [
            {
                label: 'Banks',
                // data: balances,
                data: [19990, 34332, 64532, 56212],
                backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'],
            }
        ],
        // labels: accountNames
        labels: ['Bank 1', 'Bank 2', 'Bank 3', 'Bank 4']
    }

    return <Doughnut
        data={data}
        options={{
            cutout: '60%',
            plugins: {
                legend: {
                    display: false,
                }
            }
        }}
    />
}

export default DoughnutChart;