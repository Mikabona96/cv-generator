import styled from 'styled-components';

export const MenuWrapper = styled.div`
    position: fixed;
    width: 5rem;
    top: 50%;
    left: 0;
    transform: translate(${(props:{openMenu: boolean}) => props.openMenu ? '0%' : '-100%'}, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0px 5px;
    transition: 0.3s ease;
`

export const Block = styled.div`
    width: 2rem;
    height: 4rem;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    padding: 10px 15px;
    text-align: center;
    align-items: center;
    cursor: pointer;
    color: ${(props: {changeTheme: boolean}) => !props.changeTheme ? 'black' : 'white'};
    &:last-child {
        margin-bottom: 1rem;
    }
`

export const Icon = styled.span`
    text-align: center;
    font-size: 2rem;
`

export const Text = styled.span``

// ======= Menu switcher ===========
export const MenuSwitcherWrapper = styled.div`
    position: fixed;
    right: 5%;
    top: 1rem;
    font-size: 2rem;
    cursor: pointer;
    color: ${(props: {changeTheme: boolean}) => !props.changeTheme ? 'black' : 'white'};
`