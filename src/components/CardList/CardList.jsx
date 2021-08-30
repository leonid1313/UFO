import React, {useState, useEffect, useCallback} from 'react'
import Card from '../Card/Card.jsx'
import './CardList.scss'

function CardList ({
  items,
}) {

  const [valueOfSort, setValueOfSort] = useState([...items])
  console.log(valueOfSort);
  console.log(items);

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
    // const [searchResults, setSearchResults] = useState([]);

    const handleChange = useCallback (
      (event) => {
        setSearchTerm(event.target.value);
        let a = items.map(item => (
          item.tags
        ))
    
        const results = a.filter(person =>
          person.toLowerCase().includes(searchTerm)
        );
        setValueOfSort(results);
      }, [items]
    ) 
    // useEffect(() => {
    //   const results = a.filter(person =>
    //     person.toLowerCase().includes(searchTerm)
    //   );
    //   setValueOfSort(results);
    // }, [searchTerm]);

    return (
      <>
        <div className="container-sort">
          <div className="App">
            <input
              className="search-tags"
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
          <select onChange={onChangeStatus}  className="sort">
            <option value="Sort by">Sort by</option>
            <option value="Likes">Likes</option>
            <option value="Comments">Comments</option>
          </select>
        </div>
        <div className="container">
          {items.map(item => (
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
