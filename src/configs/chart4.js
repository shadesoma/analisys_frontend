const getRandomData = (num) => {
  const data = []
  for (let i = 0; i < num; i++) {
    data.push(Math.floor(Math.random() * 60) + 1)
  }
  return data
}

const chartConfig4 = {
  data: {
    labels: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
    datasets: [
      {
        label: 'Activation 1',
        data: getRandomData(12),
        borderColor: 'rgb(210,116,255)',
        borderWidth: 3,
        fill: false,
      },
      {
        label: 'Activation 2',
        data: getRandomData(12),
        borderColor: 'rgb(8,84,255)',
        borderWidth: 3,
        fill: false,
      },
      {
        label: 'Activation 3',
        data: getRandomData(12),
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
export default chartConfig4;
