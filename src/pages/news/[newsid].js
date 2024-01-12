import { useReducer } from "next/router";

const NewsDetailsPage =()=> {
    const router =  useReducer()
    return (
        <div>
            <h3> news details page   retuost: {router.query.newsid}
 </h3>
        </div>
    );
}

export default NewsDetailsPage;