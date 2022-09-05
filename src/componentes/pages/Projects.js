import { useLocation } from "react-router-dom";
import styles from "./Projects.module.css";

import Container from "../layout/Container.js";
import Message from "../layout/Message";
import LinkButton from "../layout/LinkButton";

const projects = () => {
  // const location = useLocation()
  let message = "mensagem criada com sucesso";
  // if (location.state) {
  //   message = location.state.message
  // }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message msg={message} type={"success"} />}
      <Container customClass="start">
        
        <p>projetos...</p>
      </Container>
    </div>
  );
};

export default projects;
