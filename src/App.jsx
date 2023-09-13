import { useState } from 'react'
import './App.css'
import Bloglist from './Components/Bloglist/Bloglist'
import Bookmark from './Components/Boolmarked/Bookmark'
import Header from './Components/Header/Header'

function App() {

  const [bookmark,setBookmark] = useState([])
  const [readingTime,setReadingTime] = useState(0);
  


  const handleBookmark = (title) => {
    if (!bookmark.includes(title) )
    {const newBookmark = [...bookmark,title]
      setBookmark(newBookmark);
      
    }
  }

  const handleRead = (blog) => {
    let firstWord;
    const arr = blog.readingTime.split(' ')
    if (arr){firstWord = arr[0]}
    setReadingTime((+readingTime) + (+firstWord))
    console.log('id');
    const newList = bookmark.filter(title => title !== blog.title);
    setBookmark(newList)
  } 

  return (
    <div>
      <Header/>
      <div className='flex gap-10 justify-between my-7'>
          <Bloglist 
            handleRead={handleRead} 
            handleBookmark={handleBookmark}
          />
          <Bookmark 
            readingTime={readingTime} 
            bookmark={bookmark} 
          />
      </div>
    </div>
  )
}

export default App
