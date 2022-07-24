/* eslint-disable react/prop-types */

function Website({ website }) {
  const { name, link } = website;

  return (
    <div className="website-container">
      <div>
        <div className="name">{name}</div>
        <div className="link">
          <a href={link}>{link}</a>
        </div>
      </div>
    </div>
  );
}

export default Website;
