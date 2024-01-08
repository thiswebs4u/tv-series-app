import './index.css'
const SeriesListItem = ({series}) => {
    return (<li>{series.show.name}</li>);
}
const SeriesList = (props) => {
    return (
    <div>
        <ul className='series-list'>
            {
                props.list.map(series => {
                    return (<SeriesListItem key={series.show.id} series={series} />);
                })}
        </ul>
    </div>);
}

export default SeriesList;