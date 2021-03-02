import React from 'react';
import './footer.css';
import logo from '../../assets/rs_school_logo.svg';

type Props={
  style:any
};
const Footer:React.FC<Props> = ({style}:Props) => (
  <footer className="footer" style={style}>
    <p>
      2021 &copy;
      &nbsp;
      <a href="https://github.com/katerinafedotova">katerinafedotova</a>
      <a href="https://rs.school/js/">
        <img src={logo} alt="RS School Logo" style={{height: '1.25rem'}} />
      </a>
    </p>
  </footer>
);
export default Footer;
