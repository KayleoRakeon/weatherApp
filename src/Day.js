const Day = ({ dayWeek, maxDegrees, minDegrees }) => (
    <div className="day">
        <p><b>{dayWeek}</b></p>
        <p>{maxDegrees}</p>
        <p>{minDegrees}</p>
    </div>
)

export default Day