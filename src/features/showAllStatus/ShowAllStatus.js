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
          {showList.comp.length > 0 ? (
            showList.comp.map((text) => (
              <div key={text.id}>
                <ShowText text={text}>
                  <p className={styles.statusComp}>•</p>
                </ShowText>
              </div>
            ))
          ) : (
            <p className="prepare-message">No completed tasks</p>
          )}
        </section>
      </section>
      <section className={styles.statusIncomp}>
        <h2>incomplete</h2>
        <section className={styles.statusCompSec}>
          {showList.incomp.length > 0 ? (
            showList.incomp.map((text) => (
              <div key={text.id}>
                <ShowText text={text}>
                  <p className={styles.statusIncomp}>•</p>
                </ShowText>
              </div>
            ))
          ) : (
            <p className="prepare-message">completed all tasks</p>
          )}
        </section>
      </section>
    </div>
  );
}

export default ShowAllStatus;
