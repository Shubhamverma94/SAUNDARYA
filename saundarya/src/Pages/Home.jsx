
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://logan.nnnow.com/content/dam/nnnow-project/09-nov-2022/se-11-11-/HudaBeauty_TopBanner_1111Saledesktop.jpg" },
  { url: "https://logan.nnnow.com/content/dam/nnnow-project/09-nov-2022/se-11-11-/SC_Topbanner_1111Saledesktop.jpg" },
  { url: "https://logan.nnnow.com/content/dam/nnnow-project/09-nov-2022/se-11-11-/Sephora_GenericTopbanner_1111sale.jpg" },
  { url: "https://logan.nnnow.com/content/dam/nnnow-project/09-nov-2022/se-11-11-/Benefit_TopBanner_1111saledesktop.jpg" },
//   { url: "images/5.jpg" },
//   { url: "images/6.jpg" },
//   { url: "images/7.jpg" },
];

const Home = () => {
  return (
    <div>
          <SimpleImageSlider
        autoPlay={true}
        width={1535}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}

export default Home;