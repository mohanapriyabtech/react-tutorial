import React, { useState, useEffect } from 'react';

const FetchApi = () => {
  const [data, setData] = useState([]);

  const [click , setClick] = useState(false);
  const [newItem, setNewItem] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);

  const [showList, setShowList] = useState(false); // Initialize with false

  useEffect(() => {
    
    let apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    if (click === 2) {
      apiUrl = 'https://jsonplaceholder.typicode.com/users';
    }

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData,"res")
        setData(responseData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [click]);

  const handleAddItem = () => {
    if (newItem) {
      setData([...data, { id: data.length + 1, title: newItem }]);
      setNewItem('');
    }
  };

  const handleEditItem = (index) => {
    setEditingIndex(index);
  };

  const handleUpdateItem = (index, updatedTitle) => {
    const updatedData = [...data];
    updatedData[index] = { ...data[index], title: updatedTitle };
    setData(updatedData);
    setEditingIndex(-1);
  };

  const handleDeleteItem = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  const handleClickPost = () => {
    setClick(1);
    setShowList(true); 
  };

  const handleClickUsers = () => {
    setClick(2);
    setShowList(true); 
  };

//   return (
//     <div>
//       <div>
//         <button style={{ display: 'inline' }} onClick={handleClickPost}>
//           Posts
//         </button>
//         <button style={{ display: 'inline' }} onClick={handleClickUsers}>
//           Users
//         </button>
//       </div>

//       {showList && ( // Use showList to conditionally render the table
//         <div>
//           <table border="2" style={{ borderCollapse: 'collapse' }}>
//             {/* Rest of your table code */}
//           </table>

//           <div>
//             <input
//               type="text"
//               placeholder="New Item"
//               value={newItem}
//               onChange={(e) => setNewItem(e.target.value)}
//             />
//             <button onClick={handleAddItem}>Add</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FetchApi;



  return (
    
    <div>
        <div>
            <button style={{display : 'inline'}} onClick = {()=>setClick((pre)=>!pre)}>Posts</button>
            <button style={{display : 'inline'}} onClick = {handleClickUsers}>Users</button>
        </div>

    {click && (
    <div>
      <table border="2" style= {{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    value={item.title}
                    onChange={(e) => handleUpdateItem(index, e.target.value)}
                  />
                ) : (
                  item.title
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <button onClick={() => handleUpdateItem(index, item.title)}>Save</button>
                ) : (
                  <>
                    <button onClick={() => handleEditItem(index)}>Edit</button>
                    <button onClick={() => handleDeleteItem(index)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      
      <div>
        <input
          type="text"
          placeholder="New Item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleAddItem}>Add</button>
      </div>
      </div>
      
    )}
      
    </div>
  );
};

export default FetchApi;
