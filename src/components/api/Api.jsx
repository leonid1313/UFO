import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Api.scss'
import CardList from '../../components/CardList/CardList.jsx'
import Pagination from '../../components/Pagination/Pagination.jsx'

function Search () {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  const [repos, setRepos] = useState([]);

  const searchRepos = async (keyword) => {
    await axios
      .get(`https://pixabay.com/api/?key=23130780-02838ef9e7fd441ed11d8cbfa&q=cats&image_type=all&per_page=100`)
      .then(result => setRepos(result.data.hits));
  }

  useEffect(() => {
    searchRepos('')
  }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    let currentPosts = repos.slice(indexOfFirstPost, indexOfLastPost);

    console.log(currentPosts);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    
    return (
      <div className="container-search">
        <CardList items={currentPosts} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={repos.length}
          paginate={paginate}
        />
      </div>
    )
}

export default Search
