import React, { useState } from 'react';
import CardField from './CardField';
import cl from '../../styles/CreateCardModal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCreateCard } from '../../actions/fetchCreateCard';
import { setModal } from '../../redux/modal/actions';
import { fetchUpdateCard } from '../../actions/fetchUpdateCard';

export default function Modal() {
  const [cardValues, setCardValues] = useState({
    title: '',
    description: '',
    status: 'to_do',
  });

  const rootClasses = [cl.createModal];
  const dispatch = useDispatch();
  const addCardModal = useSelector((state) => state.modal.active);
  const card = useSelector((state) => state.modal.card);
  const statuses = useSelector((state) => state.statuses);

  const handleClick = async () => {
    if (card.id) {
      dispatch(
        fetchUpdateCard(
          card.id,
          cardValues.title,
          cardValues.description,
          cardValues.status
        )
      );
    } else {
      dispatch(
        fetchCreateCard(
          cardValues.title,
          cardValues.description,
          cardValues.status
        )
      );
    }

    dispatch(setModal({active:false}));
  };

  if (addCardModal) {
    rootClasses.push(cl.active);
  }

  return (
    <div
      className={rootClasses.join(' ')}
      onClick={() => dispatch(setModal({active:false}))}
    >
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
          {statuses.map((status) => {
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
