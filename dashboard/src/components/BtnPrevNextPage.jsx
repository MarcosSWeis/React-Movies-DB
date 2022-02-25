export default function BtnPrevNextPage(props) {
  const prevPage = props.prevPage;
  const nextPage = props.nextPage;
  return (
    <>
      {" "}
      <button type="button" class="btn btn-primary" onClick={prevPage}>
        Previos Page
      </button>
      <button type="button" class="btn btn-primary" onClick={nextPage}>
        Next Page
      </button>
    </>
  );
}
