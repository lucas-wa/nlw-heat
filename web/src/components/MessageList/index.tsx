import styles from "./styles.module.scss";

import logoImage from "../../assets/logo.svg";

import { api } from "../../services/api";

export function MessageList() {
  useEffect(() => {
    //chamada pra api
    api.get("messages/last3").thet((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImage} alt="DoWhile2021" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ex in
            commodi, maiores eaqu
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/lucas-wa.png" alt="Tadomicari" />
            </div>
            <span>Tadomicari</span>
          </div>
        </li>
        <li className={styles.message}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ex in
            commodi, maiores eaqu
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/lucas-wa.png" alt="Tadomicari" />
            </div>
            <span>Tadomicari</span>
          </div>
        </li>
        <li className={styles.message}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ex in
            commodi, maiores eaqu
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/lucas-wa.png" alt="Tadomicari" />
            </div>
            <span>Tadomicari</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
