import { Component } from 'react'
import Form from './Form'
import Details from './Details'
import Week from './Week'
import moment from 'moment'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todayWeather: false,
      todayDate: '',

      weekWeather: false,
      weekDay: '',

      isLoading: false,
    }

    this.searchCity = this.searchCity.bind(this)
    this.dateToDay = this.dateToDay.bind(this)
  }

  async searchCity(e) {
    e.preventDefault()
    let form = new FormData(e.target)

    const q = form.get('recherche');

    this.setState({
      isLoading: true
    })

    const requestToday = await fetch("https://api.openweathermap.org/data/2.5/weather/?appid=947d7d78f8163ce61efcd66af3e11206&lang=fr&q=" + q + "&units=metric")
    const todayWeather = await requestToday.json()
    const todayDate = moment(moment.unix(todayWeather.dt)).format('L')

    const requestWeek = await fetch("https://api.openweathermap.org/data/2.5/forecast/daily/?appid=947d7d78f8163ce61efcd66af3e11206&lang=fr&q=" + q + "&units=metric&cnt=5")
    const weekWeather = await requestWeek.json()

    this.setState({
      todayWeather,
      todayDate,

      weekWeather,

      isLoading: false
    })
  }

  dateToDay(day) {
    const dayWeek = moment(moment.unix(day)).format('ddd')
    return dayWeek
  }

  render() {
    const { isLoading, todayWeather, todayDate, weekWeather } = this.state;

    return (
      <div>
        <Form
          searchCity={this.searchCity}
        />

        {todayWeather ? (
          isLoading ? (
            <p>Chargement...</p>
          ) : (
            <div>

              < Details
                city={todayWeather.name}
                country={todayWeather.sys.country}
                degrees={Math.round(todayWeather.main.temp)}
                date={todayDate}
                sky={todayWeather.weather.description}
                wind={todayWeather.wind.speed}
                humidity={todayWeather.main.humidity}
              />

              {console.log(weekWeather.list)}

              <Week
                weekList={weekWeather.list}
                dateToDay={this.dateToDay}
              />

            </div>
          )
        ) : (
          <p className="none">app météo</p>
        )}

      </div>
    )
  }
}

export default App;
