const CHANGE_CARD_PLACES = 'CHANGE_CARD_PLACES';

const initialState = {
    cards: [
        { id: 1, order: 3, text: 'Карточка 3' },
        { id: 2, order: 2, text: 'Карточка 2' },
        { id: 3, order: 1, text: 'Карточка 1' },
        { id: 4, order: 4, text: 'Карточка 4' },
    ]
};

const SimpleDNDReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CARD_PLACES:
            return {
                ...state, cards: state.cards.map(c => {
                    if (action.currentCard.order === c.order) {
                        return { ...c, order: action.card.order }
                    }
                    if (action.card.order === c.order) {
                        return { ...c, order: action.currentCard.order }
                    }
                    return c
                }
                )
            }
        default:
            return state;
    }
}

export const replaceCard = (currentCard, card) => ({ type: CHANGE_CARD_PLACES, currentCard, card }); 

export default SimpleDNDReducer;