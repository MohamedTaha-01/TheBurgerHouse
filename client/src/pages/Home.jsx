import burger from "../images/burger2.mp4";

export default function Home() {
  return (
    <>
      <div className="hero">
        <video
          muted
          autoPlay
          loop
          preload="auto"
          src={burger}
          type="video/mp4"
        />
        <h1>parrilla</h1>
      </div>
      <div className="products-showcase">
        <div className="showcase-1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit expedita
          reprehenderit earum, cupiditate sequi doloribus est fugiat quae labore
          tempore quidem corrupti aliquam, ipsum delectus dolor, praesentium
          necessitatibus placeat sint?
        </div>
        <div className="showcase-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas non,
          reprehenderit suscipit saepe aliquid impedit illum accusantium sit
          corporis perspiciatis praesentium iusto voluptate aliquam placeat
          aperiam vitae, voluptatibus exercitationem excepturi!
        </div>
      </div>
      <p>hola aaa</p>
      <h1>Header 1</h1>
      <h2>Header 2</h2>
      <h3>Header 3</h3>
      <h4>Header 4</h4>
      <h5>Header 5</h5>
      <h6>Header 6</h6>
      <p>small text</p>
    </>
  );
}
