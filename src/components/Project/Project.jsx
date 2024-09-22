

const Project = (props) => {
  return (
    <div className="card shadow-sm">
      <img src={props.image} alt="Under Construction" />
      <div className="card-body">
        <p className="card-text">{props.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
          <a href={props.href} className="btn btn-primary w-100 py-2 align-items-center">View</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;