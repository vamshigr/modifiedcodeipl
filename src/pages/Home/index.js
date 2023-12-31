// Write your code here
import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../../components/TeamCard'

export default function Home() {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    fetch('https://apis.ccbp.in/ipl')
      .then(res => res.json())
      .then(res => setTeams(res.teams))
  }, [])

  const teamsArray = teams.map(team => <TeamCard key={team.id} team={team} />)

  return (
    <>
      {teamsArray.length > 0 ? (
        <ul>{teamsArray}</ul>
      ) : (
        <div data-testid="loader">
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        </div>
      )}
    </>
  )
}
