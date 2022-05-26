import React, { useContext, useState } from 'react';
import CardsRequests from '../../services/Cards';
import cl from '../../styles/ChangeModal.module.css';
import CardField from './CardField';
import ErrorProcessing from '../../services/ErrorProcessing';
import { AuthContext } from '../../context';

export default function ChangeModal({
  visible,
  setVisible,
  id,
  updateCard,
  editCardStatus,
}) {
  const rootClasses = [cl.changeModal];
  // const { setErrorModal } = useContext(AuthContext);
  const [cardValues, setCardValues] = useState({
    title: '',
    description: '',
  });

  const handleClick = async () => {
    try {
      const response = await CardsRequests.updateCard(
        id,
        cardValues.title,
        cardValues.description,
        editCardStatus
      );

      if (response.ok) {
        const card = await response.json();

        updateCard(card);
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
        className={cl.changeModalContent}
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
        <button className={cl.btnChange} onClick={handleClick}>
          Change
        </button>
      </div>
    </div>
  );
}
