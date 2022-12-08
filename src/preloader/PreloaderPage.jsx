import "./index.css";

const PreloaderPage = () => {
  return (
    <div className="preloader">
      <div class="container">
        <div class="box">
          <div class="loader">
            <span></span>
          </div>
          <div class="loader">
            <span></span>
          </div>
          <div class="loader">
            <i></i>
          </div>
          <div class="loader">
            <i></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreloaderPage;
