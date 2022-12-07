import React, {useState, useEffect} from 'react'
import Pagination from '../../components/Pagination'
import TestList from './components/TestList'
import menu from '../../assets/images/menu.png'
import {
  Dashborad,
  MoblieHeader,
  MoblieHeaderP,
  AppearInfo,
  MenuIcon,
  Layout,
  Info,
  InfoImg,
  InfoDetail,
  InfoDetailP,
  InfoDetailSpan,
  Logout,
  LogoutBtn,
  DashboardContainer,
  TestTools,
  Search,
  SearchLabel,
  SearchInput,
  SearchInputI,
  Filter,
  FilterOption,
  TestContainer
} from './Dashboard.styled'
const Dashboard = () => {
  const [showMenu, setShowmenu] = useState(false)

  useEffect(() => {

  })
  console.log(showMenu)
  return (
    <Dashborad>
      <MoblieHeader>     
        <AppearInfo onClick={() => setShowmenu(true)}>
          <MenuIcon src={menu}/>
        </AppearInfo>
        <MoblieHeaderP> Dashboard</MoblieHeaderP>
      </MoblieHeader>
      {/* sidebar */}
      <Layout onClick={() => {setShowmenu(false)}} isShow = {showMenu}></Layout>
      <Info isShow = {showMenu}>
        <InfoImg/>
        <InfoDetail>
          <InfoDetailP>
          User:
            <InfoDetailSpan>dbf</InfoDetailSpan>
          </InfoDetailP>

          <InfoDetailP>
          Point:
            <InfoDetailSpan>13326</InfoDetailSpan>
          </InfoDetailP>

          <Logout>
            <LogoutBtn>
              LOGOUT
            </LogoutBtn>
          </Logout>
        </InfoDetail>
      </Info>

      {/* dashboard */}
      <DashboardContainer>

        {/* tool */}
        <TestTools>

          {/* search */}
          <Search>
            <SearchInput type="text" placeholder='Search' id='search' />
            <SearchLabel htmlFor="search">
              <SearchInputI className="fas fa-search"/>
            </SearchLabel>
          </Search>
            {/* filter */}
          <Filter id = "level">

            <FilterOption value='difficult'>
              Difficult
            </FilterOption>

            <FilterOption value='normal'>
              Normal
            </FilterOption>

            <FilterOption value='easy'>
              Easy
            </FilterOption>
          </Filter>
        </TestTools>

        {/* test list */}
        <TestContainer>
          <TestList/>
        </TestContainer>
        {/* pagination */}
        <Pagination/>
      </DashboardContainer>
    </Dashborad>
  )
    
}

export default Dashboard