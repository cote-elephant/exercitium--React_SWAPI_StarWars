import { styled } from "styled-components";

 const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px 10px;
    max-width: 250px;
    height: 250px;
    background-color: black;
    color: orange;
    text-align: center;
    padding: 10px;
  `;
export function MovieCard({ film }) {
    if(!film){
        console.log("no data")
    }
  const { title, director, episode_id, opening_crawl, release_date } = film;

 
  return (
    <>
      <StyledContainer>
      <h3>{title}</h3>
      <p>Directed by {director}</p>
      <p>Released on {release_date}</p>
      <div>
        <p>{opening_crawl.slice(0, 50)}...</p>
      </div>
      </StyledContainer>
    </>
  );
}
