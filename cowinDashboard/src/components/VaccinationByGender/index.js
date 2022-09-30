import {PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByGender = props => {
  const {vaccinationByGender} = props
  return (
    <div>
      <h3 className="title">Vaccination by gender</h3>

      <PieChart width={1000} height={300}>
        <Pie
          cy="40%"
          cx="50%"
          data={vaccinationByGender}
          startAngle={0}
          endAngle={180}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="middle"
          align="center"
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
