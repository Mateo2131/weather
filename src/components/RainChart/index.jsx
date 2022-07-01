import { LABELS } from './const'
import { ChartContainer, ChartTitle } from './styles'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

function RainChart({ Rain }) {
  const changeOfRain = Rain.map((item) => item.rain)

  const data = {
    labels: LABELS,
    datasets: [
      {
        label: 'Change of rain',
        borderColor: '#fff',
        backgroundColor: '#fff',
        data: changeOfRain
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 3,
    scales: {
      x: {
        ticks: {
          color: '#6b7280'
        }
      },
      y: {
        ticks: {
          color: '#6b7280',
        }
      },
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }

  return (
    <>
      <ChartTitle>Chance of Rain</ChartTitle>
      <ChartContainer>
        <Line data={data} options={options} />
      </ChartContainer>
    </>
  )
}

export default RainChart
