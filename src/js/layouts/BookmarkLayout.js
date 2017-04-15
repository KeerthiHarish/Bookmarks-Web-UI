import React from "react"
import BookmarkCard from '../components/BookmarkCard';

export default class BookmarkLayout extends React.Component {

  render () {
    let bookmarks = this.props.bookmarks;
    let bookmarkContainer = bookmarks.length? (
      bookmarks.map((bookmark) => {
        return (
          <BookmarkCard key={bookmark._id} bookmark={bookmark} {...this.props}/>
        )
      })): (<p className="text-center">No notes found</p>)
    return (
      <div>
        {bookmarkContainer}
      </div>
    )
  }
}
