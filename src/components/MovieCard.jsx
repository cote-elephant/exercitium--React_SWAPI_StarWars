import { styled } from "styled-components";

//  const StyledContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     margin: 50px 10px;
//     max-width: 250px;
//     height: 250px;
//     background-color: black;
//     color: orange;
//     text-align: center;
//     padding: 10px;
//   `;
export function MovieCard({ film }) {
  if (!film) {
    console.log("no data");
  }
  const { title, director, episode_id, opening_crawl, release_date } = film;

  return (
    <>
      <div className="card">
        <div className="slide slide1">
          <div className="content">
            <h3 >{episode_id}. {title}</h3>
            <p>Directed by {director}</p>
            <p>Released on {release_date}</p>
          </div>
        </div>
        <div className="slide slide2">
          <div className="content">
            <div className="animate-crawling">
              <p>{opening_crawl}...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
