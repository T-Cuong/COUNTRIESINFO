import styled from 'styled-components';
import SwithMode from './SwitchMode';

function Header() {
    return (
        <HeaderPane>
            <span>Where in the world?</span>
            <SwithMode />
        </HeaderPane>
    )
}

export default Header;

const HeaderPane = styled.div`
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-between; //justify-content can chinh flex item theo chieu main space-between cho cac item co khoang trong o giua
    padding: 0 40px; //	(top bottom) (right left);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);//do bong
    z-index: 18;//thiet lap thu tu xep chong nhau

    span {
        font-size: 24px;
        font-weight: bold;
        text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
    }
    `