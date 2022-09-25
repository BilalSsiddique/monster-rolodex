import "./search-box.style.css";

const SearchBox = (props) =>  {
  
    const { onChangeHandler, placeHolder, className } = props
    return (
      <input
        type="search"
        className={`search-box ${className}`}
        placeholder={placeHolder}
        onChange={onChangeHandler}
      />
    );
  }


export default SearchBox;
