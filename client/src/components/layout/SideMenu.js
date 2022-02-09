import React from "react";

import { Layout, Menu } from "antd";
import {
  FaRegHospital,
  FaRegCalendarAlt,
  FaLifeRing,
  FaUserNurse,
  FaUserCircle
} from "react-icons/fa";
import PropTypes from 'prop-types';
import { Link,withRouter } from "react-router-dom"; //, useLocation
import { useStateValue } from "../../util/StateProvider.jsx";
import logo from  "../../assests/logo.PNG"


const { Sider } = Layout;
// const ConnectIcon = (props) => <Icon component={connectSvg} {...props} />;
const App = ({location}) => {
  const [getdata] = useStateValue();
  
  return (
    <Sider
      collapsible
      collapsed={getdata.sideCollapse}
      className="sidebar"
      trigger={
        <text style={{ fontWeight: "lighter",fontSize:"12px" }}>© 2022 CoherentRx, Inc</text>
      }
      style={{
        fontFamily:" 'Montserrat', sans-serif",

        backgroundColor: "#323031",
      }}
    >
   
        <img
          style={{ margin: 15 }}
          src={logo}
          height={getdata.sideCollapse?30:75}
          
          alt="Logo_Small"
        />
      

      <Menu
        mode="inline"
        defaultSelectedKeys={["/schedule"]}
        selectedKeys={[location.pathname]}
        defaultOpenKeys={["/jobs", "/statistics"]}
        style={{
          paddingTop: 25,
          color: "white",
          borderRight: 0,
          backgroundColor: "#323031",
          left: "-1px",
          position: "relative",
        }}
      >
        <Menu.Item
          style={{ backgroundColor: "#323031" }}
          key="/schedule"
          icon={<FaRegCalendarAlt />}
        >
          <span>Schedule</span>
          <Link to="/schedule"></Link>
        </Menu.Item>

        <Menu.Item
          style={{ backgroundColor: "#323031" }}
          key="/leaves"
          icon={<FaLifeRing />}
        >
          <span>Leaves</span>
          <Link to="/leaves"></Link>
        </Menu.Item>
        <Menu.Item
          style={{ backgroundColor: "#323031" }}
          key="/clinics"
          icon={<FaRegHospital />}
        >
          <span>Clinics</span>
          <Link to="/clinics"></Link>
        </Menu.Item>

        <Menu.Item
          style={{ backgroundColor: "#323031" }}
          key="/nurses"
          icon={<FaUserNurse />}
        >
          <span>Nurses</span>
          <Link to="/nurses"></Link>
        </Menu.Item>
        <Menu.Item
          style={{ backgroundColor: "#323031" }}
          key="/profile"
          icon={<FaUserCircle />}
        >
          <span>My Profile</span>
          <Link to="/profile"></Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

App.propTypes={
  location: PropTypes.object.isRequired
}

export default withRouter(App);
