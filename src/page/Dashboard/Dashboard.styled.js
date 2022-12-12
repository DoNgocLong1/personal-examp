import styled from 'styled-components'
import bgImg from '../../assets/images/female.png'

export const Dashborad = styled.div`
    font-size: 20px;
    display: flex;
    flex-direction: row;
    width: 80%;
    @media(max-width:63.9375em){
        width: 100%;
    }
    @media(max-width:46.1875em){
        
    }
`

export const MoblieHeader = styled.header`
    width: 100%;
    position: fixed;
    padding: 0.5em 0;
    display: none;
    color: #FFFFFF;
    align-items: center;
    background-color: #545151;
    @media(max-width:63.9375em){
    }
    @media(max-width:46.1875em){
        display: flex;
    }
`

export const MoblieHeaderP = styled.header`
    width: 100%;
    text-align:center;
    font-size: 1em;
`


export const AppearInfo = styled.button`
    background: transparent;
    outline: none;
    border: none;
    width: 2.5em;
    height: 2.5em;
    position: relative;
    left: 0.5em;

`

export const MenuIcon = styled.img`
    width: 100%;
`

export const Layout = styled.div`
    position: fixed ;
    display: ${props => 
        props.isShow ? "block" : "none"
    };
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #000000;
    opacity: 0.7;
    z-index:99;
`
export const Info = styled.div`
    width: 12em;
    height: 100vh;
    background: #D9D9D9;
    border-right: 1px solid #929191;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1em 1em;
    gap: 1em;
    flex-direction: column;
    z-index:100;
    @media(max-width:63.9375em){
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
    }
    @media(max-width:46.1875em){
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        transform: ${(props) =>
            props.isShow ? "translateX(0)" : "translateX(-100%)"
 
        };
          transition: all 0.3s;
        
    }
`

export const WrapperInfo = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1em;
    flex-direction: column;
`
export const InfoImg = styled.div`
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    width: 8em;
    height: 8em;
    background-size: contain;
    background-position: center;
`

export const InfoDetail = styled.div`
    display: flex;
    position: relative;
    height: 80%;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 0.5em;
    font-weight: bold;
    font-size: 0.8em;
`

export const InfoDetailP = styled.p`
`

export const InfoDetailSpan = styled.span`
`

export const Logout = styled.div`
    margin-top: auto;
    margin-bottom: 1em;
    width: 80%;
`

export const LogoutBtn = styled.div`
    padding: 1em 3em;
    font-size: 0.7em;
    background: #C9CBCB;
    border: 1px solid rgba(0, 0, 0, 0.5);
`

export const DashboardContainer = styled.div`
    background-color: #C4C4C4;
    padding: 1.5em 2em;
    width: 100%;
    height: 100%;
    @media(max-width:63.9375em){
        margin-left: 10em;
    }
    @media(max-width:46.1875em){
        margin-top: 2em;
        margin-left: 0;
        padding: 1.5em 0.5em;
    }
`

export const TestTools = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2em;
`
export const Search = styled.div`
    display: flex;
    flex-direction: row;
    flex: 5;
    border: 1px solid #000000;
    border-radius: 4px;
    overflow: hidden;

`

export const SearchLabel = styled.div`
    padding: 0.5em 1em;
    font-size: 0.8em;
    background: #FFFFFF;
`

export const SearchInput = styled.input`
    background: #F3F1F1;
    border: 1px solid #000000;
    font-size: 0.8em;
    padding: 0.5em 1em;
    width: 100%;
    border: none;
    outline: none;
`
export const SearchInputI = styled.div`

`

export const Filter = styled.select`
    border: 1px solid #000000;
    outline: none;
    border-radius: 4px;
    flex:2;
    @media(max-width:63.9375em){
        
    }
    @media(max-width:46.1875em){
        display: none;
    }
`
export const FilterOption = styled.option`

`

export const TestContainer = styled.div`
    background-color: #D9D9D9;
    padding: 2em;
    margin-top: 1.5em;
    overflow-y: hidden;
    @media(max-width:46.1875em){
        padding: 1.5em 0.5em;
    } 
`