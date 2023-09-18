import PropTypes from 'prop-types';

const SingleCours = ({list}) => {
    const {title} = list
    return (
        <div>
            <ul>
                <li>{title}</li>
            </ul>
        </div>
    );
};

SingleCours.PropTypes = {
    list: PropTypes.object.isRequired
}
export default SingleCours;
