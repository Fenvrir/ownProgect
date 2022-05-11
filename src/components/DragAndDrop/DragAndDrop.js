import { useState } from 'react';
import { connect } from 'react-redux';
import { replaceCard } from '../Redux/SimpleDND-reducer';
import './DragAndDrop.scss';

const color = 'rgba(0, 0, 0, 0.682)';

function DragAndDrop(props) {

  const [currentCard, setCurrentCurd] = useState();
  

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

   props.replaceCard(currentCard, card);
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
        {props.cards.sort(sortCard).map(card => {
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

const mapStateToProps = (state) => ({
  cards: state.simpleDnD.cards
})

export default connect(mapStateToProps, {replaceCard})(DragAndDrop)