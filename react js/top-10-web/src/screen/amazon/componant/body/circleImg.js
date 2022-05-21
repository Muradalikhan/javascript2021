function CircleImg({ img }) {
  return (
    <>
      <div className=" m-2">
        <img
          src={img}
          alt="img"
          width="200px"
          height="200px"
          className="rounded-circle"
        />
      </div>
    </>
  );
}

export default CircleImg;
