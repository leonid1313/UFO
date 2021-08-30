import React, {useState} from 'react'
import Card from '../Card/Card.jsx'
import './CardList.scss'

function CardList ({
  items,
}) {
  const [valueOfSort, setValueOfSort] = useState(items)

    const onChangeStatus = (event) => {
      const { value } = event.target;
  
      switch (value) {
        case 'Sort by':
          setValueOfSort()
          break;
  
        case 'Likes':
          setValueOfSort(items.sort(function(a, b) {
            return b.likes - a.likes;
          }))
          break;
  
        case 'Comments':
          setValueOfSort(items.sort(function(a, b) {
            return  b.comments - a.comments;
          }))
          break;
  
        default:
          break;
      }
    }
    
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
  
    let a = items.map(item => (
      item.tags
    ))

    const handleChange = event => {
      setSearchTerm(event.target.value);
    };
    React.useEffect(() => {
      const results = a.filter(person =>
        person.toLowerCase().includes(searchTerm)
      );
      setSearchResults(results);
    }, [searchTerm]);

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
