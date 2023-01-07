import './Filters.css'

function Filters({filterName, datoFilter, showValue}) {
  return (
    <div className="form-check form-switch px-5 py-2 rounded btnFilter">
      <input
        className="form-check-input "
        type="checkbox"
        role="switch"
        id={datoFilter}
        value={datoFilter}
        onChange={showValue}

      />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
        {filterName}
      </label>
    </div>
  );
}

export default Filters;
