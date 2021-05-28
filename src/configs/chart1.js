const chartConfig1 = {
  data: {
    labels: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
    datasets: [
      {
        label: 'Activation 1',
        data: [20, 15, 20, 40, 20, 15, 5, 18, 25, 44, 31, 55],
        borderColor: 'rgb(210,116,255)',
        borderWidth: 3,
        fill: false,
      },
      {
        label: 'Activation 2',
        data: [10, 35, 16, 25, 36, 10, 40, 22, 48, 21, 36, 30],
        borderColor: 'rgb(8,84,255)',
        borderWidth: 3,
        fill: false,
      },
      {
        label: 'Activation 3',
        data: [45, 30, 45, 15, 30, 40, 20, 40, 30, 15, 25, 10],
        borderColor: 'rgb(77,234,38)',
        borderWidth: 3,
        fill: false,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {},
        },
      ],
    },
  },
};
export default chartConfig1;
