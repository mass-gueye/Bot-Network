import Card from './Card';

const CardList = ({robots}) => {
    const cardArr = robots.map(robot => {
        return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
    })
    return (
        <div>
            {cardArr}
        </div>
    )
}

export default CardList



