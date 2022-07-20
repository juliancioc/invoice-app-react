import Filters from '../../components/Filters'
import NavBar from '../../components/NavBar'

import * as S from './styles'

const Home = () => {
  return (
    <S.Wrapper>
      <NavBar />
      <Filters />
    </S.Wrapper>
  )
}

export default Home
