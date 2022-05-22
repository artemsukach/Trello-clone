import React, { useContext, useEffect, useState } from 'react';
import CardModal from '../Components/Modal/CreateModal';
import ChangeModal from '../Components/Modal/ChangeModal';
import CardsRequests from '../services/Cards';
import Loader from '../Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { useNavigate } from 'react-router-dom';
import Storage from '../services/Storage';
import { AuthContext } from '../context';
import '../styles/board.css';
import Card from '../Components/Card';
import ErrorProcessing from '../services/ErrorProcessing';

export default function Board() {
  const [columns, setColumns] = useState([]);
  const [cards, setCards] = useState([]);
  const [createModal, setCreateModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [id, setId] = useState('');
  const [editCardStatus, setEditCardStatus] = useState('');
  const [currentCard, setCurrentCard] = useState(null);
  const [fetchBoard, isLoading, boardError] = useFetching(async () => {
    const statusesResponse = await CardsRequests.getStatuses();
    const cardsResponse = await CardsRequests.getCards();
    let statuses = await statusesResponse.json();
    let cards = await cardsResponse.json();
    setColumns(statuses);
    setCards(cards);
  });
  const { setErrorModal } = useContext(AuthContext);
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBoard();
  }, []);

  const updateCards = (newCard) => {
    setCards([...cards, newCard]);
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
    if (e.target.className === 'board__card') {
      e.target.style.boxShadow = '0 4px 3px gray';
    }
  };

  const handleChangeAuth = () => {
    Storage.setIsAuth(false);
    setIsAuth(false);
    navigate('/login');
  };

  const dropCardHandler = async (e, column) => {
    e.preventDefault();

    cards.find((item) => item === currentCard).status = column.value;
    try {
      const response = await CardsRequests.updateCard(
        currentCard.id,
        currentCard.title,
        currentCard.description,
        currentCard.status
      );

      if (response.ok) {
        let json = await response.json();

        updateCard(json);
      } else {
        throw new Error(response.status);
      }
    } catch (e) {
      ErrorProcessing.httpErrorMessage(e);
      setErrorModal(true);
    }
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

  const handleClick = () => {
    setCreateModal(true);
  };

  return (
    <div className="board">
      <CardModal
        visible={createModal}
        setVisible={setCreateModal}
        columns={columns}
        updateCards={updateCards}
      />
      <ChangeModal
        visible={editModal}
        setVisible={setEditModal}
        id={id}
        updateCard={updateCard}
        editCardStatus={editCardStatus}
      />
      <div className="button-wrapper">
        <button className="button-board" onClick={handleClick}>
          + Add card
        </button>
        <button className="button-board" onClick={handleChangeAuth}>
          Log out
        </button>
      </div>
      {boardError && <h1>Error: {boardError}</h1>}
      {isLoading ? (
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 300 }}
        >
          <Loader />
        </div>
      ) : (
        <div className="board__items">
          {columns.map((item) => (
            <div
              className="board__item"
              key={item.id}
              onDragOver={(e) => dragOverHandler(e)}
              onDrop={(e) => dropCardHandler(e, item)}
            >
              <div className="board__item-title">{item.title}</div>
              {cards.map((card) => {
                if (card.status === item.value) {
                  return (
                    <Card
                      item={item}
                      card={card}
                      cards={cards}
                      setCards={setCards}
                      setEditModal={setEditModal}
                      setId={setId}
                      setEditCardStatus={setEditCardStatus}
                      setCurrentCard={setCurrentCard}
                      currentCard={setCurrentCard}
                      key={card.id}
                    />
                  );
                }
                return false;
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
