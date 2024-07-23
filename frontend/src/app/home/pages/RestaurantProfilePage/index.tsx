import styles from "./index.module.css";
import RestaurantHeader from "../../../../shared/components/RestaurantHeader/index";
import { useParams, useNavigate } from "react-router-dom";

const Index = () => {
  const { restaurant_id } = useParams<{ restaurant_id: string | undefined }>();
  const navigate = useNavigate();

  const handleMenuClick = () => {
    if (restaurant_id) {
      navigate(`/restaurant/${restaurant_id}/menu`);
    }
  };

  if (!restaurant_id) {
    // Trate o caso onde restaurant_id não está disponível
    return <div className={styles.restaurantPage}>Restaurant not found</div>;
  }

  return (
    <div className={styles.restaurantPage}>
      <RestaurantHeader restaurantId={restaurant_id} />
      <button className={styles.menuButton} onClick={handleMenuClick}>
        Cardápio
      </button>
      <p className={styles.descriptionText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
};

export default Index;