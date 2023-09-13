import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleBookmark,handleRead}) => {
    const {coverImage,title,readingTime,author,postedDate,hashtags} = blog

    return (
        <div className=''>
            <div className='card space-y-3'>
                <img src={coverImage} alt={`cover picture of ${title}`} className='rounded-lg'/>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                        <img className=' w-16 h-16 rounded-full border-t-8 border-[#6047EC]' src={author.image} alt="" />
                        <div>
                            <h4 className='font-bold text-lg'>{author.name}</h4>
                            <p className='text-xs text-[#11111199]'>{author.designation}</p>
                            <p className='text-xs text-[#11111199]'>Published in: {postedDate}</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <span className=' text-[#11111199] font-medium pr-2'>{readingTime} </span>
                        <button  className='hover:scale-110 hover:text-[#6047EC]' onClick={()=>handleBookmark(title)}><FaBookmark></FaBookmark> </button>
                    </div>
                </div>
                <h1 className='text-4xl font-bold'>{title}</h1>
                <p>
                    {
                        hashtags.map((item,idx)=> <span key={idx} className='mr-3 text-[#11111199] font-mono font-semibold'>#{item}</span>)
                    }
                </p>
                <button onClick={()=>handleRead(blog)} className='underline text-[#6047EC] text-left'>Mark as read</button>
            </div>
            <hr className='my-7 '/>
        </div>
    );
};

export default Blog;

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark : PropTypes.func.isRequired,
    handleRead : PropTypes.func.isRequired,
}



