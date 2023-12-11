import { Item } from '../Item/Item';

export const Users = ({users}) => {
  return (
    <div className="cardsContainer">
          {users.map((user) => 
          <Item 
            key={user.id} 
            id={user.id} 
            photo={user.avatar} 
            name={user.first_name + user.last_name}
            email={user.price} 
          />
        )
      }
    </div>
  )
}
