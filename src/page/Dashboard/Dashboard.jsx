import React, {useState, useContext, useEffect, useRef} from 'react'
import {ThemeContext} from '../Exam/ShowContext'
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
  const filterRef = useRef()
  const [showMenu, setShowmenu] = useState(false)
  const context = useContext(ThemeContext)
  const [filter, setFilter] = useState('all')
  let data = []
  let copyArr = [...context.quizs]
  console.log(copyArr.filter((item) => {
    return item.difficulty === 'easy'
  }))
  useEffect(() => {
    context.setAnswerList([])  
    context.setCurrentQuestion(0)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  //filter difficulty
  switch(filter) {
    case 'all' :
      data = copyArr
      break
    case 'easy' :
      data = copyArr.filter((item) => {
        return item.difficulty === 'easy'
      })
      break
    case 'medium' :
      data = copyArr.filter((item) => {
        return item.difficulty === 'medium'
      })
      break
    case 'hard':
      data = copyArr.filter((item) => {
        return item.difficulty === 'hard'
      })
    break
    default: data = copyArr
  }

  // search

  const listQuiz = context.quizs
  const [search, setSearch] = useState('')

  console.log(listQuiz);
  const findQuiz = () => {
      data = listQuiz.filter((item) => {
      return item.title.includes(search)
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
              onClick={findQuiz}
              />
            </SearchLabel>
          </Search>
            {/* filter */}
          <Filter id = "level" 
          ref={filterRef}
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
          data = {data} 
          onClick = {openExam}
          />
        </TestContainer>
        {/* pagination */}
        <Pagination/>
      </DashboardContainer>
    </Dashborad>
  )
    
}

export default Dashboard