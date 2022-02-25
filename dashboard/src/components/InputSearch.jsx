export default function (props) {
  const onSearch = props.onSearch;
  const searchInput = props.searchInput;
  return (
    <div className="row my-4">
      <div className="col-12 col-md-6">
        {/* Buscador */}
        <form method="GET" onSubmit={onSearch}>
          <div className="form-group">
            <label htmlFor="">Buscar por título:</label>
            <input type="text" className="form-control" ref={searchInput} />
          </div>
          <button className="btn btn-info">Search</button>
        </form>
      </div>
    </div>
  );
}
