import axios from "axios";
import { Item } from "../types/types";

const API_URL = "http://localhost:5001/restaurant/menu/item";

// Carrega informacoes dos itens do restaurante, do backend para o front.
export async function loadItens(restaurantId: string) {
  const route: string =
    "http://localhost:5001/restaurant/menu/item/all/" + restaurantId;
  const response = await axios.get(route);
  const itensList: Item[] = response.data;
  return itensList;
}

// Carrega informacao de Item, dado ID
export const getItemDetails = async (itemId: string): Promise<Item> => {
  const response = await fetch(`${API_URL}/${itemId}`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("Erro ao pegar detalhes do item");
  }
  const item = await response.json();
  return item;
};

export async function removeItem(itemId: string) {
  const route: string= "http://localhost:5001/restaurant/menu/item/"+itemId
  const response = await axios.delete(route)
  return response.data
}
