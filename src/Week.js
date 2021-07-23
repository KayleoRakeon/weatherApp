import Day from './Day'

const Week = ({ weekList, dateToDay }) => (
    <div className="week">

        <h3>Weekly previsions</h3>

        {weekList.map(
            day => <Day
                dayWeek={dateToDay(day.dt)}
                maxDegrees={Math.round(day.temp.max)}
                minDegrees={Math.round(day.temp.min)}
            />
        )}
    </div>
)

export default Week