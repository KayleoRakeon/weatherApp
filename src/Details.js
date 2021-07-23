const Details = ({ city, country, degrees, date, sky, wind, humidity }) => (
    <div className="details">
        <h1>{city}, {country}</h1>
        <p>{degrees}°C</p>
        <p>{date}</p>
        <p>{sky}</p>
        <p>Wind : {wind} mph</p>
        <p>Humidity : {humidity}%</p>
    </div>
)

export default Details