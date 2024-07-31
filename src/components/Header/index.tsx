import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../../utils/styles/Buttons.css';
import '../../utils/styles/StyledLinks.css';
import Logo from '../../assets/log-file-icon.svg';
import UploadIcon from '../../assets/upload.svg';

const NavContainer = styled.nav`
  padding-left: 16px;
  padding-right: 32px;
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0px 15px 0 gray;
  position: relative;
  background-color: white;
`;

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
`;

const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4px;
  font-size: 18px;
  font-weight: bold;
  color: #173b45;
`;

function StyledLink(props: {
  text: string;
  to: string;
  className?: string;
  icon?: string | null;
}) {
  return (
    <Link to={props.to} className={'styled-link ' + props.className}>
      {props.icon ? (
        <div>
          <img src={props.icon} alt={'icon ' + props.icon}></img>
          <span>{props.text}</span>
        </div>
      ) : (
        <span>{props.text}</span>
      )}
    </Link>
  );
}

const Header = () => {
  return (
    <NavContainer>
      <LogoWrapper to="/" className="logo-link">
        <LogoImage src={Logo}></LogoImage>
        <LogoText>
          Logfile <br /> viewer
        </LogoText>
      </LogoWrapper>
      <LinksContainer>
        <StyledLink
          to="/"
          text="Upload file"
          className="primary-button"
          icon={UploadIcon}
        ></StyledLink>
        <StyledLink to="/" text="Home"></StyledLink>
        <StyledLink to="/getting-started" text="Getting started"></StyledLink>
        <StyledLink to="/about" text="About"></StyledLink>
      </LinksContainer>
    </NavContainer>
  );
};

export default Header;
