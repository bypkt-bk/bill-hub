import { quoteModel } from "../models/quotes.model";
import { Status } from "@prisma/client";

export const quotesService = {
  async getAllQuotes() {
    return await quoteModel.getQuotes();
  },

  async getQuote(id: string) {
    return await quoteModel.getQuoteById(id);
  },

  async createQuote(
    storeId: string,
    customerId: string,
    products: Array<{ productId: string; quantity: number }>,
    orderDate: string,
    address?: string,
    shippingOn?: string,
  ) {
    return await quoteModel.createQuote(
      storeId,
      customerId,
      products,
      orderDate,
      Status.unpaid,
      address,
      shippingOn,
    );
  },
  async updateAddress(id: string, address: string) {
    return await quoteModel.updateAddress(id, address);
  },

  async markAsPaid(id: string) {
    return await quoteModel.updateQuoteStatus(id, Status.paid);
  },

  async deleteQuote(id: string) {
    return await quoteModel.deleteQuote(id);
  },
};
