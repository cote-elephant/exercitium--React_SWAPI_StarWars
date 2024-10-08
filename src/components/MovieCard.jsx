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
      <div className="turnaround-container">
        <div className="turnaround">
          <div className="front">
            <h3>
              {episode_id}. {title}
            </h3>
            <span>Directed by {director}</span>
            <span>Released on {release_date}</span>
          </div>
          <div className="back">
            <div className="wrapper">
              <div className="text-crawling">
                <p>
                  {title}...{opening_crawl}...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
