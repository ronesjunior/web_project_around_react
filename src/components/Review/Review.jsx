import "./Review.css";
import { useParams, useNavigate } from "react-router-dom";

function Review({ reviews }) {
  const params = useParams();
  const navigate = useNavigate();
  let id = params.reviewId;
  // Diminua o valor de ID do parâmetro para acessarmos os itens corretos. Isso
  // é necessário porque os índices do array começam com 0, enquanto os IDs da
  // API começam em 1.
  id = id - 1;

  return (
    <div className="review">
      {reviews && (
        <div className="review__item">
          <h3>{reviews[id]?.title}</h3>
          <p>{reviews[id]?.text}</p>
          <p className="review__rating">
            Avaliação final:{reviews[id]?.rating}/5
          </p>
          <button type="button" onClick={() => navigate("/reviews")}>
            Volte para a lista de avaliações
          </button>
        </div>
      )}
    </div>
  );
}

export default Review;
