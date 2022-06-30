import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="split video-section">
        <div className="split-frame">
          <div id="theater">
            <video id="video" src="/video/vfx_01.mp4"></video>
            <canvas id="canvas"></canvas>
            <label>
              <br />
              try to play me
            </label>
          </div>
        </div>
        <div className="split-frame">
          <div>this is munu</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
