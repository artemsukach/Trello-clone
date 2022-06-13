import React, { useEffect } from 'react';
import Modal from '../Components/Modal/CardModal';
import Loader from '../Loader/Loader';
import '../styles/board.css';
import Card from '../Components/Card';
import { useAuth } from '../hooks/useProvideAuth';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStatuses } from '../actions/fetchStatuses';
import { fetchCards } from '../actions/fetchCards';
import { setModal } from '../redux/modal/actions';
import ErrorModal from '../Components/Modal/ErrorModal';

export default function Board() {
  const dispatch = useDispatch();
  const statuses = useSelector((state) => state.statuses);
  const cards = useSelector((state) => state.cards);
  const isLoading = useSelector((state) => state.statuses.isLoading);
  const auth = useAuth();

  useEffect(() => {
    dispatch(fetchStatuses());
    dispatch(fetchCards());
  }, []);

  // const updateCards = (newCard) => {
  //   setCards([...cards, newCard]);
  // };

  // const dragOverHandler = (e) => {
  //   e.preventDefault();
  //   if (e.target.className === 'board__card') {
  //     e.target.style.boxShadow = '0 4px 3px gray';
  //   }
  // };

  // const dropCardHandler = async (e, column) => {
  //   e.preventDefault();

  //   cards.find((item) => item === currentCard).status = column.value;
  //   try {
  //     const response = await CardsRequests.updateCard(
  //       currentCard.id,
  //       currentCard.title,
  //       currentCard.description,
  //       currentCard.status
  //     );

  //     if (response.ok) {
  //       let json = await response.json();

  //       updateCard(json);
  //     } else {
  //       throw new Error(response.status);
  //     }
  //   } catch (e) {
  //     ErrorProcessing.httpErrorMessage(e);
  //   }
  // };

  // const updateCard = (updatedCard) => {
  //   const newCardsArray = cards.map((item) => {
  //     if (item.id === updatedCard.id) {
  //       return updatedCard;
  //     }
  //     return item;
  //   });

  //   setCards(newCardsArray);
  // };

  return (
    <div className="board">
      <ErrorModal>Error</ErrorModal>
      <Modal />
      <div className="button-wrapper">
        <button
          className="button-board"
          onClick={() => dispatch(setModal({ active: true }))}
        >
          + Add card
        </button>
        <button className="button-board" onClick={auth.signout}>
          Log out
        </button>
      </div>
      {/* {isError && <h1>Error</h1>} */}
      {isLoading ? (
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 300 }}
        >
          <Loader />
        </div>
      ) : (
        <div className="board__items">
          {statuses.map((item) => (
            <div
              className="board__item"
              key={item.id}
              // onDragOver={(e) => dragOverHandler(e)}
              // onDrop={(e) => dropCardHandler(e, item)}
            >
              <div className="board__item-title">{item.title}</div>
              {cards.map((card) => {
                if (card.status !== item.value) return null;

                return (
                  <Card
                    card={card}
                    // setCurrentCard={setCurrentCard}
                    // currentCard={setCurrentCard}
                    key={card.id}
                  />
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
