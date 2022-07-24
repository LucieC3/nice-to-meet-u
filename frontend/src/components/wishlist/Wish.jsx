/* eslint-disable react/prop-types */

function Wish({ wish }) {
  const { name } = wish;

  return (
    <div className="wishlist-container">
      <div>
        <div className="name">{name}</div>
      </div>
    </div>
  );
}

export default Wish;
