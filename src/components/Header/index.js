import styles from "./Header.module.scss";
import TituloComImagem from "./TituloComImagem";
import TituloSemImagem from "./TituloSemImagem";

export default function Header({ titulo, descricao, className = "", imagem }) {
  return (
    <header className={`${styles.header} ${className}`}>
      {titulo && !imagem && (
        <TituloSemImagem titulo={titulo} descricao={descricao} />
      )}
      {titulo && imagem && (
        <TituloComImagem titulo={titulo} descricao={descricao} className={className} imagem={imagem} />
      )}
    </header>
  );
}
