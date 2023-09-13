import PropTypes from 'prop-types';
const Bookmark = ({bookmark,readingTime}) => {
    return (
        <div className=" w-2/5">
            <h1 className='bg-[#6047EC1A] text-[#6047EC] text-xl font-semibold text-center py-5 border-[#6047EC] border-2 rounded-lg mb-4'>Spent time on read: {readingTime} min</h1>
            <div className='bg-[#1111110D] px-5 rounded-lg py-7'>
                <h1 className='font-semibold text-xl pb-2'>Bookmarked Blogs: {bookmark.length} </h1>
                {bookmark.map((item,idx)=> <p key={idx} className='bg-white my-2 p-4 rounded-lg'>{item}</p>)  }
            </div>      
        </div>
    );
};

export default Bookmark;

Bookmark.propTypes = {
    bookmark: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired,
    // handleBookmark : PropTypes.func.isRequired,
}