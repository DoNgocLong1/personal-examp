import React, {useState, useContext, useEffect, useRef} from 'react'
import {ThemeContext} from '../Exam/ShowContext'
import Pagination from '../../components/Pagination/Pagination'
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
  const filterRef = useRef()
  const [showMenu, setShowmenu] = useState(false)
  const context = useContext(ThemeContext)
  const [filter, setFilter] = useState('all')
  const [dataSearch, setDataSearch] = useState(context.quizs)
  useEffect(() => {
    context.setAnswerList([])  
    context.setCurrentQuestion(0)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  // search

  const listQuiz = context.quizs
  const [search, setSearch] = useState('')

  console.log(listQuiz);
  const findQuiz = (search) => {
      const data = listQuiz.filter((item) => {
      return item.title.toLowerCase().includes(search.toLowerCase())
    })
    console.log(data);
    return data
  }
   
  const openExam = (index) => {
    context.setListQuestion(index)
  }
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
            <SearchInput 
            type="text" 
            placeholder='Search' 
            id='search'
            value = {search}
            onChange={(e) => setSearch(e.target.value)} 
            />
            <SearchLabel htmlFor="search">
              <SearchInputI 
              className="fas fa-search"
              onClick={() => {
                setDataSearch(findQuiz(search))
                setFilter('all')
              }}
              />
            </SearchLabel>
          </Search>
            {/* filter */}
          <Filter id = "level" 
          ref={filterRef}
          value = {filter}
          onChange={() => setFilter(filterRef.current.value)}
          >
            <FilterOption value='all'>
              All level
            </FilterOption>

            <FilterOption value='hard'>
              Hard
            </FilterOption>

            <FilterOption value='medium'>
              Medium
            </FilterOption>

            <FilterOption value='easy'>
              Easy
            </FilterOption>
          </Filter>
        </TestTools>

        {/* test list */}
        <TestContainer>
          <TestList 
          search = {search}
          data = {dataSearch} 
          onClick = {openExam}
          rule = {filter}
          />
        </TestContainer>
        {/* pagination */}
        <Pagination/>
      </DashboardContainer>
    </Dashborad>
  )
    
}

export default Dashboard