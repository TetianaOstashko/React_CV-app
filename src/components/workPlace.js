export function WorkPlace({ title, description, name, link }) {
    return (
        <div className="job-item">
            <p><span className="workList">Title: </span>{title}</p>
            <p><span className="workList">Company's name: </span>{name}</p>
            <p><span className="workList">Project/Role Description: </span>{description}</p>
            <p><span className="workList">Company's website: </span><a href={link}>{name}</a></p>
      </div>
    );
}
  