import React from "react";
import { useSelector } from "react-redux";
import styles from "./ShowAllStatus.module.css";
import ShowText from "../../Component/ShowText";
import { selectShowList } from "./showAllStatusSlice";

function ShowAllStatus() {
  const showList = useSelector(selectShowList);

  return (
    <div className={styles.showCase}>
      <section className={styles.statusComp}>
        <h2>Completed</h2>
        <section className={styles.statusCompSec}>
          {showList.comp.map((text) => (
            <div>
              <ShowText text={text} key={text.id}>
                <p className={styles.statusComp}>•</p>
              </ShowText>
            </div>
          ))}
        </section>
      </section>
      <section>
        <h2>incomplete</h2>
        <section className={styles.statusCompSec}>
          {showList.incomp.map((text) => (
            <div>
              <ShowText text={text} key={text.id}>
                <p>•</p>
              </ShowText>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
}

export default ShowAllStatus;
