import FetchRequest from './FetchRequest';

export default class CardsRequests {
  static async getCards() {
    const cards = await FetchRequest.request({
      method: 'Get',
      path: `/cards`,
      isCards: true,
    });
    return cards;
  }

  static async getCard(id) {
    const card = await FetchRequest.request({
      method: 'Get',
      path: `/cards/${id}`,
      isCards: true,
    });

    return card;
  }

  static async getStatuses() {
    const statuses = await FetchRequest.request({
      method: 'Get',
      path: `/statuses`,
      isCards: true,
    });

    return statuses;
  }

  static async createCard(title, description, status) {
    const body = {
      title,
      description,
      status,
    };

    const newCard = await FetchRequest.request({
      method: 'POST',
      path: `/cards`,
      body,
      isCards: true,
    });

    return newCard;
  }

  static async updateCard(id, title, description) {
    const body = {
      title,
      description,
    };

    const updatedCard = await FetchRequest.request({
      method: 'PUT',
      path: `/cards/${id}`,
      body,
      isCards: true,
    });

    return updatedCard;
  }

  static async deleteCard(id) {
    const deletedCard = await FetchRequest.request({
      method: 'DELETE',
      path: `/cards/${id}`,
      isCards: true,
    });

    return deletedCard;
  }
}
