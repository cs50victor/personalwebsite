<CardGrid>
    <Card>
        <h3></h3>
        <img/>
    </Card>
</CardGrid>

const Container ={
    width: "95%",
    maxwidth: "600px",
    margin: "0 auto",
    paddingbottom: "60px"
}

export const CardGrid = styled.div`
  display: grid;
  grid-gap: 20px;
`;

export const Card = styled.div`
  border-radius: 15px;
  padding: 20px;
  color: white;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.4);
  h3 {
    margin-top: 0;
    font-size: 2rem;
  }
  img {
    width: 100%;
  }
`;