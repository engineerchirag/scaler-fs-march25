import { useState } from "react";

const Pagination = ({ changePage }) => {
    const [pages, setPages] = useState([1,2,3,4,5]);
    return (
        <div className="pagination">
            {
                pages.map(page => (
                    <button onClick={() => changePage(page)}>{page}</button>
                ))
            }
        </div>
    )
}

export default Pagination;