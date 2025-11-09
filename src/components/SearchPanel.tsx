import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store";
import { setSearchString } from "../store/actions";


const SearchPanel = () => {
    const dispatch = useDispatch<AppDispatch>();
    const handleSearchString = (searchString: string) => {
        dispatch(setSearchString(searchString))
    }

    return (
        <>
            <input
                type="text"
                placeholder="Search"
                onChange={e => handleSearchString(e.target.value)}
            />
        </>
    )
}
export default SearchPanel;