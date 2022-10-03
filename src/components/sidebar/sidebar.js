import styled from 'styled-components'

const SidebarContainer = styled.nav`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    left: 0;
    width: 10%;
    height: 100%;
    background-color: gray;
    z-index: 2;
`

export default function Sidebar() {

    return (
    <SidebarContainer>
        Test
    </SidebarContainer>

    )

}