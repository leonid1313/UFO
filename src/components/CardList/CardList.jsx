import React, {useState, useEffect, useCallback} from 'react'
import Card from '../Card/Card.jsx'
import './CardList.scss'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Pagination from '../../components/Pagination/Pagination.jsx'

function CardList ({
  items,
}) {

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const [valueOfSort, setValueOfSort] = useState([...currentPosts])

  console.log(valueOfSort);

    const onChangeStatus = useCallback (
      ( event) => {
        const { value } = event.target;
        switch (value) {
          case 'Sort by':
            setValueOfSort([...currentPosts])
            break;
    
          case 'Likes':
            setValueOfSort([...currentPosts].sort(function(a, b) {
              return b.likes - a.likes;
            }))
            break;
    
          case 'Comments':
            setValueOfSort([...currentPosts].sort(function(a, b) {
              return  b.comments - a.comments;
            }))
            break;
    
          default:
            break;
        }
      }, [currentPosts]
    ) 
  
  const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
      }

    const find = () => {
      if (setSearchTerm === '') {
        setValueOfSort([...currentPosts]);
      } else {
        const results = currentPosts.filter(person =>
          person.tags.toLowerCase().includes(searchTerm)
        );
        setValueOfSort(results);
      }
    }
    useEffect(() => setValueOfSort(currentPosts), [items])

    return (
      <>
        <div className="container-sort">
          <div className="form">
            <Form.Control type="text"
              placeholder="Search for tags"
              value={searchTerm}
              onChange={handleChange}
            />
            <Button className="button-find" variant="primary" onClick={find} >Find</Button>{' '}
          </div>
          <Form.Select onChange={onChangeStatus} id="sort" aria-label="Default select example">
            <option value="Sort by">Sort by</option>
            <option value="Likes">Likes</option>
            <option value="Comments">Comments</option>
          </Form.Select>
        </div>
        <div className="container">
          { (valueOfSort === [])
            ? <h1>No card with this tag</h1>
            : valueOfSort.map(item => (
            <>
              <Card
                key={item.id}
                link={item.pageURL}
                userName={item.user}
                image={item.largeImageURL}
                likes={item.likes}
                tags={item.tags}
                comments={item.comments}
                item={item}
                id={item.id}
              />
            </>
          ))}
        </div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={items.length}
          paginate={paginate}
        />
      </>
    )
}

export default CardList
