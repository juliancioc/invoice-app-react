import Filters from '../../components/Filters'
import NavBar from '../../components/NavBar'
import NoInvoices from '../../components/NoInvoices'

import * as S from './styles'

const Home = () => {
  return (
    <S.Wrapper>
      <NavBar />
      <Filters />
      <NoInvoices />
    </S.Wrapper>
  )
}

export default Home
