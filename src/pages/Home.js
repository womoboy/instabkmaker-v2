import "./Home.css";
import ListMenu from '../components/listMenu/ListMenu';
import ListOptions from '../components/listOptions/ListOptions';
import { useState, useEffect } from 'react';

const Home = () => {
  const [menusData, setMenusData] = useState(null);

  useEffect(() => {
    const getMenus = async () => {
      const res = await fetch("http://localhost:8000/menus");
      const data = await res.json();
      if(data) {
        setMenusData(data);
      }
    }
    getMenus();
  }, []);

  const handleChange = () => {

  }

  return (
    <div className="home">
      <section className="menu-section">
        <ListMenu ListMenu={menusData ? menusData : null} />
      </section>
      <section className="split video-section">
        <div className="split-frame">
          <div id="theater">
            <video id="video" src="/video/vfx_01.mp4"></video>
          </div>
        </div>
        <div className="split-frame">
          <div className="menu">
            <ListOptions />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
