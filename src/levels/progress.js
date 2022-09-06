const ProgressBar = (props) => {
  const completed = props.completed;
  console.log(props);

  const containerStyles = {
    height: 20,
    width: "80vw",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    marginBottom: "35px",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: "#00695c",
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
