import FetchRequest from './FetchRequest';

export default class CardsRequests {
  static async getCards() {
    const cards = await FetchRequest.request({
      method: 'Get',
      path: `/cards`,
    });

    return cards;
  }

  static async getCard(id) {
    const card = await FetchRequest.request({
      method: 'Get',
      path: `/cards/${id}`,
    });

    return card;
  }

  static async getStatuses() {
    const statuses = await FetchRequest.request({
      method: 'Get',
      path: `/statuses`,
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
    });

    return newCard;
  }

  static async updateCard(id, title, description, value) {
    const status = value || null;
    const body = {
      title,
      description,
      status,
    };

    const updatedCard = await FetchRequest.request({
      method: 'PUT',
      path: `/cards/${id}`,
      body,
    });

    return updatedCard;
  }

  static async deleteCard(id) {
    const deletedCard = await FetchRequest.request({
      method: 'DELETE',
      path: `/cards/${id}`,
    });

    return deletedCard;
  }
}
