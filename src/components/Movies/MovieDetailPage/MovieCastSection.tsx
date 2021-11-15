import { Card } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MovieCastSection = () => {
  return (
    <>
      <h4>Top Billed Cast</h4>
      <ul className="movie-cast-list">
        <li>
          <Card className="movie-cast-card">
            <Card.Img
              as={LazyLoadImage}
              variant="top"
              effect="blur"
              className="movie-cast-image"
              src="https://www.themoviedb.org/t/p/w276_and_h350_face/zrJjYjOYzDj7eY9oiHAoz8Yh0yk.jpg"
            />
            <Card.Body className="movie-cast-card-body">
              <Card.Title className="movie-cast-original-name">Simu Liu</Card.Title>
              <Card.Text className="movie-cast-name">Shaun / Shang-Chi</Card.Text>
            </Card.Body>
          </Card>
        </li>
        <li>
          <Card className="movie-cast-card">
            <Card.Img
              as={LazyLoadImage}
              variant="top"
              effect="blur"
              className="movie-cast-image"
              src="https://www.themoviedb.org/t/p/w276_and_h350_face/zrJjYjOYzDj7eY9oiHAoz8Yh0yk.jpg"
            />
            <Card.Body className="movie-cast-card-body">
              <Card.Title className="movie-cast-original-name">Simu Liu</Card.Title>
              <Card.Text className="movie-cast-name">Shaun / Shang-Chi</Card.Text>
            </Card.Body>
          </Card>
        </li>
        <li>
          <Card className="movie-cast-card">
            <Card.Img
              as={LazyLoadImage}
              variant="top"
              effect="blur"
              className="movie-cast-image"
              src="https://www.themoviedb.org/t/p/w276_and_h350_face/zrJjYjOYzDj7eY9oiHAoz8Yh0yk.jpg"
            />
            <Card.Body className="movie-cast-card-body">
              <Card.Title className="movie-cast-original-name">Simu Liu</Card.Title>
              <Card.Text className="movie-cast-name">Shaun / Shang-Chi</Card.Text>
            </Card.Body>
          </Card>
        </li>
        <li>
          <Card className="movie-cast-card">
            <Card.Img
              as={LazyLoadImage}
              variant="top"
              effect="blur"
              className="movie-cast-image"
              src="https://www.themoviedb.org/t/p/w276_and_h350_face/zrJjYjOYzDj7eY9oiHAoz8Yh0yk.jpg"
            />
            <Card.Body className="movie-cast-card-body">
              <Card.Title className="movie-cast-original-name">Simu Liu</Card.Title>
              <Card.Text className="movie-cast-name">Shaun / Shang-Chi</Card.Text>
            </Card.Body>
          </Card>
        </li>
        <li>
          <Card className="movie-cast-card">
            <Card.Img
              as={LazyLoadImage}
              variant="top"
              effect="blur"
              className="movie-cast-image"
              src="https://www.themoviedb.org/t/p/w276_and_h350_face/zrJjYjOYzDj7eY9oiHAoz8Yh0yk.jpg"
            />
            <Card.Body className="movie-cast-card-body">
              <Card.Title className="movie-cast-original-name">Simu Liu</Card.Title>
              <Card.Text className="movie-cast-name">Shaun / Shang-Chi</Card.Text>
            </Card.Body>
          </Card>
        </li>
        <li>
          <Card className="movie-cast-card">
            <Card.Img
              as={LazyLoadImage}
              variant="top"
              effect="blur"
              className="movie-cast-image"
              src="https://www.themoviedb.org/t/p/w276_and_h350_face/zrJjYjOYzDj7eY9oiHAoz8Yh0yk.jpg"
            />
            <Card.Body className="movie-cast-card-body">
              <Card.Title className="movie-cast-original-name">Simu Liu</Card.Title>
              <Card.Text className="movie-cast-name">Shaun / Shang-Chi</Card.Text>
            </Card.Body>
          </Card>
        </li>
        <li>
          <Card className="movie-cast-card">
            <Card.Img
              as={LazyLoadImage}
              variant="top"
              effect="blur"
              className="movie-cast-image"
              src="https://www.themoviedb.org/t/p/w276_and_h350_face/zrJjYjOYzDj7eY9oiHAoz8Yh0yk.jpg"
            />
            <Card.Body className="movie-cast-card-body">
              <Card.Title className="movie-cast-original-name">Simu Liu</Card.Title>
              <Card.Text className="movie-cast-name">Shaun / Shang-Chi</Card.Text>
            </Card.Body>
          </Card>
        </li>
        <li>
          <Card className="movie-cast-card">
            <Card.Img
              as={LazyLoadImage}
              variant="top"
              effect="blur"
              className="movie-cast-image"
              src="https://www.themoviedb.org/t/p/w276_and_h350_face/zrJjYjOYzDj7eY9oiHAoz8Yh0yk.jpg"
            />
            <Card.Body className="movie-cast-card-body">
              <Card.Title className="movie-cast-original-name">Simu Liu</Card.Title>
              <Card.Text className="movie-cast-name">Shaun / Shang-Chi</Card.Text>
            </Card.Body>
          </Card>
        </li>
      </ul>

      <div className="full-cast-crew-container">
        <h5 className="full-cast-crew-text">Full Cast & Crew</h5>
      </div>
    </>
  );
};

export default MovieCastSection;
