import React, {useState, useEffect, useCallback} from 'react'
import Card from '../Card/Card.jsx'
import './CardList.scss'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CardList ({
  items,
  repos,
}) {
  const [valueOfSort, setValueOfSort] = useState([...items])

    const onChangeStatus = useCallback (
      ( event) => {
        const { value } = event.target;
        switch (value) {
          case 'Sort by':
            setValueOfSort([...items])
            break;
    
          case 'Likes':
            setValueOfSort([...items].sort(function(a, b) {
              return b.likes - a.likes;
            }))
            break;
    
          case 'Comments':
            setValueOfSort([...items].sort(function(a, b) {
              return  b.comments - a.comments;
            }))
            break;
    
          default:
            break;
        }
      }, [items]
    ) 
  
  const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
      }

    const find = () => {
      if (setSearchTerm === '') {
        setValueOfSort([...items]);
      } else {
        const results = items.filter(person =>
          person.tags.toLowerCase().includes(searchTerm)
        );
        setValueOfSort(results);
      }
    }

    useEffect(() => setValueOfSort(items), [items])

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
          {valueOfSort.map(item => (
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
              />
            </>
          ))}
        </div>
      </>
    )
}

export default CardList
