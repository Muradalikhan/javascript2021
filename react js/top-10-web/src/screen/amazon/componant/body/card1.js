function Card1({ title, img }) {
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          margin: "10px auto",
          padding: "20px",
          height: "450px",
          minWidth: "300px",
          maxWidth: "350px",
          border: "1px solid lightgrey",
        }}
      >
        <h2 style={{ float: "left" }}>{title}</h2>
        <img src={img} alt="product" height="330" width="100%"></img>
        <p style={{ float: "left", margin: "10px 0" }}>shop now</p>
      </div>
    </>
  );
}

export default Card1;
