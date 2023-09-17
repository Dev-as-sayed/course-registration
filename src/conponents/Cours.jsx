import PropTypes from 'prop-types';
// import { FiDollarSign } from 'react-icons/fa';
// import Courses from "./Courses";


const Cours = ( {cours}) => {
    const {image, title, description, price, credit} = cours
    console.log(cours);
    return (
        <div className='w-72 h-[22.5rem] p-2 bg-slate-200 rounded-xl'>
            <img className='w-full' src={image} alt="" />
            <div className='h-40'>
                <h3 className='text-xl font-semibold'>{title}</h3>
                <p className='text-gray-500 text-sm my-2'>{description}</p>
                <div className='flex justify-between'>
                    <p><span> </span> <span>Price: {price}</span></p>
                    <p><span></span> <span>Credit: {credit}hr</span></p>
                </div>
            </div>
            <button className='m-1 w-full py-2 bg-blue-500 rounded-xl'>Select</button>
        </div>
    );
};

Cours.propTypes = {
    cours: PropTypes.object.isRequired
}
export default Cours;