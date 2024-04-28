import React from "react";
import { useSelector } from "react-redux";
import styles from "./ShowAllStatus.module.css";
import ShowText from "../../Component/ShowText";
import { selectShowList } from "./showAllStatusSlice";

function ShowAllStatus() {
  const showList = useSelector(selectShowList);

  return (
    <div className={styles.showCase}>
      <section>
        <h3>Done tarks</h3>
        <section></section>
        <section></section>
      </section>
      <section>
        <h3>Still fight</h3>
        <section></section>
        <section>
          {showList.incomp.regular.map((text) => (
            <div>
              <ShowText text={text} key={text.id} />
            </div>
          ))}
        </section>
      </section>
    </div>
  );
}

export default ShowAllStatus;
