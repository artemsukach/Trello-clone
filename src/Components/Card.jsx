import React, { useContext } from 'react';
import { AuthContext } from '../context';
import CardsRequests from '../services/Cards';
import ErrorProcessing from '../services/ErrorProcessing';
import '../styles/Card.css';

export default function Card({
  item,
  card,
  cards,
  setCards,
  setEditModal,
  setId,
  setEditCardStatus,
  setCurrentCard,
  currentCard,
}) {
  const { setErrorModal } = useContext(AuthContext);

  const dragOverHandler = (e) => {
    e.preventDefault();
    if (e.target.className === 'board__card') {
      e.target.style.boxShadow = '0 4px 3px gray';
    }
  };

  const dragLeaveHandler = (e) => {
    e.target.style.boxShadow = 'none';
  };

  const dragStartHandler = (e, card) => {
    setCurrentCard(card);
  };

  const dragEndHandler = (e) => {
    e.target.style.boxShadow = 'none';
  };

  const dropHandler = async (e, column) => {
    e.preventDefault();
    cards.find((item) => item === currentCard).status = column.value;
    const card = await CardsRequests.updateCard(
      currentCard.id,
      currentCard.title,
      currentCard.description,
      currentCard.status
    );
    updateCard(card);
  };

  const updateCard = (updatedCard) => {
    const newCardsArray = cards.map((item) => {
      if (item.id === updatedCard.id) {
        return updatedCard;
      }
      return item;
    });

    setCards(newCardsArray);
  };

  const editCard = (e) => {
    setEditModal(true);
    setId(e.target.dataset.id);
    setEditCardStatus(
      cards.find((card) => +card.id === +e.target.dataset.id).status
    );
  };

  const deleteCard = async (e) => {
    try {
      const response = await CardsRequests.deleteCard(e.target.dataset.id);

      if (response.ok) {
        setCards((prevState) =>
          prevState.filter((el) => {
            return +el.id !== +e.target.dataset.id;
          })
        );
      } else {
        throw new Error(response.status);
      }
    } catch (e) {
      ErrorProcessing.httpErrorMessage(e);
      setErrorModal(true);
    }
  };

  return (
    <div
      className="board__card"
      onDragOver={(e) => dragOverHandler(e)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragStart={(e) => dragStartHandler(e, card)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDrop={(e) => dropHandler(e, item)}
      draggable={true}
    >
      <p className="board__card-title">{card.title}</p>
      <p className="board__card-description">{card.description}</p>
      <div className="board__btn-wrapper">
        <button className="board__button" data-id={card.id} onClick={editCard}>
          Edit
        </button>
        <button
          className="board__button"
          data-id={card.id}
          onClick={deleteCard}
        >
          Delete
        </button>
      </div>
    </div>
  );
}