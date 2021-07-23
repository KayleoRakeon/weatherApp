const Form = ({ searchCity }) => (
    <div className="search">
        <form action="" onSubmit={searchCity}>
            <input type="text" placeholder="Search a city..." name="recherche" />
            <button type="submit">go</button>
        </form>
    </div>
)

export default Form