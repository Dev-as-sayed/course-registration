import PropTypes from 'prop-types';
import SingleCours from './SingleCours';

const Listing = ({listing, credits, price}) => {
    const remainingCredits = 20 - credits;
    return (
        <div className="md:w-1/4 p-4 bg-slate-200 rounded-xl ">

            <h2 className="text-blue-500">Credit Hour Remaining <span>{remainingCredits}</span> hr</h2>
            <hr className="my-3" />
            <h2 className="font-bold text-xl mb-3">Course Name</h2>
            <div>   
                {
                    listing.map( (list, inx) => <SingleCours
                    key={inx}
                    list={list}
                    ></SingleCours>)
                }
            </div>
            <hr className="my-3" />
            <p className="font-semibold text-xl">Total Credit Hour : {credits}</p>
            <hr className="my-3" />
            <p className="font-semibold text-gray-600 text-xl">Total Price : {price} USD</p>
        </div>
    );
};
Listing.propTypes = {
    listing: PropTypes.array.isRequired
}
export default Listing;