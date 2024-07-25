import React from "react";
import { useNavigate } from "react-router-dom";
import { UserItem } from "../../types/User";
import { Item } from "../../types/Item";
import styles from "./index.module.css";

interface UserItemDetailsProps {
  restaurantId: string;
  userItem: UserItem;
  item: Item | undefined;
  setUnavailableModal: (value: boolean) => void;
}

const UserItemDetails: React.FC<UserItemDetailsProps> = ({ restaurantId, userItem, item, setUnavailableModal }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (item?.active === "0") {
      setUnavailableModal(true);
    } else {
      navigate(`/restaurant/${restaurantId}/cardapio/${item?.id}`);
    }
  };

  return item ? (
    <li key={userItem.produto_id} className={styles.list} onClick={handleClick}>
      <strong>{userItem.quantity}</strong> {item.name} - Preço: {item.price}
    </li>
  ) : (
    <li key={userItem.produto_id} className={styles.list}>
      Carregando detalhes do item...
    </li>
  );
};

export default UserItemDetails;
