import { useState } from 'react';
import './DragAndDrop.scss';

const color = 'rgba(0, 0, 0, 0.682)';

function DragAndDrop() {

  const [cardList, setCardList] = useState([
    { id: 1, order: 3, text: 'Карточка 3' },
    { id: 2, order: 2, text: 'Карточка 2' },
    { id: 3, order: 1, text: 'Карточка 1' },
    { id: 4, order: 4, text: 'Карточка 4' },
  ]);
  const [currentCard, setCurrentCurd] = useState();
  window.cards = cardList;

  const dragStartHandler = (ev, card) => {
    setCurrentCurd(card);
    ev.target.style.background = 'gray';
  }
  const dragEndHandler = (ev) => {
    ev.target.style.background = color;
  }
  const dragOverHandler = (ev) => {
    ev.preventDefault();
    ev.target.style.background = 'gray';

  }
  const dragLeaveHandler = (ev) => {
    ev.target.style.background = color;
  }
  const dropHandler = (ev, card) => {
    ev.preventDefault();
    ev.target.style.background = color;

    setCardList(cardList.map(c => {
      if (c.id === card.id) {
        return { ...c, order: currentCard.order }
      }
      if (c.id === currentCard.id) {
        return { ...c, order: card.order }
      }
      return c;
    }))
  }

  const sortCard = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  }
  return (
    <div className='Main'>
      <div>
        <h1>DragAndDrop</h1>
      </div>
      <div className='Board'>
        {cardList.sort(sortCard).map(card => {
          return <div
            onDragStart={ev => dragStartHandler(ev, card)}
            onDragEnd={ev => dragEndHandler(ev)}
            onDragOver={ev => dragOverHandler(ev)}
            onDragLeave={ev => dragLeaveHandler(ev)}
            onDrop={ev => dropHandler(ev, card)}
            draggable={true}
            className='Card'
            key={card.id}>{card.text}
          </div>
        })}
      </div>
    </div>
  )
}

export default DragAndDrop