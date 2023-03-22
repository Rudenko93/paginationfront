export const Pagination: React.FC = () => {
  return (
    <div className="pagination-wrapper">
      <div className="pagination1">
        <a href="#">&laquo;</a>
        <a href="#">&lt;</a>
        <a href="#">1</a>
        <a className="active" href="#">
          2
        </a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">&gt;</a>
        <a href="#">&raquo;</a>
      </div>
    </div>
  )
}