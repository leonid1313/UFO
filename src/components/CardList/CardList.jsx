import React, {useState, useEffect, useCallback} from 'react'
import Card from '../Card/Card.jsx'
import './CardList.scss'

function CardList ({
  items,
}) {

  console.log(items);
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

    // let a = items.map(item => (
    //   item.tags
    // ))

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
      }

    const find = () => {
      const results = items.filter(person =>
        person.tags.toLowerCase().includes(searchTerm)
      );
      console.log(results, 'aa');
      setValueOfSort(results);
    }

    // useEffect(() => {
    //   const results = a.filter(person =>
    //     person.toLowerCase().includes(searchTerm)
    //   );
    //   setValueOfSort(results);
    // }, [searchTerm]);

    useEffect(() => setValueOfSort(items), [items])

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

            <button className="button-find" onClick={find}>Find</button>
          </div>
          <select onChange={onChangeStatus}  className="sort">
            <option value="Sort by">Sort by</option>
            <option value="Likes">Likes</option>
            <option value="Comments">Comments</option>
          </select>
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
