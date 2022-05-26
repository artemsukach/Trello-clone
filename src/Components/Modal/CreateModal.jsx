import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context';
import CardsRequests from '../../services/Cards';
import ErrorProcessing from '../../services/ErrorProcessing';
import CardField from './CardField';
import cl from '../../styles/CreateModal.module.css';

export default function CreateModal({
  visible,
  setVisible,
  columns,
  updateCards,
}) {
  const [cardValues, setCardValues] = useState({
    title: '',
    description: '',
    status: 'to_do',
  });
  const rootClasses = [cl.createModal];
  // const { setErrorModal } = useContext(AuthContext);

  const handleClick = async () => {
    try {
      const response = await CardsRequests.createCard(
        cardValues.title,
        cardValues.description,
        cardValues.status
      );

      if (response.ok) {
        const card = await response.json();

        updateCards(card);
        setVisible(false);
      } else {
        throw new Error(response.status);
      }
    } catch (e) {
      ErrorProcessing.httpErrorMessage(e);
      // setErrorModal(true);
    }
  };

  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={cl.closeBtn}></div>
      <div
        className={cl.createModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <CardField
          name="title"
          callback={(e) =>
            setCardValues({ ...cardValues, title: e.target.value })
          }
        />
        <CardField
          name="description"
          callback={(e) =>
            setCardValues({ ...cardValues, description: e.target.value })
          }
        />
        <select
          className={cl.select}
          name="statuses"
          onChange={(e) =>
            setCardValues({ ...cardValues, status: e.target.value })
          }
        >
          {columns.map((status) => {
            return (
              <option value={status.value} key={status.value}>
                {status.title}
              </option>
            );
          })}
        </select>
        <button className={cl.btnCreate} onClick={handleClick}>
          Create
        </button>
      </div>
    </div>
  );
}
